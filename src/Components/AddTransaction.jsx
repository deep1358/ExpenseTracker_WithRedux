import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length !== 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
      document.getElementById("warning").style.visibility = "hidden";
    } else {
      document.getElementById("warning").style.visibility = "visible";
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          <span id="warning">Can't Add Empty Item</span>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount in $<br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
