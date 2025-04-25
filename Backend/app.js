const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const captainRouters = require('./routes/captain.routes');
const mapRouters = require('./routes/maps.routes');
// const rideRouters = require('./routes/ride.routes');



connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello Word');
});
app.use('/users', userRoutes);
app.use('/captains', captainRouters);
app.use('/maps', mapRouters);
// app.use('/rides', rideRouters);

module.exports = app;