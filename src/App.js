import React, { useState } from "react";

function App() {
  // Initialize state for count with default value of 0
  const [count, setCount] = useState(0);

  // Define styles for the buttons
  const buttonStyle = {
    backgroundColor: "lightblue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {/* Display the application title */}
      <h1>Simple Counter App</h1>

      {/* Display the current count */}
      <p>Count: {count}</p>

      {/* Button to increment the count */}
      <button
        style={{ ...buttonStyle, marginRight: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      {/* Button to decrement the count */}
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
