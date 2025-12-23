import { useEffect, useState } from "react";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import TransferForm from "./components/TransferForm";
import { initialBalance, initialTransactions } from "./data/initialData";
import "./styles.css";

function App() {
  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || initialBalance
  );
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || initialTransactions
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const handleTransfer = (recipient, amount, date) => {
    setBalance((prev) => prev - amount);
    setTransactions((prev) => [
      {
        id: Date.now(),
        date,
        description: recipient,
        amount,
        type: "debit",
      },
      ...prev,
    ]);
  };

  return (
    <div className="container">
      <h1>Pocket Bank Dashboard</h1>
      <BalanceCard balance={balance} />
      <TransactionList
        transactions={transactions}
        filter={filter}
        setFilter={setFilter}
      />
      <TransferForm balance={balance} onTransfer={handleTransfer} />
    </div>
  );
}

export default App;
