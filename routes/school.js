const express = require('express');
const School = require('../models/school');


// 1.
const router  = express.Router();
// 2.
const { getAllSchools, newSchool, getSchoolById, updateSchool, deleteSchool } = require("../controllers/school.controller");

// 3.
router.get('/school', getAllSchools);
router.post('/school', newSchool);
router.get('/school/:id', getSchoolById);
router.put('/school/:id', updateSchool);
router.delete('/school/:id', deleteSchool);

// 4.
module.exports = router; // export to use in server.js
