import express from "express"
const router = express.Router();
import Courses from '../CourseData/course.js'

router.get("/api/filter", async (req, res, next) => {
    let country = req.query.country  
    const course = req.query.course
    let intake = req.query.intake.slice(0,3)
    let search =`"\"` + country + " " + intake + " " + course +`\""`;
    let data = await Courses.aggregate([
        {
            $match: {

                $text : {$search : search}
                    
            }
        },
        {
            $project: { "Course_Name": 1 ,
                        "Institute_Name" : 1,
                        "Intakes" : 1,
                        "Country" : 1,
                        "Yearly_Tuition_Fees": 1,
                        "score" : {$meta : "textScore"},
                        "Application_Deadline" : 1
                    }
        },
        {
            $sort : {
                "score" : -1,
                "Course_Name" : 1
            }
        }

    ]).limit(500)
    res.json(data)
})

export default router;