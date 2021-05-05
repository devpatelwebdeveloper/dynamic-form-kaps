import React, { useState } from "react";
import "../../styles.css";

export default function SingleBuyer({ buyer, handleChangeInput }) {
  return (
    <>
      <ul className="flex-outer">
        <li>
          <label for="first-name">First Name</label>
          <input
            type="text"
            name="firstName"
            value={buyer.firstName}
            required
            onChange={(event) => handleChangeInput(buyer.id, event)}
          />
        </li>
        <li>
          <label for="first-name">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={buyer.lastName}
            required
            onChange={(event) => handleChangeInput(buyer.id, event)}
          />
        </li>
      </ul>
    </>
  );
}
