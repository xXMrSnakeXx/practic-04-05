import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

const ExchangeForm = () => {

  const handleSubmit = e =>{
    e.preventDefault()
    const {value} = e.target.elements.currency
    console.log('value', value)
    const [amount, from , , to ] = value.split(" ")
    console.log('amount, from , , to', amount, from , to)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        name="currency"
        placeholder="15 USD in UAH"
      />
    </form>
  );
};

export default ExchangeForm;
