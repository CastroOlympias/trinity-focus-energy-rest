// const express = require('express');
import express from 'express'
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
// const http = require('http')
import http from 'http'
import MainConnections from './data_connections/_MainConnections.js'
const app = express();
const PORT = process.env.PORT || 3000;
const HOST_IP = '192.168.1.29'
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trinity', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // This add family: 4, enabled node js 18.12 to connect to the database, was receiving a 500 internal error.
        // MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
        // fix found at https://stackoverflow.com/questions/69840504/mongooseserverselectionerror-connect-econnrefused-127017
        family: 4,
}).then(db => console.log('DB is connected'))

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(MainConnections);

// in your command prompt type ipconfig to find host server IP address, it'll be IPv4 Address
httpServer.listen(PORT, () => {
        console.log(`Server running at ipv4 address http://${HOST_IP}:${PORT}`)
});
