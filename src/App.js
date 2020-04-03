import React, { useState } from "react";
import { Button } from "reactstrap";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>My count: {count}</p>
      <Button color="success" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}
