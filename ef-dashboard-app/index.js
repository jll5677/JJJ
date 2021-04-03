const PropReader = require('properties-reader');
const props = PropReader('./../ef-dashboard-config/app/server.properties');

const express = require('express');
const app = express();
const port = props.get('server.port');

app.get('/', (req, res) => {
    res.send("home");
})

app.get('/user', (req, res) => {
    res.send("user");
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})