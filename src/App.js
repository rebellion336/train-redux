import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { increment, decrement } from "./actions/counter";

import { connect } from "react-redux";

const App = ({ message, counter, dispatch }) => {
  console.log("prop", dispatch);
  return (
    <div className="container">
      <div className="columns column is-12">
        <h1>Counter : {counter}</h1>
      </div>

      <div className="buttons">
        <button
          onClick={() => dispatch(increment(1))}
          className="button is-primary"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(increment(2))}
          className="button is-link"
        >
          +2
        </button>
        <button
          onClick={() => dispatch(increment(3))}
          className="button is-info"
        >
          +3
        </button>
      </div>

      <div className="buttons">
        <button
          onClick={() => dispatch(decrement(1))}
          className="button is-primary"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(decrement(2))}
          className="button is-link"
        >
          -2
        </button>
        <button
          onClick={() => dispatch(decrement(3))}
          className="button is-info"
        >
          -3
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: "This is message from mapStateToProps",
    counter: state.counter || 0,
  };
};

export default connect(mapStateToProps)(App);
