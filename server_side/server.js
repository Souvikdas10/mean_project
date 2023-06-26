const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const app = express();
const port = 2345;
const cors=require('cors')
app.use(cors());
const apiroute = require('./route/ApiRoute');

const dbCon = "mongodb+srv://souvikdb:cSgmsmo8GCvTW05X@cluster0.bsndvpo.mongodb.net/AngPApi";


app.use(express.urlencoded({extended:true}))
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.use(apiroute)


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//     next();
// });




mongoose.connect(dbCon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server running http://localhost:${port}`);
            console.log('Database connected');
        })

    }).catch(err => {
        console.log(err);
    })