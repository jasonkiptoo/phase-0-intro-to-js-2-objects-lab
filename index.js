// Write your solution in this file!
const employee={
    name: "kiptoo",
    streetAddress: "Nairobi",
};

function updateEmployeeWithKeyAndValue(employee){
    employee={
        name:"Sam",
        streetAddress:"11 Broadway"

    }
    return employee;

}

destructivelyUpdateEmployee
 function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.name="Sam"
    employee.streetAddress="12 Broadway"
        
    return employee;
 }

 
//made changes for phase 1
 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {... employee};
    delete newEmployee[key]
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;


  }







