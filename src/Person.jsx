import React from "react";

const Person = ({ firstName, lastName }) => {
  return (
    <>
      <p>first name : {firstName}</p>
      <p>last name : {lastName}</p>
    </>
  );
};

export default Person;
