const express = require("express");
const router = express.Router();
const fetch = require("node-fetch"); 

router.post("/", async (req, res) => {
  const { email, items, total } = req.body;

  try {
    const itemList = items
      .map((i) => `${i.name} x ${i.qty} = Rs.${i.total}`)
      .join("\n");
    const body = {
      sender: { email: process.env.EMAIL_USER },  // Your verified Brevo email
      to: [{ email: email }],
      subject: "Order Confirmation - Niveka Store",
      textContent: `Thank you for your order!\n\nItems:\n${itemList}\n\nTotal: Rs.${total}\n\nPickup at the store.`,
      htmlContent: `<p>Thank you for your order!</p>
                    <p><strong>Items:</strong><br>${items
                      .map((i) => `${i.name} x ${i.qty} = Rs.${i.total}`)
                      .join("<br>")}</p>
                    <p><strong>Total:</strong> Rs.${total}</p>
                    <p>Pickup at the store.</p>`,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.EMAIL_PASS, 
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ message: "Order placed and email sent", data });
    } else {
      console.error("Brevo API error:", data);
      res.status(500).json({ message: "Error sending email", error: data });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
});

module.exports = router;
