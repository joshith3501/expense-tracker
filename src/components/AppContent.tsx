import { useState, useContext, useEffect } from "react";
import TransactionHistory from "./TransactionHistory";

import { TransactionContext } from "./TransactionProvider";

function AppContent() {
  const { transactions, addIncomeTransaction, addExpenseTransaction } =
    useContext(TransactionContext);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    addIncomeTransaction(10);
    setIndex(1);
  };

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <>
      <h1>Expense Tracker</h1>
      <article className="balance-output">
        <h2>Your Balance</h2>
        {/* <span>{transactions[index].amount}</span> */}
        {transactions.length > index && (
          <span>{transactions[index].amount}</span>
        )}
        <button onClick={handleClick}>Click me to add</button>
      </article>
      <TransactionHistory />
      <section className="transaction-note"></section>
    </>
  );
}

export default AppContent;