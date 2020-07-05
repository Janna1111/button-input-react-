import React from "react";

function Input(props) {
  const { inputlogin } = props;
  return <input type="text" onChange={inputlogin}></input>;
}

export default Input;
