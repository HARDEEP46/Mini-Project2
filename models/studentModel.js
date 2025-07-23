import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  program: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 16,
    max: 100
  },
  status: {
  type: String,
  enum: ["enrolled", "not enrolled"],
  default: "enrolled"
}
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
