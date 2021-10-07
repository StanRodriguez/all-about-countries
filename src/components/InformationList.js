import React from "react";
const InformationElement = props => {
  return (
    <ul>
      {props.list.map((element, index) => (
        <li key={index}>
          {props.keyName ? element[props.keyName] : element}
          {props.keySymbol && element[props.keySymbol] != null
            ? " (" + element[props.keySymbol] + ")"
            : ""}
        </li>
      ))}
    </ul>
  );
};

export default InformationElement;
