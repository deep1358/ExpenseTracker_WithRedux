import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);
  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div
      style={{
        marginTop: "2rem",
        fontSize: "1rem",
        borderBottom: " 1px solid #bbb",
        display: "flex",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4 style={{ marginRight: ".5rem" }}>Your Balance </h4>
      <h2> ${total}</h2>
    </div>
  );
};

export default Balance;
