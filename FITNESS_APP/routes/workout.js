const express = require('express');
const jwt = require('jsonwebtoken');
const Workout = require('../models/Workout');

const router = express.Router();

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}

// Log workout route
router.post('/log', authenticateToken, async (req, res) => {
    const { type, duration } = req.body;

    try {
        const newWorkout = new Workout({ userId: req.user.userId, type, duration });
        await newWorkout.save();
        res.status(201).json({ message: 'Workout logged successfully' });
    } catch (error) {
        console.error('Error logging workout:', error);
        res.status(500).json({ error: 'Error logging workout' });
    }
});

module.exports = router;
