import express from "express"
const router = express.Router();
import Courses from '../CourseData/course.js'

router.get("/api/courses", async (req, res, next) => {

    const data = await Courses.aggregate([
        {
            $sort : {
                "Ranking" : -1,
                "Course_Name" : 1,
                "Institute_Name": 1,
                "Full_Address" : 1,
            }
        },
        {
            $project: {
                "Full_Address" : 1,
                "Course_Name": 1,
                "Institute_Name": 1,
                "Yearly_Tuition_Fees": 1,
                "Ranking" : 1,
                "Institute_Logo" : 1,
                "Website_Link" : 1,
                "Country" : 1,
                "Application_Deadline" : 1,
            }
        },
        {
            $match : {
                "Course_Name" : {$ne: "" }
            }
        }
    ]).limit(500)

    res.json(data)
})

export default router;