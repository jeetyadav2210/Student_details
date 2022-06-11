var Connection = require("./config/dbconnection")
var express = require('express');
const { Router } = require("express");
var router = express.Router();

router.post("/add_attendence", (req, res) => {
    Connection.query(`INSERT INTO Student_attendence (Month,Year,Date,Student_attendense,StudentId) VALUES('${req.body.Month}','${req.body.Year}','${req.body.Date}','${req.body.Student_attendense}','${req.body.StudentId}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "data insert succes "
            })
        }
    })
});


router.post("/right_join/:id", (req, res) => {
    Connection.query('SELECT *FROM Student RIGHT JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId=?', req.params.id, (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }

        console.log(rows[0]);
    });

})

router.post("/left_join/:id", (req, res) => {
    Connection.query('SELECT *FROM Student LEFT JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId=?', req.params.id, (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }
        console.log(rows[0]);

    })
})




router.post("/inner_join/:id", (req, res) => {
    Connection.query('SELECT *FROM Student INNER JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId=?', req.params.id, (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }

        console.log(rows[0]);
    });

})


router.post("/full_join/:id", (req, res) => {
    Connection.query('SELECT *FROM Student FULL JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId=?', req.params.id, (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 400,
                msg: rows
            })
        }
    })
})



router.post("/inner_joinadd/:id", (req, res) => {
    Connection.query('SELECT *FROM Student INNER JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId=? AND Age=?', [req.params.id, req.body.Age], (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }

        console.log(rows[0]);
    });

})

//where id or month 
router.post("/and_orjoin/:id", (req, res) => {
    Connection.query('SELECT * FROM Student INNER JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE Student.StudentId = ? OR Month = ? ', [req.params.id, req.body.Month], (err, rows, fields) => {
        if (err) {
            res,
            json({
                code: 400,
                msg: err
            })
        }
        else {
            res.json({
                code: 200,
                msg: rows
            })
        }
    })

})

//age gretarthan 
router.post("/studenet_by_age", (req, res) => {
    Connection.query('SELECT * FROM Student INNER JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE age < 25 OR age > 20', [req.body.age], (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }


    })
})

//salact month 
router.post("/studenet_by_month/:id", (req, res) => {
    Connection.query('SELECT * FROM Student INNER JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE  Student_attendence.Month=?', [req.body.Month], (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }
    })
})

// and condition
router.post("/using_and_join/:id", (req, res) => {
    Connection.query('SELECT * FROM Student FULL JOIN Student_attendence ON Student.StudentId = Student_attendence.AttendenceId WHERE StudentId = ? AND Student_attendence.Month=?;', [req.params.id, req.body.Month], (err, rows, fields) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: rows
            })
        }
    })
})





module.exports = router