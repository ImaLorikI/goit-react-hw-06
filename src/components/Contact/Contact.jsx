import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoPersonSharp } from 'react-icons/io5';

export const Contact = ({ contact }) => {
  const { id, text, phone } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <div className={css.div}>
        <li className={css.li}>
          <div>
            <p className={css.items}>{text}</p>
            <p className={css.items}>{phone}</p>
          </div>
          <button className={css.button} onClick={handleDelete}>
            Delate
          </button>
        </li>
      </div>
    </>
  );
};
