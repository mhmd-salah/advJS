class EmployeeData {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class PayCalculator {
  calculatePay(employee) {
    return employee.salary * 5;
  }
}

class HourReporter {
  reportHours(employee) {
    console.log(`Employee: ${employee.name}, Salary: ${employee.salary}`);
  }
}

class EmployeeSaver {
  saveEmployee(employee) {
    console.log(`${employee.name} has been saved.`);
  }
}

class EmployeeFacade {
  constructor(employeeData) {
    this.employeeData = employeeData;
    this.reporter = new HourReporter();  
    this.calculator = new PayCalculator();
    this.saver = new EmployeeSaver();
  }

  generateReport() {
    this.reporter.reportHours(this.employeeData);
    const pay = this.calculator.calculatePay(this.employeeData);
    console.log(`Calculated Pay: $${pay}`);
    this.saver.saveEmployee(this.employeeData);
  }
}

const employeeData = new EmployeeData("Mohamed Salah", 1000);

const employeeFacade = new EmployeeFacade(employeeData);
employeeFacade.generateReport();
