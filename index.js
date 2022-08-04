// Write your solution in this file!
const employee = {
    name: "Some name",
    streetAddress: "Some address",
};

//function 1
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Another One"
);

employee.name;

//function 2
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

const destructivelyUpdatedEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Destructively added"
);

employee.name;

//function 3
function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];

    return newObj;
}

const deleteEmployee = deleteFromEmployeeByKey(
    employee, "name"
);

employee.name;

//function 4
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}

const destructivelyDeleteEmployee = deleteFromEmployeeByKey(
    employee, "name"
);

employee.name;