import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: false,
  },
});
const Student = mongoose.model("Student", studentSchema);
export default Student;
