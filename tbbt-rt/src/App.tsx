import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Time Blocking</h1>
      <h2>React Typescript</h2>
      <div>Form for creating new tasks goes here</div>
      <div>Container for columns goes here</div>

      <div className="card">
        <button
          onClick={() => {
            console.log("count", count);
            setCount((count) => count + 10);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
