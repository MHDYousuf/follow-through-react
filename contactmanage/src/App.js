import React from "react";
import "./App.css";

function App() {
  const name = "Yousuf";

  const showHello = true;
  const showMath = true;
  let math;
  if (showMath) {
    math = (
      <div>
        <h4>1+1 = {1 + 1}</h4>
        <h3>{numadd(10, 20)}</h3>
      </div>
    );
  } else {
    math = null;
  }
  function numadd(num1, num2) {
    return num1 + num2;
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      {math}
      {showHello ? <h4>Hello {name.toUpperCase()} </h4> : null}
    </div>
  );
}

export default App;
