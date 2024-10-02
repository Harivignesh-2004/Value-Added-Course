import Router from "express";

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