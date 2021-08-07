import {
  addNewContact,
  getNewContact,
  getSpecificContact,
  updateContact,
  deleteContact,
} from "../controllers/crmControllers";

const routes = (app) => {
  app.route("/contact").get(getNewContact).post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getSpecificContact)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
