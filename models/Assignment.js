import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
  assignmentTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: false,
  },
});
const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;
