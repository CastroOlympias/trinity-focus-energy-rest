const express = require('express');
const mongoose = require('mongoose');
const http = require('http')

const app = express();
const PORT = process.env.PORT || 3000;
const HOST_IP = '10.0.0.20'
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // This add family: 4, enabled node js 18.12 to connect to the database, was receiving a 500 internal error.
        // MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
        // fix found at https://stackoverflow.com/questions/69840504/mongooseserverselectionerror-connect-econnrefused-127017
        family: 4,
}).then(db => console.log('DB is connected'))

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

// in your command prompt type ipconfig to find host server IP address, it'll be IPv4 Address
httpServer.listen(PORT, HOST_IP, () => {
        console.log(`Server running at http://${HOST_IP}:${PORT}`)
});
