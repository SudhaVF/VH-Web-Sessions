var hrManager = {
    id: 1,
    name: "Alice",
    jobtitle: "HR Manager",
};
var hrDepartment = {
    id: 101,
    name: "HR Department",
    manager: hrManager,
};
console.log("Department Details:");
console.log("ID:", hrDepartment.id);
console.log("Name:", hrDepartment.name);
console.log("Manager Name:", hrDepartment.manager.name);
console.log("Manager Job Title:", hrDepartment.manager.jobtitle);
