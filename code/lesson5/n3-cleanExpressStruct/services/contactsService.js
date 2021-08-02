function saveContact(contactInfo) {
    // We can write the saving logic here.
    // Wether it's MySQL or Mongo or saving to a file or even just sending an Email
    // The rest of the app does not care since that Logic in encapsulated here

    console.log(contactInfo);

    return true;
}

module.exports = { saveContact };