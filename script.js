/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = employees.map(employee => {
    if(employee.profession === "developer") 
    return employee;
  });
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
  employees.forEach(employee => {
    if(employee.profession === "developer") 
    developers.push(employee);
  });
  console.log(developers);

}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  employees = employees.filter(employee => employee.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    {id:4,name:"sarang",age:"22",profession:"CEO"},
    {id:5,name:"tejas",age:"22",profession:"contractor"},
    {id:6,name:"janvi",age:"22",profession:"engineer"}
  ];
  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}
