import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

const ToDoHead = () => {
    const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice Coding" },

    { id: 2, checked: false, item: "Play Cricket" },

    { id: 3, checked: true, item: "Read about AI" },
  ]);

  const handleCheck = (id) => {
    const arr = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(arr);
    localStorage.setItem("todo", JSON.stringify(arr));
  };

  const haldleRemove = (id) => {
    const remove = items.filter((items) => items.id !== id);
    setItems(remove);
    localStorage.setItem("todo", JSON.stringify(remove));
  };

  const handleAddSubmit = (e, item) => {
    e.preventDefault();

    const id = items.length ? items.length + 1 : 1;
    const vals = { id, checked: false, item };
    const itemses = [...items, vals];
    console.log(vals);
    console.log(itemses);
    setItems(itemses);
    setNewItem("");
  };
  return (
    <div className="d-flex justify-content-center m-3">
    <div style={{ width: "100vh",}}>
      <Header title="To Do List" />
      <div style={{border:"2px solid black" }}>
      <AddItem
        handleAddSubmit={handleAddSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <div className="my-4">
        <Content
          items={items}
          handleCheck={handleCheck}
          haldleRemove={haldleRemove}
        />
      </div>
      </div>
      
      <Footer length={items.length} />
    </div>
  </div>
  )
}

export default ToDoHead