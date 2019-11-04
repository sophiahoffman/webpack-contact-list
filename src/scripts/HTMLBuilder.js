// A Contact component that displays a person's name, phone number, and address.

const Contact = {

    contactHTML (contactObject) {
        const htmlString = `
        <article>
        ${contactObject.name}
        ${contactObject.phone}
        ${contactObject.address}
        </article>`
        return htmlString
    }
}

export default Contact