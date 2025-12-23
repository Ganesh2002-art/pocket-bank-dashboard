import { formatCurrency } from "../utils/formatCurrency";
import "../styles.css";

const TransactionList = ({ transactions, filter, setFilter }) => {
  const filtered = transactions.filter((t) => {
    if (filter === "income") return t.type === "credit";
    if (filter === "expenses") return t.type === "debit";
    return true;
  });

  return (
    <div className="card transactions-card">
      <div className="transactions-header">
        <h3>Transactions</h3>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Transactions</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
      </div>

      <ul className="transactions-list">
        {filtered.length > 0 ? (
          filtered.map((t) => (
            <li key={t.id}>
              <span className="transaction-date">{t.date}</span>
              <span className="transaction-description">{t.description}</span>
              <span className={t.type === "credit" ? "credit" : "debit"}>
                {t.type === "credit" ? "+" : "-"}
                {formatCurrency(t.amount)}
              </span>
            </li>
          ))
        ) : (
          <li className="empty-state">No transactions found</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
