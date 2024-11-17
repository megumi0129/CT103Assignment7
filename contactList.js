// Contact list initialization
const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

// Display the contact list on the screen
function displayContacts() {
    const contactListElement = document.getElementById("contactList");
    contactListElement.innerHTML = ""; // Clear the list

    contactList.forEach(contact => {
        const listItem = document.createElement("li");
        listItem.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;
        contactListElement.appendChild(listItem);
    });

    // Display the first and last contacts
    displayFirstAndLastContacts();
}

// Display the first and last contacts
function displayFirstAndLastContacts() {
    const firstContactElement = document.getElementById("firstContact");
    const lastContactElement = document.getElementById("lastContact");

    if (contactList.length > 0) {
        firstContactElement.textContent = `${contactList[0].name} / ${contactList[0].phone} / ${contactList[0].email}`;
        lastContactElement.textContent = `${contactList[contactList.length - 1].name} / ${contactList[contactList.length - 1].phone} / ${contactList[contactList.length - 1].email}`;
    } else {
        firstContactElement.textContent = "None";
        lastContactElement.textContent = "None";
    }
}

// When the page loads, display the initial contact list
window.onload = () => {
    displayContacts();
};

// Add a new contact from the form
const form = document.getElementById("addContactForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Add the new contact to the list
    contactList.push({ name, phone, email });

    // Redisplay the contact list and first/last contacts
    displayContacts();

    // Reset the form
    form.reset();
});
