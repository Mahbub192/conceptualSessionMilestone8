import React from "react";

const Button = (props) => {
//   console.log(props);
  return (
    <div className="text-center">
      <button className="btn btn-success">{props.children}</button>
    </div>
  );
};

export default Button;
