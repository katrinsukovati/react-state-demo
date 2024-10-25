import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import plants from "./data/plants.json";

function App() {
  // we want to store the entire object in initial state
  // using state allows us to re-render
  const [selected, setSelected] = useState(plants[0]);
  return (
    <>
      <nav>
        <ul>
          {plants.map((plant) => (
            <li
              key={plant.id}
              onClick={() => {
                setSelected(plant);
                console.log("clicked on", selected.name);
              }}
            >
              {plant.name}
            </li>
          ))}
        </ul>
        <h1>{selected.name}</h1>
        <img src={selected.avatar} alt={selected.name} />
        <p>{selected.description}</p>
        <ul>
          {selected.watering.map((w) => {
            return (
              <li key={w.id}>
                Water this plant with {w.amount} of {w.water_type.toLowerCase()}{" "}
                {w.frequency.toLowerCase()}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default App;
