const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 0,
        name: 'HP Probook Laptop',
        price: 85000,
        color: 'silver'
    },
    {
        id: 1,
        name: 'Iphone 12 Pro Max',
        price: 85000,
        color: 'silver'
    },
    {
        id: 2,
        name: 'Xiomi Redmi Note 6 Pro',
        price: 85000,
        color: 'silver'
    },
    {
        id: 3,
        name: 'Xiomi Redmi Note 10',
        price: 85000,
        color: 'silver'
    },
    {
        id: 4,
        name: 'Logitect Mouse',
        price: 85000,
        color: 'silver'
    },
]

app.get('/', (req, res) => {
    res.send('I am making dynamic API')
})

//app.METHOD
app.post('/products', (req, res) => {
    const newProduct = req.body
    newProduct.id = products.length;
    products.push(newProduct)
    res.json(newProduct)
})

// quarry search
app.get('/products', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        res.send(result);
    }
    else {
        res.send(products)
    }
})

// dynamic api 
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products[id];
    res.send(product);
})

app.listen(port, () => {
    console.log('node started from', port)
})