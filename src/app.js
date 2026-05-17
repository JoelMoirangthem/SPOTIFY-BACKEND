require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth.route');
const musicRoutes = require('./routes/music.route')

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/auth/',authRoutes);
app.use('/api/music/',musicRoutes)
module.exports = app;