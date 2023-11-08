import React, {
  useReducer,
} from "react";

type TransactionsProps = {
  id: number;
  amount: number;
  type: string;
  text: string;
};

type TransactionContextProps = {
  transactions: TransactionsProps[];
  addIncomeTransaction : (e: number) => void;
  addExpenseTransaction : (e:number) => void;
  removeTransaction : (e:number) => void;
}

const transactions: TransactionsProps[] = [
  { id: 1, amount: 500, type: "expense", text:"pocket money" },
];
export const TransactionContext = React.createContext<TransactionContextProps>({
  transactions:transactions,
  addIncomeTransaction:()=>{},
  addExpenseTransaction:()=>{},
  removeTransaction:()=>{},
});

const TransactionReducer = (transactionState: any, action: { type: string, payload: {amount?:number, id?:number} }) => {
  switch (action.type) {
    case "ADD_INCOME":
      return [...transactionState,{id:transactionState.length+1, amount:action.payload.amount,type:"income"}];
    case "ADD_EXPENSE":
      return [...transactionState,{id:transactionState.length+1,amount:action.payload.amount,type:"expense"}];
    case "REMOVE_TRANSACTION":
      return [...transactionState].filter((transaction)=>{transaction.id !== action.payload.id});
    default:
      return transactionState;
  }
};

export const TransactionProvider = ({ children }: any) => {
  const [transactionState, dispatch] = useReducer(TransactionReducer, transactions);

  const addIncomeTransaction = (amount: number) => {
    dispatch({ type: "ADD_INCOME", payload: { amount } });
  };

  const addExpenseTransaction = (amount:number) => {
    dispatch({type:"ADD_EXPENSE", payload: {amount}});
  }

  const removeTransaction = (id:number) => {
    dispatch({type:"REMOVE_TRANSACTION", payload:{id}})
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

  const contextValues : TransactionContextProps = {
    transactions:transactionState,
    addIncomeTransaction,
    addExpenseTransaction,
    removeTransaction,
  }
  

  return (
    <TransactionContext.Provider value={contextValues}>
      {children}
    </TransactionContext.Provider>
  );
};

