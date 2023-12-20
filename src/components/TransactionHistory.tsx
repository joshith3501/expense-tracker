import { useContext } from 'react';
import { TransactionContext } from "./TransactionProvider";

const TransactionHistory = () => {
  const {transactions, addIncomeTransaction, addExpenseTransaction } = useContext(TransactionContext)

  return (
    <section className="transaction-history">
      {
        transactions.map((transaction) => (
          <div className={`transaction-element ${transaction.type}`} key={Date.now()}>
            <div>{transaction.text}</div>
            <div>{transaction.amount}</div>
          </div>
        ))
      }
    </section>
  )
}

export default TransactionHistory;