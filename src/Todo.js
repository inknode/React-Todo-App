import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import { data } from "./data";

const Todo = () => {
  const [item, setItem] = useState(data);
  const [toDo, setToDo] = useState("");

  const removeItem =(id) =>{
    const delItem = item.filter((list)=>list.id !==id);
    setItem(delItem);
  };

  const generateId = () => {
    if (item && item.length) {
      return Math.max(...item.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const addItem = () => {
   
    const newId = generateId();
    const newToDo = { id: newId, name: toDo };
    setItem([...item, newToDo]);
    setToDo("");
  };

const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    addItem();
  }
};

const handleInput = (e) => {
  setToDo(e.target.value);
};


  return (
    <>
      {item.map((list) => {
        const { id, name } = list;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <Button
              variant="contained"
              color="primary"
              onClick={() => removeItem(id)}
            >
              del
            </Button>
          </div>
        );
      })}
      <div className="input">
        <TextField
          id="outlined-size-small"
          label="Add an item"
          size="small"
          style={{ width: "70%" }}
          value={toDo}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
        <Button variant="contained" color="primary" onClick={addItem}>
          +
        </Button>
      </div>
      <div className="del">
        <Button variant="contained" color="primary" onClick={() => setItem([])}>
          Clear
        </Button>
      </div>
    </>
  );
};

export default Todo;
