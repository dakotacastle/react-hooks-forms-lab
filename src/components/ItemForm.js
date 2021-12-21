import React from "react";
import { v4 as uuid } from "uuid";

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    
  };
  props.sendFormDataSomewhere(formData);
  ;
}

function ItemForm(prop) {
  return (
    <form className="NewItem" onItemFormSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
