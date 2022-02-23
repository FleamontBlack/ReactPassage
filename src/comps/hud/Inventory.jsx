import { useState } from "react";
import Modal from "../Modal";

const Inventory = () => {
  const [items, SetItems] = useState([]);

  const finalitems = () => {
    items.map = (item) => {
      return <div>{item}</div>;
    };
  };

  return <Modal>{finalitems}</Modal>;
};

export default Inventory;
