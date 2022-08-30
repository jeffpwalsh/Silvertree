import "./App.css";
import { Button } from "./Button.js";
import { useState } from "react";

function App() {
  const colours = [
    "red",
    "blue",
    "green",
    "pink",
    "yellow",
    "grey",
    "black",
    "orange",
    "white",
    "purple",
  ];
  let [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(count++);
    console.log("working");
    if (count >= colours.length) {
      setCount(0);
      console.log(`count return${count}`);
    } else {
      console.log(count);
      setCount(count);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button handleEvent={handleChange} colour={colours[count]} />
      </header>
    </div>
  );
}

export default App;
