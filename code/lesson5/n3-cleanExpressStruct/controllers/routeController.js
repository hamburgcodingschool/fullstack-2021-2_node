const contactsService = require("../services/contactsService");


function homepage(req, res) {
    res.render("index.ejs");
}

function gallery(req, res) {
    res.render("gallery.ejs");
}

function contacts(req, res) {

    const pageData = {
        showThankYouMessage: false
    };

    // Exercise.
    // make sure email, subject and description are not empty
    // if everything is ok say thank you
    // if a field is missing, notify the user and ask to submit again.


    if (req.body.email) {
        pageData.showThankYouMessage = contactsService.saveContact(req.body);
    }

    res.render("contacts.ejs", pageData);
}

function about(req, res) {
    res.render("about.ejs");
}

module.exports = { homepage, gallery, contacts, about };