const router = require('express').Router();

router.use('/', require('../api/default'));
router.use('/todo', require('../api/todo'))

module.exports = router