import { connect } from "react-redux";
import s from "./ContactItem.module.css";
import actions from "../../redux/actions";

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={s.item} key={id}>
    {name}: &nbsp;{number}
    <button className={s.deleteButton} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
