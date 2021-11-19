import "./App.css";
import React from 'react';
import Person from "./Person";

function App() {
  // return (
  //   <div className="App">
  //     <Person firstName='Nathan' lastName='Krasney'/>
  //   </div>
  // )

  "use strict";

  /*#__PURE__*/
  return React.createElement(
    "div",
    {
      className: "App",
    },
    /*#__PURE__*/ React.createElement(Person, {
      firstName: "Nathan",
      lastName: "Krasney",
    })
  );
}

export default App;
