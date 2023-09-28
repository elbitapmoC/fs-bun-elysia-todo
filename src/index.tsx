import { react, useState } from "react";
import { createRoot } from "react-dom";
const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hellooooo Nurse:</h1>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

root.render(<App />);
