const express = require('express');
const School = require('../models/school');


// 1.
const router  = express.Router();
// 2.
const { getAllSchools, newSchool } = require("../controllers/school.controller");
// import { getAllSchools, newSchool } from "../controllers/school.controller";

// 3.
router.get('/school', getAllSchools);
router.post('/school', newSchool);
// 4.
module.exports = router; // export to use in server.js
