import { useState } from "react";
import "../styles.css";

const TransferForm = ({ balance, onTransfer }) => {
  const today = new Date().toISOString().split("T")[0];

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount <= 0) return setError("Amount must be greater than 0");
    if (amount > balance) return setError("Insufficient Funds");

    setError("");
    setLoading(true);

    setTimeout(() => {
      onTransfer(recipient, Number(amount), date);
      setLoading(false);
      setRecipient("");
      setAmount("");
      setDate(today);
      alert("Transfer Successful!");
    }, 1500);
  };

  return (
    <div className="card">
      <h3>Transfer Money</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
