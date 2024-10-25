import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import plantsData from "./data/plants.json";
import Nav from "./components/nav/Nav";
import Details from "./components/details/Details";

function App() {
  // we want to store the entire object in initial state
  // using state allows us to re-render
  const [selected, setSelected] = useState(plantsData[0]);

  // returns everything that is true
  // return false if the name that is selected (you can use ids?) otherwise we do
  const plants = plantsData.filter((d) => d !== selected);

  return (
    <>
      <Nav plants={plants} setSelected={setSelected} />
      <Details selected={selected} />
    </>
  );
}

export default App;
