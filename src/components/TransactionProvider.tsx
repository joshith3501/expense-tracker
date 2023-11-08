import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type TransactionsProps = {
  id: number;
  amount: number;
  type: string;
};

const transactions: TransactionsProps[] = [
  { id: 1, amount: 500, type: "expense" },
];
const TransactionContext = React.createContext(transactions);

const TransactionReducer = (transaction: any, action: { type: string, payload: {amount?:number, id?:number} }) => {
  switch (action.type) {
    case "ADD_INCOME":
      return [...transaction,{id:transaction.length+1, amount:action.payload.amount,type:"income"}];
    case "ADD_EXPENSE":
      return [...transaction,{id:transaction.length+1,amount:action.payload.amount,type:"expense"}];
    case "REMOVE_TRANSACTION":
      return [...transaction].filter((transaction)=>{transaction.id !== action.payload.id});
    default:
      return transaction;
  }
};

const TransactionProvider = ({ children }: any) => {
  const [transaction, dispatch] = useReducer(TransactionReducer, transactions);

  const addIncomeTransaction = (e: number) => {
    dispatch({ type: "ADD_INCOME", payload: { amount: e } });
  };

  const addExpenseTransaction = (e:number) => {
    dispatch({type:"ADD_EXPENSE", payload: {amount: e}});
  }

  
  // useEffect (()=>{
  //   if(transaction !== null) {
  //     // Do something with the transaction value here
  //     if(transaction < 0) {
  //       setExpense(transaction*-1);
  //       setTransaction(null);
  //     } else {
  //       setIncome(transaction);
  //       setTransaction(null);
  //     }
  //   }
  // }, [transaction])

  return (
    <TransactionContext.Provider value={transaction}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
