function CarsCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function CarsRow({ car }) {
  const name = car.stocked ? car.name :
    <span style={{ color: 'red' }}>
      {car.name}
    </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{car.price}</td>
      </tr>
    );
}

function CarsTable({ cars }) {
  const rows = [];
  let lastCategory = null;

  cars.forEach((car) => {
    if (car.category !== lastCategory) {
      rows.push(<CarsCategoryRow category={car.category} key={car.category} />);
    }
    rows.push(<CarsRow car={car} key={car.name} />);
    lastCategory = car.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Prices</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form action="./">
      <input type="text" placeholder="Search cars..." />
      <label htmlFor="search">
        <input type="checkbox" /> Only show cars in stock
      </label>
    </form>
  );
}

function FilterableCarsTable({ cars }) {
  return (
    <div className="p-10">
      <SearchBar />
      <CarsTable cars={cars} />
    </div>
  );
}

const CARS = [
  {
    category: "Hybrid",
    price: "$24,999.99",
    stocked: true,
    name: "Toyota Yarris"
  },
  {
    category: "Hybrid",
    price: "$24,999.99",
    stocked: false,
    name: "Toyota Camry"
  },
  {
    category: "Hybrid",
    price: "$24,999.99",
    stocked: true,
    name: "Toyota Corolla"
  },
  {
    category: "BIG SUV",
    price: "$84,999.99",
    stocked: false,
    name: "Toyota Land Cruiser Prado"
  },
  {
    category: "BIG SUV",
    price: "$74,999.99",
    stocked: true,
    name: "Mazda CX-12"
  },
  {
    category: "BIG SUV",
    price: "$54,999.99",
    stocked: true,
    name: "KIA Sportage AWD"
  },
];

export default function App() {
  return <FilterableCarsTable cars={CARS} />;
}
