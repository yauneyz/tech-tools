const express = require('express');
const multer = require('multer');
var upload = multer();
const ToolsController = require('../controllers/ToolsController');

const router = express.Router();

// For handling the save data
//const saveUpload = upload.fields([{name: 'titleImage',maxCount:1},{name:'actionImage',maxCount:1}]);

router.get('/', ToolsController.getTools);
router.get('/options', ToolsController.getOptions);
router.post('/save',upload.any(),ToolsController.saveTool);
router.post('/delete', ToolsController.deleteTool);
router.post('/upload', upload.single('tools'),ToolsController.updateTools);

module.exports = router;
