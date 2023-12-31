const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const chefData = require('./data.json');

app.get('/chef', (req, res)=>{
    res.send(chefData)
});

app.get('/chef/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedId = chefData.find(data => data.id === id);
    res.send(selectedId)
});

app.get('/', (req, res) => {
    res.send('Chef Server is running')
});

app.listen(port, () => {
    console.log(`Chef Server is running on port: ${port}`)
})