import React from "react";

// const Person = ({ firstName, lastName }) => {
//   return (
//     <>
//       <p>first name : {firstName}</p>
//       <p>last name : {lastName}</p>
//     </>
//   );
// };

("use strict");

const Person = ({ firstName, lastName }) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement("p", null, "first name : ", firstName),
    /*#__PURE__*/ React.createElement("p", null, "last name : ", lastName)
  );
};

export default Person;
