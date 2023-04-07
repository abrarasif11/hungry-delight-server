const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middle Wares //
app.use(cors());
app.use(express.json());

const foodItems = require('./Data/product.json')
const allFoodItems = require('./Data/allProducts.json')
app.get("/foodItems", (req, res) => {
    res.send(foodItems);
});

// category_id //
app.get("/foodItems/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id);
    console.log(foodItems);
    const selectedItems = allFoodItems.filter((n) => n.category_id == id);
    console.log(selectedItems);
    res.send(selectedItems);
});

app.get("/allFoodItems", (req, res) => {
    res.send(allFoodItems)
})



app.get('/', (req, res) => {
    res.send('Hungry Delight Server is Running')
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})