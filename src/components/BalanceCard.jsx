import { formatCurrency } from "../utils/formatCurrency";
import "../styles.css";

const BalanceCard = ({ balance }) => (
  <div className="card">
    <h3>Current Balance</h3>
    <h2>{formatCurrency(balance)}</h2>
  </div>
);

export default BalanceCard;
