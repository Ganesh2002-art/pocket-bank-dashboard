import { formatCurrency } from "../utils/formatCurrency";
import "../styles.css";

const TransactionList = ({ transactions, filter, setFilter }) => {
  const filtered = transactions.filter((t) => {
    if (filter === "income") return t.type === "credit";
    if (filter === "expenses") return t.type === "debit";
    return true;
  });

  return (
    <div className="card">
      <h3>Transactions</h3>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expenses">Expenses</option>
      </select>

      <ul>
        {filtered.map((t) => (
          <li key={t.id}>
            <span>{t.date}</span>
            <span>{t.description}</span>
            <span
              className={t.type === "credit" ? "credit" : "debit"}
            >
              {t.type === "credit" ? "+" : "-"}
              {formatCurrency(t.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
