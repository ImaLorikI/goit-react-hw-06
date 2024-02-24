import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBar.module.css';
import { useId } from 'react';
import { filterNumbers } from '../../redux/filtersSlice';
export const SearchBar = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(filterNumbers(e.target.value.trim()));

  const value = useSelector(state => state.filters);

  return (
    <div className={css.div}>
      <label className={css.label} htmlFor={searchId}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        values={value}
        id={searchId}
        onChange={handleFilterChange}
      />
    </div>
  );
};
