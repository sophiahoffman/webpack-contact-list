// A ContactCollection component that loads existing contacts from a json-server API, and saves new ones.

const ContactCollection = {

    getAllContacts () {
      return fetch("http://localhost:8088/contacts")
          .then(response => response.json())
    },

    saveJE (contact) {
        return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
        })
        .then(response => response.json())
    },

}

export default ContactCollection