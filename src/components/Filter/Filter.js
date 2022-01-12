import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import s from './Filter.module.css';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterBox}>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={filter}
        onChange={e => dispatch(actions.handleFilter(e.target.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
