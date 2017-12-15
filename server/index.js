const express = require ('express');
const { json } = require ('body-parser');
const axios = require ('axios');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
const bc = './controllers/bin_controller.js';

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    // dbInstance.run('select * from store').then(response=>{
    //     if (!response.length) {
    //         db.init_table();
    //     }
    // })
    app.set('db', dbInstance);
})

app.get('/api/shelf/:id', bc.getBins);
// app.get('/api/bin/:id:idTwo', bc.get_bin);









app.listen( port, () => {console.log(`server listening ${port} `); });