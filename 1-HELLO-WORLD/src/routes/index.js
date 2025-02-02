const express = require('express');
const router = express.Router();

// Alt route'ları dahil et
const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

module.exports = router;
