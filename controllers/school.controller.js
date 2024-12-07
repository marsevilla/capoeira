const mongoose = require('mongoose');
const School = require('../models/school');


// newSchool function for post tea route
const newSchool = (req, res, next) => {
  res.json({message: "POST new school"}); // dummy function for now
};

const getAllSchools = async(req, res, next) => {
  const schools = await School.find(
    {},
    {name: 1, location: 1, _id: 0}  // projection to get only name and location
  )
  res.json(schools); // dummy function for now
};

const getSchoolById = async(req, res, next) => {
  const id = req.params.id;
  const school = await
  School.findById(id);
  res.json(school); // dummy function for now
}

const updateSchool = (req, res, next) => {
  res.json({message: "PUT school"}); // dummy function for now
}

const deleteSchool = (req, res, next) => {
  res.json({message: "DELETE school"}); // dummy function for now
}

module.exports = {newSchool, getAllSchools, getSchoolById, updateSchool, deleteSchool }; // export to use in school.js
