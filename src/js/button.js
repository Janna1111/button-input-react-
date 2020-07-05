import React from "react";

function Button(props) {
  const { alertInput, dis } = props;
  return (
    <button onClick={alertInput} disabled={dis}>
      press
    </button>
  );
}

export default Button;
