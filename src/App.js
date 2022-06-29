import { useState } from "react";
import "./styles.css";

export default function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="App">
      <div>
        {" "}
        Search :{" "}
        <input text="name" name="query" onChange={handleSearch}></input>
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
      <h2> Search filter in React </h2>
    </div>
  );
}
