
import { formatCryptoDate } from '../../helpers/formatCryptoDate';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => {
          console.log('Transaction date:', transaction.date);

          return (
            <tr key={transaction.id} className={style.tr}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{transaction.price}</td>
              <td className={style.td}>{transaction.amount}</td>
              <td className={style.td}>{formatCryptoDate(transaction.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
