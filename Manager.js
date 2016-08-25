import Employee from "./Employee"

class Manager extends Employee {
  constructor(){
    super("manager")
    this.employees = []
  }

  assign(employee){
    if(this.isManager()){
      this.employees.push(employee)
    }
  }

  getTotalAllocation(){
    let total = this.getAllocation()
    for(var employee of this.employees){
      total += employee.isManager() ? employee.getTotalAllocation() : employee.getAllocation()
    }
    return total
  }
}

export default Manager