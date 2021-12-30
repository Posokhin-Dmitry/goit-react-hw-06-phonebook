import PropTypes from "prop-types";
import { connect } from "react-redux";
import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts }) => (
  <ul className={s.list}>
    {contacts.map(({ name, id, number }) => (
      <ContactItem key={id} id={id} name={name} number={number} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { filter, contacts } = state.phoneBook;
  const optimizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(optimizedFilter)
  );
  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps, null)(ContactList);
