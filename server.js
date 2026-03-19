const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const playerRoutes = require('./routes/authRoutes')

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err)=> console.error('Failed to connect to MongoDB: ', err));

const PORT = process.env.PORT || 3000;

app.use('/api/players')



app.post('/test-jwt', (req, res)=>{
    const {generateToken, verifyToken} = require('./utils/jwt');
    const testPlayerId = '6hfdkjahfkjfhkahfhjhf';
    const token = generateToken(testPlayerId);
    console.log('Generated Token: ', token);

    const decoded = verifyToken(token);

    console.log('Decoded Payload: ', decoded);

    res.json({
        success: true,
        token,
        decoded,
        mathces: decoded ? decoded.id === testPlayerId : false
    });
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});