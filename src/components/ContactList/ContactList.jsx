import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selector';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.text.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(filter);

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
