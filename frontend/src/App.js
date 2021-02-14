import React, { useContext } from "react";
import "./App.css";
import Items from "./components/Categories/Items";
import { Context } from "./Context/ContextApi";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core/";
function App() {
  const data = useContext(Context); // DATA CONTEXT
  const location = useLocation(); // Locacation of url (for button style purpose )

  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          display: "flex",
          margin: "0 auto",
          marginBottom: "55px",
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width: "100%",
          height: "40px",
          padding: "20px 0px",
          borderBottom: "5px solid #F0A202 ",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "fixed",
            display: "flex",
            margin: "0 auto",
            textAlign: "center",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <Button
            component={Link}
            to="/gloves"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: location.pathname.includes("/gloves")
                ? "green"
                : "",
            }}
          >
            Gloves
          </Button>

          <Button
            component={Link}
            to="/facemasks"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: location.pathname.includes("/facemasks")
                ? "green"
                : "",
            }}
          >
            Face masks
          </Button>
          <Button
            component={Link}
            to="/beanies"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: location.pathname.includes("/beanies")
                ? "green"
                : "",
            }}
          >
            Beanies
          </Button>
        </div>
      </div>
      <div style={{ height: "80px", backgroundColor: "red" }}></div>

      <Switch>
        <Route path="/gloves">
          <Items data={data.gloves} title={"Gloves"} />
        </Route>
        <Route path="/facemasks">
          <Items data={data.facemasks} title={"Face Masks"} />
        </Route>
        <Route path="/beanies">
          <Items data={data.beanies} title={"Beanies"} />
        </Route>
        <Route path="/">
          <div style={{ marginTop: "200px" }}>
            <h1
              style={{
                fontWeight: 1000,
                textTransform: "uppercase",
                color: "red",
              }}
            >
              {" "}
              Select one of the categories to start!
            </h1>
            <div style={{ marginTop: "200px", color: "grey" }}>
              <h2>Assignment - Reaktor 2021 </h2>
              <h2>Erkan Isuf</h2>
              <h3>
                Portfolio:{" "}
                <a href="https://erkanisuf.netlify.app/" target="_blank">
                  Link
                </a>
              </h3>
              <h3>
                GitHub:{" "}
                <a href="https://github.com/erkanisuf/" target="_blank">
                  Link
                </a>
              </h3>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
