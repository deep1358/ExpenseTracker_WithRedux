import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import {GlobalProvider} from "./Context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
     
    
  );
}

export default App;
