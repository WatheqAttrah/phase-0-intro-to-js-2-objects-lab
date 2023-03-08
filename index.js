// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress:'11 Broadway',
};
function updateEmployeeWithKeyAndValue(employee,name , streetAddress) {
    employee.name = "Sam";
    employee.streetAddress = '11 Broadway' ;
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}