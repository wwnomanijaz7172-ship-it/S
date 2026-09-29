//ROUTER//
const express = require("express");
const router = express.Router();
const { getusers, createusers, patchusers, deleteusers} = require('./updatecontroller');


router.get(`/getusers`, getusers);
router.post(`/createuser`, createusers);
router.patch(`/patchuser/:id`, patchusers);
router.delete(`/deleteuser/:id`, deleteusers);

module.exports = router;










