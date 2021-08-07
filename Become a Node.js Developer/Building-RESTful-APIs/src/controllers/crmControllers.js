import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) res.send(err);
    res.json(contact);
  });
};

export const getNewContact = (req, res) => {
  Contact.find({})
    .exec()
    .then((contact) => res.json(contact))
    .catch((err) => console.error(err));
};

export const getSpecificContact = (req, res) => {
  Contact.findById(req.params.contactID)
    .exec()
    .then((contact) => res.json(contact))
    .catch((err) => console.error(err));
};

export const updateContact = (req, res) => {
  Contact.findByIdAndUpdate(req.params.contactID, req.body, {
    new: true,
    useFindAndModify: false,
  })
    .exec()
    .then((contact) => res.json(contact))
    .catch((err) => console.error(err));
};

export const deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.contactID, {
    useFindAndModify: false,
  })
    .exec()
    .then((contact) => res.json({ message: "successfully deleted contact" }))
    .catch((err) => console.error(err));
};
