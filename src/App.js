import s from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', prevContacts);
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // const handleAddContact = (data) => {
  //   const newContact = { ...data, id: uuidv4() };

  //   if (
  //     contacts
  //       .map((contact) => contact.name.toLowerCase())
  //       .includes(data.name.toLowerCase())
  //   ) {
  //     alert(`Contact "${data.name}" already exists`);
  //   } else {
  //     setContacts((prevState) => [newContact, ...prevState]);
  //   }
  // };

  // const handleFilter = (event) => {
  //   const { value } = event.currentTarget;
  //   setFilter(value);
  // };

  // const getMatchingContacts = () => {
  //   const optimizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(optimizedFilter)
  //   );
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== contactId)
  //   );
  // };

  // const filteredContacts = getMatchingContacts();

  return (
    <div className={s.container}>
      <section title="Phonebook" className={s.section}>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>

      <section title="Contacts" className={s.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}

export default App;
