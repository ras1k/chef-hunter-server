const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chef Server is running')
});

app.listen(port, () => {
    console.log(`Chef Server is running on port: ${port}`)
})