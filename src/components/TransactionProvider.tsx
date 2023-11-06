import React, { useState, useContext, useEffect,Dispatch, SetStateAction, ReactNode } from 'react';

type TransactionUpdateContextProps = {
  setTransaction: Dispatch<SetStateAction<null | number>>;
};


const TransactionContext = React.createContext(0);
const TransactionUpdateContext = React.createContext<TransactionUpdateContextProps | undefined>(undefined);



const useTransactionUpdate = () => {
  const updateContext = useContext(TransactionUpdateContext);
}

export const useTransaction = () => {
  const balance = useContext(TransactionContext);

  return balance;
}

const TransactionProvider = ({ children }: any) => {

  const [transaction, setTransaction] = useState<null | number>(null);
  const [income, setIncome] = useState<null | number>(null);
  const [expense, setExpense] = useState<null | number>(null);
  const balance: number = (income ?? 0) - (expense ?? 0);

  useEffect (()=>{
    if(transaction !== null) {
      // Do something with the transaction value here
      if(transaction < 0) {
        setExpense(transaction*-1);
        setTransaction(null);
      } else {
        setIncome(transaction);
        setTransaction(null);
      }
    }
  }, [transaction])


  return (

  <TransactionContext.Provider value={balance}>
    <TransactionUpdateContext.Provider value={{setTransaction}}>
      {children}
    </TransactionUpdateContext.Provider>
  </TransactionContext.Provider>


  ) 
}


export default TransactionProvider;