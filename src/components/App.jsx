import React, { useEffect } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/thunk';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FilterInput />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
