const express = require('express')
var router = express.Router();
const handleUploadSPO = require('./functions/handleUploadSPO.func')

router.post("/upload", handleUploadSPO)

module.exports = router;