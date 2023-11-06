import { useState } from 'react';
import TransactionHistory from './components/TransactionHistory';
import './App.css'
import TransactionProvider from './components/TransactionProvider';
import { useTransaction } from './components/TransactionProvider';

function App() {

    const balance = useTransaction();

  return (
    <>
      <TransactionProvider>

        <h1>Expense Tracker</h1>
        <article className="balance-output">
          <h2>Your Balance</h2>
          <span>{balance}</span>
        </article>
        <TransactionHistory />
        <section className="transaction-note">

        </section>

      </TransactionProvider>
    </>
  )
}

export default App;
