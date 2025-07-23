import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";

const router = express.Router();

// POST /api/students
router.post("/students", createStudent);
router.get("/students", getAllStudents);  //  new GET route

export default router;
