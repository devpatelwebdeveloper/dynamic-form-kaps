import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" }
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <>
      <form>
        {inputFields.map((inputField) => (
          <React.Fragment key={inputField.id}>
            <ul className="flex-outer">
              <li>
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={inputField.firstName}
                  required
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </li>
              <li>
                <label for="first-name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={inputField.lastName}
                  required
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </li>
            </ul>
            <button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Remove
            </button>
            <button onClick={handleAddFields}>Add another</button>
            <hr />
          </React.Fragment>
        ))}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </>
  );
}
