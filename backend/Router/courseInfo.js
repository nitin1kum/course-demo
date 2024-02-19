import express from "express"
const router = express.Router();
import Courses from '../CourseData/course.js'

router.get("/api/course/data/:id", async (req, res, next) => {
    let id = req.params.id
    let data = await Courses.findById(id)
    res.json(data)
})

export default router;