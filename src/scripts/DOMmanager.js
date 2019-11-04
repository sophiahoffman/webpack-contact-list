// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.


import Contact from "./HTMLBuilder.js"
import ContactCollection from "./API.js"

const ContactList = {
    renderDOM () {
        const articleEl = document.querySelector("#container")
        ContactCollection.getAllContacts()
        .then(responses => {
            let newHTML = ""
            responses.forEach(response => {
                newHTML += Contact.contactHTML(response)
            })
            articleEl.innerHTML = newHTML
        })

    }
}

export default ContactList