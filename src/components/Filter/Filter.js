import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import s from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filterBox}>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.handleFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
