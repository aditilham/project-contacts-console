"use strict"

let showContacts = () => {
    for (let person of contacts) {
        let contact = "";
        contact += (`${person.name} `)
        contact += (`(${person.phone}) `)
        contact += (`<${person.email}>`)

        console.log(contact)
        alert(contact)
    }
}

let searchContacts = (personName) => {
    let contact = "";
    let flag = 0;
    for (let person of contacts) {
        if (person.name.toLowerCase() == personName.toLowerCase()) {
            contact += (`${person.name} `)
            contact += (`(${person.phone}) `)
            contact += (`<${person.email}>`)
            flag = 1;
        }
        continue;
    }
    console.log((flag == 1) ? contact : "No contact found with that name")
    alert((flag == 1) ? contact : "No contact found with that name")
}

let addContact = (newName, newPhone, newEmail) => {
    let newContact = {
        name: newName,
        phone: newPhone,
        email: newEmail
    }
    contacts.push(newContact)
}

let menu = 0;

while (menu == 0) {
    let menuInput = parseInt(prompt('What do you want to? 1.Show Contact 2.Search Contact 3.Input New Contact 4.Exit'))
    switch (menuInput) {
        case 1:
            showContacts();
            break;
        case 2:
            let searchName = prompt('Who are you looking for?')
            searchContacts(searchName);
            break;
        case 3:
            let addName = prompt('Input new contact name')
            let addNumber = prompt('Input new contact number')
            let addEmail = prompt('Input new contact email')
            addContact(addName, addNumber, addEmail)
            break;
        case 4:
            menu = 1;
            break;
        default:
            alert('There is no option for that')
            break;
    }
}
alert('Thanks for using Contact console, all data that you already input will be automatically deleted.')