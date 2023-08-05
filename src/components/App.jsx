import React from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';

const App = () => {

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
