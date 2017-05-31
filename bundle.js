/*
 * Creating namespace for employeeManage with interface and function
 */
var employeeManage;
(function (employeeManage) {
    function empRef(emp) {
        console.log("Employee ID is " + emp.empID + ",Employee name is " + emp.empName + " and Employee Department is " + emp.empDept);
    }
    employeeManage.empRef = empRef;
})(employeeManage || (employeeManage = {}));
/*
 * Creating same namespace as earlier mentioned file
 * employeeManage with different function function
 */
///<reference path="namespace.ts"/>
var employeeManage;
(function (employeeManage) {
    function secondFunc() {
        console.log("@@@@Calling namespace from secondfile@@@@");
    }
    employeeManage.secondFunc = secondFunc;
})(employeeManage || (employeeManage = {}));
/*
 * Including different file in single file.
 */
///<reference path="namespace.ts"/>
///<reference path="empFirst.ts"/>
var empInfo = { empID: 101, empName: 'Tina', empDept: 'FA001' };
employeeManage.empRef(empInfo);
employeeManage.secondFunc();
