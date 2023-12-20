import { useContext, useState, useEffect } from 'react';
import { TransactionContext } from "./TransactionProvider";

const TransactionHistory = () => {
  const {transactions} = useContext(TransactionContext)

  useEffect(()=>{
    setTransactionsData(transactions)
  }, [transactions])

  const [transactionsData, setTransactionsData] = useState(transactions);
  

  return (
    <section className="transaction-history">
      {
        transactionsData.map((transaction) => (
          <div className={`transaction-element ${transaction.type}`} key={transaction.id}>
            <div>{transaction.text}</div>
            <div>{transaction.amount}</div>
          </div>
        ))
      }
    </section>
  )
}

export default TransactionHistory;