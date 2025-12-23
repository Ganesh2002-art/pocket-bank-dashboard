import { formatCurrency } from "../utils/formatCurrency";
import "../styles.css";

const BalanceCard = ({ balance }) => (
  <div className="card balance-card">
    <div className="balance-label">
      <h3>Current Balance</h3>
    </div>
    <h2>{formatCurrency(balance)}</h2>
  </div>
);

export default BalanceCard;
