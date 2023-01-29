import { Container } from 'components/App/App.styled';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static propTypes = {};
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    console.log(contacts);
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    console.log('update');
  }
  addContact = values => {
    const { contacts } = this.state;
    const { name } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`Contact with name ${name.toLowerCase()} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
  };
  deleteContact = contactId => {
    return this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contactId !== contact.id;
        }),
      };
    });
  };
  searchContact = event => {
    const inputValue = event.currentTarget.value;
    this.setState({ filter: inputValue });
  };
  render() {
    const normalizedFilterValue = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilterValue);
    });
    console.log(normalizedFilterValue);
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact}></ContactForm>
          </Section>
          <Section title="Contacts">
            <SearchBox
              onChange={this.searchContact}
              value={this.state.filter}
            ></SearchBox>
            <ContactList
              items={filtredContacts}
              onDelete={this.deleteContact}
            ></ContactList>{' '}
          </Section>
        </Container>
      </ThemeProvider>
    );
  }
}
