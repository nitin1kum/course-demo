import express from "express"
const router = express.Router();
import Courses from '../CourseData/course.js'
import axios from 'axios'


router.get("/search", async (req, res, next) => {
    const search = req.query.q
    const data = await Courses.aggregate([
        {
            $match: {
                $text: { $search: search }
            }
        },
        {
            $project: {
                "Full_Address": 1,
                "Course_Name": 1,
                "Institute_Name": 1,
                "Yearly_Tuition_Fees": 1,
                "Ranking": 1,
                "Institute_Logo": 1,
                "Website_Link": 1,
                "score": { $meta: "textScore" },
                "Application_Deadline" : 1
            }
        },
        {
            $sort: {
                "score": -1,
                "Ranking": 1,
                "Course_Name": 1,
                "Institute_Name": 1,
                "Full_Address": 1,

            }
        },
        {
            $match: {
                "Course_Name": { $ne: "" }
            }
        }
    ]).limit(500)
    res.send(data)
})


export default router;