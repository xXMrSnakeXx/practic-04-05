import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { selectFilter } from '../../reduxState/selectors';
import { setFilter } from '../../reduxState/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
