import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("add/Contact", (data) => ({
  payload: {
    ...data,
    id: uuidv4(),
  },
}));

const deleteContact = createAction("delete/Contact");
const handleFilter = createAction("filter/Contact");

export default { addContact, deleteContact, handleFilter };
