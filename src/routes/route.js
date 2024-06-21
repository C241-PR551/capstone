const express = require('express');
const Multer = require('multer')
const route = express.Router();
const register = require('../api/register');
const login = require('../api/login');
const authMiddleware = require('../middleware/authMiddleware')
const handleImages = require('../api/mlImage');
const { getProfile } = require('../api/profile');
const { updateName } = require('../api/updateName');
const { listHistory } = require('../api/listHistory');
const { DeleteHistory } = require('../api/deleteHistory');

// Middleware for handling images
const multer = Multer({
    storage: Multer.MemoryStorage,
    fileSize: 5 * 1024 * 1024
})

// Post - Sends data
route.post('/register', register.registerUser);
route.post('/login', login.loginUser);
route.post('/uploadImage', authMiddleware.authMiddleware, multer.single('image'), handleImages.handleImage);

// Get - Retrieve information
route.get('/profile', authMiddleware.authMiddleware, getProfile);
route.get('/history', authMiddleware.authMiddleware, listHistory)

// Put - Replaces all current representations of the target resource
route.put('/updateName', authMiddleware.authMiddleware, updateName);

// Delete - Removes the specified resource
route.delete('/deleteHistory', authMiddleware.authMiddleware, DeleteHistory);

module.exports = route;