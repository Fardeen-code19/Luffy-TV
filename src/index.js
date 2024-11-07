//require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

// Load environment variables from .env file
dotenv.config({
  path: './.env'  // Make sure this is correct path if your file is named .env
});

// Call the connectDB function to establish the connection to the database
connectDB();

