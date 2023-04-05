const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middle Wares //
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hungry Delight Server is Running')
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})