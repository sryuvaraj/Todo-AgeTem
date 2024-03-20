import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({ items, handleCheck, haldleRemove }) => {
  return (
    <>
      <ol>
        {items.map((i) => (
          <li className="item" key={i.id} style={{fontSize:"25px", display:"flex"}}>
            <input
            className=""
              type="checkbox"
              checked={i.checked}
              onChange={() => handleCheck(i.id)}
              style={{ zoom: 2}}
            />
            <h4
            className="mx-2"
              style={
                i.checked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              onDoubleClick={() => handleCheck(i.id)}
            >
              {i.item}
            </h4>
            <FaTrashAlt
            className="mt-2"
              role="button"
              tabIndex="0"
              onClick={() => haldleRemove(i.id)}
              color="red"
              size={25}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ItemsList;
