import React, { useState } from "react";

function App() {
  const [itemText, setItemText] = useState("");
  const [itemArr, setItemArr] = useState([]);

  function onUpdateInput(e) {
    const newVal = e.target.value;
    setItemText(newVal);
  }

  function handleClick() {
    setItemArr((prev) => {
      const pushItem = itemText;
      setItemText("");
      return [...prev, pushItem];
    });
  }
  let items = itemArr;
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="textitem"
          value={itemText}
          type="text"
          onChange={onUpdateInput}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
