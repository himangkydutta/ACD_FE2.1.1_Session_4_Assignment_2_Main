/*
 * Including different file in single file.
 */

///<reference path="namespace.ts"/>
///<reference path="empFirst.ts"/>

let empInfo:employeeManage.empDetails={empID:101,empName:'Tina',empDept:'FA001'};
employeeManage.empRef(empInfo);
employeeManage.secondFunc();

