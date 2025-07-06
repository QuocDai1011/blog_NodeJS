const express = require('express');
const router = express.Router();

// const newsRouter = require('./')

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;