import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "554-554-4564"
      },
      {
        id: 2,
        name: "Douglas",
        email: "douglas@gmail.com",
        phone: "554-5314-4564"
      },
      {
        id: 3,
        name: "Musammil",
        email: "musa@gmail.com",
        phone: "554-5134-4564"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
