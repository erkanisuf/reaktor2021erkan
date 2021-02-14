import React from "react";
import Manufacture from "./manufacture/Manufacture";
import { CircularProgress } from "@material-ui/core/";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const Items = ({ data, title }) => {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 200,
    })
  );

  if (!data.length) {
    return (
      <div>
        {" "}
        <h1> Please wait while loading...</h1>
        <CircularProgress
          size={100}
          style={{ flex: "1 1", marginTop: "15px" }}
        />
      </div>
    );
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          margin: "0 auto",
          width: "90%",
          height: "700px",
        }}
      >
        <h1>Category is : {title}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            justifyItems: "flex-start",
            width: "100%",
            margin: "0 auto",
            borderBottom: "1px solid #ccc",
            padding: "5px",
            backgroundColor: "#F0A202",
            fontWeight: 700,
          }}
        >
          <p style={{ flex: "1 1" }}>#</p>
          <p style={{ flex: "1 1" }}>ID</p>
          <p style={{ flex: "1 1" }}>Name</p>
          <p style={{ flex: "1 1" }}>Type</p>
          <p style={{ flex: "1 1" }}>Manufacture</p>
          <p style={{ flex: "1 1" }}>Colors</p>
          <p style={{ flex: "1 1" }}>Availability</p>
        </div>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={50}
              deferredMeasurementCache={cache.current}
              rowCount={data.length}
              rowRenderer={({ key, index, style, parent }) => {
                const item = data[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          justifyItems: "flex-start",
                          width: "100%",
                          borderBottom: "1px solid #ccc",
                          padding: "5px",
                        }}
                      >
                        <p style={{ flex: "1 1" }}>{index + 1}</p>
                        <p style={{ flex: "1 1" }}>{item.id}</p>
                        <p style={{ flex: "1 1" }}>{item.name}</p>
                        <p style={{ flex: "1 1" }}>{item.type}</p>
                        <p style={{ flex: "1 1" }}>{item.manufacturer}</p>
                        <p style={{ flex: "1 1" }}>
                          {item.color.map((el) => el).join(", ")}
                        </p>
                        <Manufacture
                          manufacture={item.manufacturer}
                          elementID={item.id}
                        />
                      </div>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default React.memo(Items);
