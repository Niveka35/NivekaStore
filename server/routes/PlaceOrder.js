const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

router.post("/", async (req, res) => {
  const { email, items, total } = req.body;
  const itemList = items
    .map((i) => `${i.name} x ${i.qty} = Rs.${i.total}`)
    .join("\n");

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Niveka Store",
          email: process.env.EMAIL_USER, 
        },
        to: [{ email }],
        subject: "Order Confirmation - Niveka Store",
        textContent: `Thank you for your order!\n\nItems:\n${itemList}\n\nTotal: Rs.${total}\n\nPickup at the store.`,
      },
      {
        headers: {
          "api-key": process.env.EMAIL_PASS, 
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Order placed and email sent via Brevo" });
  } catch (err) {
    console.error("Brevo API error:", err.response?.data || err.message);
    res.status(500).json({ message: "Error sending email via Brevo" });
  }
});

module.exports = router;
