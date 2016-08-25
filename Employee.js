class Employee {
  constructor(type){
    this.type = type
  }
  isManager(){
    return this.type == "manager"
  }
  isDeveloper(){
    return this.type == "developer"
  }
  isQA(){
    return this.type == "qa"
  }

  getAllocation(){
    const MGR_ALLOC = 300
    const DEV_ALLOC= 1000
    const QA_ALLOC = 500

    if(this.isManager()){
      return MGR_ALLOC
    }
    else if(this.isDeveloper()){
      return DEV_ALLOC
    }
    else if(this.isQA()){
      return QA_ALLOC
    }
    return 0
  }
}

export default Employee