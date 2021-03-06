import React, { Component } from 'react';
import shortid from 'shortid';
import { Notyf } from 'notyf';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import styles from './App.module.css';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (newContact.name.trim() === '' || newContact.number.trim() === '') {
      return notyf.error('Please fill out the form');
    }

    const matchingContact = this.findMatchingContact(contacts, newContact.name);

    if (matchingContact) {
      return notyf.error(`${newContact.name} is already in contacts`);
    }

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => notyf.success('New contact saved'),
    );

    return newContact;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = (contacts, query) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  findMatchingContact = (contacts, name) =>
    contacts.find(contact => contact.name === name);

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Phonebook</h1>
        <ContactForm handleAddContact={this.addContact} />

        <h2 className={styles.heading}>Contacts</h2>
        <Filter value={filter} handleChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
