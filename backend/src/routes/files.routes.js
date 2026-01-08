const express = require('express');
const { uploadFile, getFiles, deleteFile } = require('../controllers/file.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { upload } = require('../utils/s3');

const router = express.Router();

router.use(authenticate);

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getFiles);
router.delete('/:id', deleteFile);

module.exports = router;