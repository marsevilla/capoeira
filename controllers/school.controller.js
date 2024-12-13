const mongoose = require('mongoose');
const School = require('../models/school');


// newSchool function for post tea route
const newSchool = (req, res, next) => {
  try {
    const school = new School(req.body);
    const savedSchool = await
    school.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchools = async(req, res, next) => {
  const schools = await School.find(
    {},
    {name: 1, location: 1, _id: 0}
  )
  res.json(schools);
};

const getSchoolById = async(req, res, next) => {
  const id = req.params.id;
  const school = await
  School.findById(id);
  res.json(school);
}

const updateSchool = (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedSchool = await
    School.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(updatedSchool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteSchool = (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedSchool = await
    School.findByIdAndDelete(id);
    if (!deletedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json({ message: 'School deleted successfully', school: deletedSchool });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {newSchool, getAllSchools, getSchoolById, updateSchool, deleteSchool }; // export to use in school.js
