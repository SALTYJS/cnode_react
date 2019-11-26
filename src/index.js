import React from "react";
import ReactDOM from "react-dom";
import Styles from "./index.less";

const App = () => {
  return (
    <div>
      <h1 className={Styles.title}>Cnode React</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
