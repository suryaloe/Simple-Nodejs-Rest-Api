var express = require('express');
var router = express.Router();
var Controllers = require('../controllers/taskController');

/* GET users listing. */
router.get('/', Controllers.index);
router.get('/:id?', Controllers.getId);
router.patch('/:id?', Controllers.updateID);
router.post('/', Controllers.insertData);
router.delete('/:id?', Controllers.deleteID);

module.exports = router;
