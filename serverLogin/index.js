const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', require('./src/routes/routes'));

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON THE PORT: ",PORT);
})