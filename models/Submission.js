import mongoose from "mongoose";
const submissionSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  assignmentTitle: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: String,
    required: true,
  },
  marksScored: {
    type: Number,
    required: false,
  },
});
const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;
