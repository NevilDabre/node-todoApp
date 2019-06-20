const router = require('express').Router()
const controller = require('./todo.controller')

router.get('/', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.updateFields)
router.delete('/:id', controller.destroy);

module.exports = router;