import React from "react";

function Details({ selected }) {
  return (
    <div className="details">
      <h1>{selected.name}</h1>
      <img src={selected.avatar} alt={selected.name} />
      <p>{selected.description}</p>
      {/* will only create a title if there is info on watering */}
      {selected.watering.length > 0 && <h2>Waterings</h2>}
      <ul>
        {selected.watering.map((w) => (
          <Watering key={w.id} w={w} />
        ))}
      </ul>
    </div>
  );

  function Watering({ w }) {
    return (
      <li key={w.id}>
        Water this plant with {w.amount} of {w.water_type.toLowerCase()}{" "}
        {w.frequency.toLowerCase()}
      </li>
    );
  }
}

export default Details;
