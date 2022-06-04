var Connection = require("./config/dbconnection")
var express = require('express');
const { application } = require("express");
const { connect } = require("./config/dbconnection");
var router = express.Router();


router.put("/update_student/:id", (req, res) => {
    let studentID = req.params.id
    Connection.query('SELECT * FROM Student WHERE  studentID=?', req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            // res.send(data)
            if (data.length > 0) {
                Connection.query('UPDATE Student SET UserName=? WHERE studentID=?', [req.body.UserName, req.params.id], (err, insert) => {
                    if (err) {
                        res.json({
                                code: 400,
                                msg: "somthing went wrong",
                                status: false
                            })
                            // retunn error
                    } else {
                        res.json({
                                code: 200,
                                msg: "update Success",
                                status: true
                            })
                            // return success , user will insert 
                    }
                })


                // Already exist       
            } else {

                res.json({
                    code: 400,
                    msg: "Data not found",
                    status: false
                })
            }
        }
    })
});



router.delete("/delete_student/:id", (req, res) => {
    let studentID = req.params.id
    Connection.query('SELECT * FROM Student WHERE  studentID=?', req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            // res.send(data)
            if (data.length > 0) {
                Connection.query(`DELETE FROM Student WHERE studentID=?`, [req.params.id], (err, insert) => {
                        if (err) {
                            res.json({
                                    code: 400,
                                    msg: "somthing went wrong",
                                    status: false
                                })
                                // retunn error
                        } else {
                            res.json({
                                    code: 200,
                                    msg: "delet Success",
                                    status: true
                                })
                                // return success , user will insert 
                        }
                    })
                    // Already exist       
            } else {

                res.json({
                    code: 400,
                    msg: "student Data not found",
                    status: false
                })
            }
        }
    })
});


router.get("/student_information/:id", (req, res) => {
    // let studentID = req.params.id
    Connection.query('SELECT * FROM Student WHERE studentID = ? ', [req.params.id], (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                code: 400,
                msg: err
            })
        } else {

            if (data.length > 0) {
                res.json({
                    code: 200,
                    msg: data
                })
            } else {
                res.json({
                    code: 400,
                    msg: "data not found"
                })
            }
        }
    })
})


router.get("/student_data", (req, res) => {
    Connection.query('SELECT* FROM Student', (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                code: 400,
                msg: err
            })

        } else {
            res.json({
                code: 200,
                msg: data
            })
        }
    })
})

module.exports = router;