const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const route = require('./src/routes/route')

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
    Credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/foodWell', route)

app.get('/', (req, res) => {
    res.send('foodWell back-end')
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})