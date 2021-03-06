const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/phones', (req, res) => {
  // Timeout included to simulate API delayed response
  setTimeout(() => {
    fs.readFile('./data/phones.json', (err, json) => {
      const obj = JSON.parse(json);
      res.json(obj);
    });
  }, 2000);
});

app.post('/create-phone', (req, res) => {
  let parsedFile;

  fs.readFile('./data/phones.json', (error, file) => {
    parsedFile = JSON.parse(file);
    const newPhone = {
      id: parsedFile.length,
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      screen: req.body.screen,
      processor: req.body.processor,
      ram: req.body.ram,
      extraInfo: req.body.extraInfo
    };

    parsedFile.push(newPhone);
    const stringifiedFile = JSON.stringify(parsedFile);
    setTimeout(() => {
      fs.writeFile('./data/phones.json', stringifiedFile, (error) => {
        if (error) {
          console.error(error);
        }
        res.send(parsedFile);
      });
    }, 2000);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));