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

    if (req.body.subject) {
        pageData.showThankYouMessage = contactsService.saveContact(req.body);
    }

    res.render("contacts.ejs", pageData);
}

function about(req, res) {
    res.render("about.ejs");
}

module.exports = { homepage, gallery, contacts, about };