import express from "express";
const router = express.Router();
import {createContact} from "../controller/contact.controller.js";

// Define the POST route for contact form submissions
router.post('/contact', createContact);

// Export the router
export default router;
