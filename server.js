const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const phones = [
    {
        "id": 0,
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "black",
        "price": 769,
        "imageFileName": "iPhone_7.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    },
    {
        "id": 0,
        "name": "iPhone 10",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "pink",
        "price": 900,
        "imageFileName": "IPhone_7.png",
        "screen": "4,9 inch IPS",
        "processor": "A10 Fusion",
        "ram": 3
    },
    {
        "id": 0,
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "lorem ipsum dolor sit amet consectetur.",
        "color": "white",
        "price": 1009,
        "imageFileName": "IPhone_7.png",
        "screen": "5,8 inch IPS",
        "processor": "A10 Fusion",
        "ram": 4
    },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/phones', (req, res) => {
    res.send(phones);
});


app.listen(port, () => console.log(`Listening on port ${port}`));