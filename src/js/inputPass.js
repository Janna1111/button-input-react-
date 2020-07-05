import React from "react";

function InputPass(props) {
  const { inputPass } = props;
  return <input type="password" onChange={inputPass}></input>;
}

export default InputPass;
