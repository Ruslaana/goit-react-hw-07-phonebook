import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import ContactsItem from 'components/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactsList = () => {

  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

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
