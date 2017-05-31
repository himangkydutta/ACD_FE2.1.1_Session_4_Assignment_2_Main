/*
 * Creating namespace for employeeManage with interface and function
 */
namespace employeeManage{
    export interface empDetails{

        empID:number;
        empName:String;
        empDept:String;
    }

    export function empRef(emp:empDetails){
        console.log(`Employee ID is ${emp.empID},Employee name is ${emp.empName} and Employee Department is ${emp.empDept}`);
    }
}