// This is the main application file for the kartu pelajar backend
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Kartu Pelajar!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});