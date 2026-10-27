const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// यहाँ अपनी पसंद की VIP की (Keys) डाल दें
const validKeys = ["BK-VIP-12345", "BK-CHALLENGER-99"];

app.post('/connect', (req, res) => {
    const userKey = req.body.user_key; // आपके C++ मेनू से भेजी गई की

    if (validKeys.includes(userKey)) {
        res.send("success"); // की सही होने पर
    } else {
        res.send("invalid"); // की गलत होने पर
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
