import React, { useState } from "react";
const Body = (props) => {
  const [count, setCount] = useState(0);
  console.log("body rendered");
  console.log(count);
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Body</h1>
      {props.name}
      <h3> Count</h3>
      {count}
      <button onClick={changeCount}>Click</button>
    </>
  );
};

export default Body;
