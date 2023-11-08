import AppContent from "./components/AppContent"
import { TransactionProvider } from "./components/TransactionProvider";
import "./App.css";

function App() {

  return (
    <TransactionProvider>
      <AppContent />
    </TransactionProvider>

  )
}

export default App;
