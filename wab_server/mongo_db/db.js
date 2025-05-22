const mongoose = require('mongoose');
const dbUrl = process.env.DBURL;
const appName = process.env.APPNAME;

mongoose.connect(dbUrl + appName).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));