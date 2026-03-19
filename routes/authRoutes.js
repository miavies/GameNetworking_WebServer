const express = require('express');
const router = express.Router();
const{
    createPlayer,
    login,
    updateScore,
    getScore,
    deletePlayer,
    updatePassword
}   = require('../controllers/playerController');
const {protect} = require('../middleware/auth')

router.put('/new-password', protect, updatePassword)
router.post('/register', createPlayer);
router.post('/login', login);
router.put('/score', protect, updateScore);
router.get('/players/:id',getScore);
router.delete('/players/:id', protect, deletePlayer);