var Connection = require("./config/dbconnection")
var express = require('express');
const { application } = require("express");
const { connect } = require("./config/dbconnection");
var router = express.Router(); -

router.put("/update_student/:id", (req, res) => {
    // let studentID = req.params.id
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

})

router.delete("/delete_student/:id", (req, res) => {
    let studentID = req.params.id
    Connection.query('SELECT * FROM Student WHERE  studentID=?', req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            if (data.length > 0) {
                Connection.query(`DELETE FROM Student WHERE studentID=?`, [req.params.id], (err, insert) => {
                        if (err) {
                            res.json({
                                code: 400,
                                msg: "somthing went wrong",
                                status: false
                            })
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

router.put("/update/:id", (req, res) => {
    Connection.query('SELECT * FROM Student WHERE  studentID=?', req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            if (data.length > 0) {

                Connection.query('UPDATE Student SET Password = ? WHERE studentID = ? ', [req.body.Password, req.params.id], (err, row) => {

                    if (err) {
                        res.json({
                            code: 400,
                            msg: "somthing went wrong "
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "update success "
                        })
                    }
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



router.delete("/delet_data/:id", (req, res) => {
    Connection.query('SELECT* FROM Student WHERE StudentID=?', req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            if (data.length > 0) {
                Connection.query('DELETE FROM Student WHERE studentID=?', [req.params.id], (err, insert) => {
                    if (err) {
                        res.json({
                            code: 400,
                            msg: "somthing wrong ",
                            stutas: false
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "delete succes",
                            stutas: true
                        })
                    }
                })
            } else {
                res.json({
                    code: 400,
                    msg: "data not found",
                    stutas: false
                })
            }
        }
    })

})



router.get("/Studentinfo/:id", (req, res) => {
    Connection.query('SELECT* FROM Student WHERE studentID=?', req.params.id, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (data.length > 0) {
                res.json({
                    code: 400,
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


router.get("/dataget", (req, res) => {
    Connection.query('SELECT* FROM Student', (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                code: 400,
                msg: "data not faund"
            })
        } else {
            console.log(data);
            res.json({
                code: 200,
                msg: data
            })
        }
    })
})

module.exports = router;