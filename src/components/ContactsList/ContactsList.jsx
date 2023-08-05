import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import ContactsItem from 'components/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {

  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
};

export default ContactsList;
