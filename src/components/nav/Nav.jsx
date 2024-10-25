function Nav({ plants, setSelected }) {
  return (
    <nav className="nav">
      <ul>
        {plants.map((plant) => (
          <li
            key={plant.id}
            onClick={() => {
              setSelected(plant);
            }}
          >
            {plant.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
