import { useDispatch } from 'react-redux';
import s from './ContactItem.module.css';
import actions from '../../redux/actions';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item} key={id}>
      {name}: &nbsp;{number}
      <button
        className={s.deleteButton}
        onClick={() => dispatch(actions.deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
