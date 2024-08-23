const express = require('express');
const app = express();

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
        credit_cards: true,
        paypal: false
        }
    });
});

app.use(express.json()); 

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.send(`Welcome ${username}`);
});
  
app.listen(7865);