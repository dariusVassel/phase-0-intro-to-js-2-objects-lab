// Write your solution in this file!
const employee = {name: "Samarth", streetAddress: "2 N 6th St"} ;

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    console.log(newEmployee);
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,keys){
    const newEmployee = {...employee};
    delete newEmployee[keys];
    console.log(newEmployee);
    return newEmployee;
}

let newEmployee = deleteFromEmployeeByKey(employee, keys);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    console.log(employee);
    return employee;
}