// Write your solution in this file!
const employee = {
    name: "name",
    streetAddress:'address',
};
function updateEmployeeWithKeyAndValue(obj,key  , value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
updateEmployeeWithkeyAndValue (employee, "name", "Newddress");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
deleteFromEmployeeByKey(employee, "Sam")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey (employee, "name");
