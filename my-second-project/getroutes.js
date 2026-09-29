const express = require("express");
const router = express.Router();
const { getusers, postusers, putusers, deleteusers } = require('./getcontroller');



router.get(`/getusers`, getusers);
router.post(`/postusers`, postusers);
router.put(`/putusers/:id`, putusers);
router.delete(`/deleteusers`, deleteusers);
module.exports = router;