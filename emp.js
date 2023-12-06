class Employee{
    orgName="Google";
    constructor(empId,empName,empSalary){
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
    }
    getEmpInfo(){
        console.log("ID = "+this.empId);
        console.log("name = "+this.empName);
        console.log("salary = "+this.empSalary);
        console.log("Organization name = "+this.orgName);
    }
}
let emp1=new Employee(101,'ram',25645);
let emp2=new Employee(101,'ram',25645);
emp1.getEmpInfo();
emp2.getEmpInfo();