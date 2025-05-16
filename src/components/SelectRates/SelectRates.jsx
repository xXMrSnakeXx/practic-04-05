import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../reduxState/currency/currencyslice';

const SelectRates = ({baseCurrency}) => {
  const dispatch = useDispatch()
  const handleChange = selectOption =>{
    dispatch(setBaseCurrency(selectOption.value))
  }
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        onChange={handleChange}
        isSearchable
      />
    </div>
  );
};

export default SelectRates;
