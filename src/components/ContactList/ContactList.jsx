import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts } from '../../redux/selector';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filters);
  const filtContacts =
    contacts &&
    contacts.filter(data => {
      return data.text.toLowerCase().includes(filter.toLowerCase());
    });
  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {filtContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
