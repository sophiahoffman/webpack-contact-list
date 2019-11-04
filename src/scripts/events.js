// A ContactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component.

import ContactCollection from "./API.js"


const ContactForm = {
    saveButtonEvent () {
        const saveButtonEl = document.querySelector("#saveButton")
        saveButtonEl.addEventListener("click", event => {
            event.preventDefault()
            const name = document.querySelector("#input_name").value
            const phone = document.querySelector("#input_phone").value
            const address = document.querySelector("#input_address").value
            const contact = {name: name, phone: phone, address: address}
            ContactCollection.saveJE(contact)
            window.location.reload()
        })
    }
}

export default ContactForm