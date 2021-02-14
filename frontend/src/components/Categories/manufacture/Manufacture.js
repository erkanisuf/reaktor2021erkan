import React, { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { Button, makeStyles, CircularProgress, Chip } from "@material-ui/core/";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    zIndex: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const Manufacture = ({ manufacture, elementID }) => {
  const classes = useStyles();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  // FUNCTION that can be fired with Button or Useeffect
  const fetchItem = () => {
    setLoading(true);

    fetch(`https://erkanisufreakt.azurewebsites.net/manufacture/`, {
      method: "POST",
      body: JSON.stringify({ manufacture: manufacture, elementID: elementID }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
        }
      })
      .then((res) => {
        if (res) {
          const xml = new XMLParser().parseFromString(res.data.DATAPAYLOAD); // XML converter and takes the value

          setResult(xml.children[1].value);
          setLoading(false);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    fetchItem();
    return () => {
      setResult(result);
    };
  }, [manufacture, elementID]);

  if (!result) {
    return (
      <div style={{ flex: "1 1", marginTop: "15px" }}>
        {loading ? (
          <CircularProgress
            size={20}
            style={{ flex: "1 1", marginTop: "15px" }}
          />
        ) : (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            className={classes.margin}
            onClick={fetchItem}
          >
            Check avability
          </Button>
        )}{" "}
      </div>
    );
  } else if (error) {
    return (
      <div style={{ flex: "1 1", marginTop: "15px" }}>
        <span style={{ color: "red" }}>Error</span>{" "}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.margin}
          onClick={fetchItem}
        >
          Refresh
        </Button>
      </div>
    );
  } else
    return (
      <div style={{ flex: "1 1", marginTop: "15px" }}>
        <Chip
          label={result}
          style={{
            backgroundColor:
              result === "INSTOCK"
                ? "green"
                : result === "LESSTHAN10"
                ? "orange"
                : "red",
            color: "white",
            marginTop: "15px",
          }}
        />
      </div>
    );
};

export default React.memo(Manufacture);
