type Person = {
    name: string;
};

type Employee = {
    employeeId : number;
};

type WorkingPerson = Person & Employee;

const emp: WorkingPerson = {
    name : "Sudha",
    employeeId:1001
};
console.log("Employee:",emp.name,emp.employeeId);

