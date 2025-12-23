const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { email, items, total } = req.body;

  try {
    const itemList = items
      .map((i) => `${i.name} x ${i.qty} = Rs.${i.total}`)
      .join("\n");
    const body = {
      sender: { email:"k.niveka03@gmail.com",name:"Niveka Store"},  // Your verified Brevo email
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

    const response = await axios.post("https://api.brevo.com/v3/smtp/email", 
      body,{
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.EMAIL_PASS, 
      },
    });


    if (response.status === 200 || response.status === 201) {
      res.status(200).json({ message: "Order placed and email sent", data: response.data });
    } else {
      console.error("Brevo API error:", response.data);
      res.status(500).json({ message: "Error sending email", error: response.data });
    }
  } catch (err) {
    console.error("Email sending error:", err.response?.data || err.message);
    res.status(500).json({ message: "Error sending email" });
  }
});

module.exports = router;