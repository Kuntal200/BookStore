import Contact from "../model/contact.model.js";

// Handle contact form submission
export const createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).send({ message: 'Contact saved successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving contact', error });
    }
};

// Export the controller methods

