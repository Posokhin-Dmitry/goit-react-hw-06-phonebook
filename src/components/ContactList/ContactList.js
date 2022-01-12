import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { getFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  console.log(visibleContacts);
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
