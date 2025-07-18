const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.render('success', { data });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
