import { Container } from 'components/App/App.styled';
import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const getInitialContactsState = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  } else {
    return initialContacts;
  }
};

export function App() {
  const [contacts, setContacts] = useState(getInitialContactsState);
  const [filter, setFilter] = useState('');
  const addContact = values => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(
        `Contact with name ${values.name.toLowerCase()} is already in contacts`
      );
      return;
    }
    setContacts(prevContacts => [...prevContacts, values]);
  };
  const searchContact = event => {
    const inputValue = event.currentTarget.value;
    setFilter(inputValue);
  };
  const deleteContact = contactId => {
    return setContacts(prevContacts =>
      prevContacts.filter(contact => {
        return contactId !== contact.id;
      })
    );
  };
  const normalizedFilterValue = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilterValue);
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <SearchBox onChange={searchContact} value={filter}></SearchBox>
          <ContactList
            items={filtredContacts}
            onDelete={deleteContact}
          ></ContactList>{' '}
        </Section>
      </Container>
    </ThemeProvider>
  );
}
