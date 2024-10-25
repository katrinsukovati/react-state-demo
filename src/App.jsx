import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import plants from "./data/plants.json";

function App() {
  // we want to store the entire object in initial state
  const [selected, setSelected] = useState(plants[0]);
  return (
    <>
      <ul>
        {plants.map((plant) => (
          <li
            key={plant.id}
            onClick={() => {
              setSelected(plant);
              console.log(selected);
            }}
          >
            {plant.name}
          </li>
        ))}
      </ul>
      <h1>{selected.name}</h1>
    </>
  );
}

export default App;
