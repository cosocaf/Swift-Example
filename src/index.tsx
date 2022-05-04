import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <header>this is header</header>
      <main>this is main</main>
      <footer>this is footer</footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
