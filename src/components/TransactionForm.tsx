import "../styles/TransactionForm.css";
import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "./TransactionProvider";


const TransactionForm = () => {
  const { addIncomeTransaction, addExpenseTransaction } = useContext(TransactionContext)

  // const initialFormData = {
  //   name: "",
  //   type: "",
  //   amount: "",
  // }

  // const [formData, setFormData] = useState(initialFormData);
  const [transactionName, setTransactionName] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleRadioChange = (event:any) => {
    setTransactionType(event.target.value);
  }
  const handleTransactionSubmit = (event:any) => {
    event.preventDefault();

    if(transactionName === "" || transactionType === "" || transactionAmount==="") {

    } else {
      if(transactionType==="income") {
        addIncomeTransaction(+transactionAmount)
      } else if (transactionType === "expense") {
        addExpenseTransaction(+transactionAmount)
      }
    }

    setTransactionAmount("");
    setTransactionType("");
    setTransactionName("");
  }

  return (
    <div>
      <form onSubmit={handleTransactionSubmit}>
        <label> Transaction Name:</label>
        <input
          type="text"
          className="transaction-name-input input-element"
          name="transactionName"
          value={transactionName}
          autoComplete="off"
          onChange={(e)=>{setTransactionName(e.target.value)}}
        ></input>
        {/* <select id="transaction-type" name="transactionType">
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select> */}
        <div className="transaction-type-selection">
          <label htmlFor="transaction-income">Income</label>
          <input
            type="radio"
            value="income"
            checked={transactionType==="income"}
            name="transaction-type"
            id="transaction-income"
            onChange={handleRadioChange}
          ></input>
          <label htmlFor="transaction-expense">Expense</label>
          <input
            type="radio"
            value="expense"
            checked={transactionType==="expense"}
            name="transaction-type"
            id="transaction-expense"
            onChange={handleRadioChange}
          ></input>
        </div>
        <label> Transaction Amount:</label>
        <input
          type="number"
          className="transaction-amount-input input-element"
          name="transactionAmount"
          value={transactionAmount}
          onChange={(e)=>{setTransactionAmount(e.target.value)}}
        ></input>
        <button type="submit" className="transaction-submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
