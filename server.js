const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('Exceluploader'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.get('/api/data', (req, res) => {
    const data = [
        ['Name', 'Value'],
        ['Item 1', 100],
        ['Item 2', 150]
        ['Item 3', 130]
    ];
    res.json(data);
});