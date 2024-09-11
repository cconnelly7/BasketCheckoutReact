const express = require('express');
const app = express();

// setup route for api
app.get('/api', (req, res) => {
    res.json([
        {
          "sku": 1,
          "name": "Red Product",
          "description": "Red Product description",
          "price": 1.01,
          "basketLimit": 5
        },
        {
          "sku": 2,
          "name": "Orange Product",
          "description": "Orange Product description",
          "price": 2.02,
          "basketLimit": 4
        },
        {
          "sku": 3,
          "name": "Yellow Product",
          "description": "Yellow Product description",
          "price": 3.03,
          "basketLimit": 3
        },
        {
          "sku": 4,
          "name": "Green Product",
          "description": "Green Product description",
          "price": 4.04,
          "basketLimit": 2
        },
        {
          "sku": 5,
          "name": "Blue Product",
          "description": "Blue Product description",
          "price": 5.05,
          "basketLimit": 1
        }
      ]);
});

// backend running on port 5000
app.listen(4200, () => {console.log('Server started on port 4200')})