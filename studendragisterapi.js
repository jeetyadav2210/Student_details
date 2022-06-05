var Connection = require("./config/dbconnection")
var express = require('express');
var router = express.Router();


router.post("/ragistration", (req, res) => {
    Connection.query("SELECT COUNT(*) AS cnt FROM Student WHERE email = ? ",
        req.body.Email,
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                // res.send(data)
                if (data[0].cnt > 0) {
                    res.json({
                            code: 400,
                            msg: "Email already exist,please login",
                            status: false
                        })
                        // Already exist 
                } else {

                    Connection.query(`INSERT INTO Student (UserName,Email,Password,Qalification,Age) VALUES('${req.body.UserName}','${req.body.Email}','${req.body.Password}','${req.body.Qalification}','${req.body.Age}')`, (err, insert) => {
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
                                    msg: "registration success",
                                    status: true
                                })
                                // return success , user will insert 
                        }
                    })
                }
            }
        })
});


router.post("/login_student", (req, res) => {
    var { Email, Password } = req.body
    Connection.query('SELECT * FROM Student WHERE  Email=?',
        Email,
        (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
                console.log(err);
            } else {
                console.log(data);
                if (data.length < 0) {
                    res.json({
                        code: 400,
                        msg: "Email not exist,please ragister",
                        status: false
                    })
                } else {
                    if (data[0].Password == Password) {
                        res.json({
                            code: 200,
                            msg: data
                        })
                    } else {
                        res.json({
                            code: 400,
                            msg: "password not match"
                        })
                    }
                }
            }
        })
})


module.exports = router