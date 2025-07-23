import Student from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      message: `Welcome, ${newStudent.name}! Your student ID ${newStudent.studentId} has been registered.`,
      data: newStudent
    });
  } catch (err) {
    res.status(400).json({
      error: "Failed to add student",
      message: err.message
    });
  }
};
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
