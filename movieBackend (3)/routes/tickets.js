const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/tickets");
const authMiddleware = require("../utils/jwt").verifyToken;

router.post("/book/:id", ticketController.bookTicket);
router.post("/book/cancel/:id", ticketController.cancelTicket);
//router.get("/:id", authMiddleware, ticketController.getTicketById);
//router.get("/", ticketController.getAllTickets);

module.exports = router;
