import React, { useState } from "react";

import ToDoLists from "./ToDoLists";
const App = () => {
  const [inputList, setInputList] = useState(" ");
  const [items, setItem] = useState([]);

  const itemEvent = event => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItem(oldItems => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = id => {
    console.log("deleted");
    setItem(oldItems => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className=" main_div">
        <div className="center_div">
          <br />
          <h1> ToDO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listofItems}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  text={itemval}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
