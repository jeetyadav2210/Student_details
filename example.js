let s = [{
    a: "b"
}, {
    a: "c"
}]
console.log(s[0].a)


SELECT *
    FROM Student
INNER JOIN Student_attendence
ON Student.StudentId = Student_attendence.AttendenceId;
WHERE Student.StudentId
AND Student.StudentId = '430'
AND AttendenceIdStudent_attendence = 'summited'

SELECT *
    FROM Student
RIGHT JOIN Student_attendence
ON Student.StudentId = .AttendenceIdStudent_attendence;
WHERE Student.StudentId


SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
LEFT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;

SELECT table1.f_id FROM table1
INNER JOIN table2
ON table2.f_id = table1.f_id
WHERE table2.f_type = 'InProcess'
AND f_com_id = '430'
AND f_status = 'Submitted'