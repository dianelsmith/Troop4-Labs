/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />


namespace EmployeeApp.Controllers {

    class Employee {
        firstName: string;
        lastName: string;
        age: number;
        employeeType: string;
        yearlySalary = 0;
        hourlySalary = 0;
    }

    class EmployeeController {
        employee: Employee;

        save() {
            if (this.employee.employeeType === 'FullTime') {
                alert(`Saved new ${this.employee.employeeType} Employee ${this.employee.firstName} ${this.employee.lastName} age ${this.employee.age} with Yearly Salary of $${this.employee.yearlySalary}`);
            } else {
                alert(`Saved new ${this.employee.employeeType} Employee ${this.employee.firstName} ${this.employee.lastName} age ${this.employee.age} with Hourly Salary of $${this.employee.hourlySalary}`);
            }


        }

    }

    angular.module('EmployeeApp').controller("EmployeeController", EmployeeController);

} 
