import { useState, useContext, useEffect } from "react";
import TransactionHistory from "./TransactionHistory";
import TransactionForm from "./TransactionForm";
import { TransactionContext } from "./TransactionProvider";

function AppContent() {
  const { transactions, addIncomeTransaction, addExpenseTransaction } =
    useContext(TransactionContext);

  const balance = transactions.reduce((sum, transaction)=>(sum + transaction.amount),0)

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <>
    <section className="main-page">
      <h2 style={{textAlign:"left"}}>Expense Tracker</h2>
      <article className="balance-output">
        <h4>Your Balance</h4>
        <span className="balance-output-number">${balance}</span>
        <div className="income-expense-container">
          <div className="income-output">
            <p>Income</p>
            <span>+$0</span>
          </div>
          <div className="expense-output">
            <p>Expense</p>
            <span>-$0</span>
          </div>
        </div>
      </article>
      <TransactionHistory />
      <TransactionForm />
      <section className="transaction-note"></section>
    </section>
    </>
  );
}

export default AppContent;