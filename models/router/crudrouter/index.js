import Router from "express";
import Student from "../../Student.js";
import Assignment from "../../Assignment.js";
const router = Router();

export default router;

//Student Model
router.post("/student", async (request, response) => {
  try {
    const student = Student(request.body);
    await student.save();
    response.send("Student created successfully");
  } catch (error) {
    response.send("error");
  }
});
router.get("/stud/:id", async (request, response) => {
  try {
    const students = await Student.findById(request.params.id);
    response.send(students);
  } catch (error) {
    response.send(error);
  }
});
router.get("/stud", async (request, response) => {
  try {
    const student = await Student.find();
    response.send(student);
  } catch (error) {
    response.send("ERROR");
  }
});

//assignment model

router.post("/assign", async (request, response) => {
  try {
    const assignment = Assignment(request.body);
    await assignment.save();
    response.send("Assignment work successfull");
  } catch (error) {
    response.send("error");
  }
});
router.get("/assignget/:id", async (request, response) => {
  try {
    const assignment = await Assignment.findById(request.params.id);
    response.send(assignment);
  } catch (error) {
    response.send(error);
  }
});

router.get("/assignget", async (request, response) => {
  try {
    const assignemnt = await Assignment.find();
    response.send(assignemnt);
  } catch (error) {
    response.send("ERROR");
  }
});


//assignment model put and get
router.put("/assignput/:id", async (req, res) => {
    try {
      const assignment = await Assignment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!assignemnt)
        return res.status(404).send({ message: "Assignment not found" });
      res.status(200).send(assignment);
    } catch (error) {
      res.send(error);
    }
  });
  
  router.delete("/assigndelete/:id", async (req, res) => {
    try {
      const assign2 = await Assignment.findByIdAndDelete(req.params.id);
      if (!assign2)
        return res.status(404).send({ message: "Assignment not found" });
      res.status(200).send({ message: "Assignment deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: "Error deleting assignment", error });
    }
  });