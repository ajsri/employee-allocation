import Employee from "./Employee"
import Manager from "./Manager"
import Developer from "./Developer"
import QATester from "./QATester"
import chai, { expect } from "chai"


describe("ES6 CCC Allocation App", () => {

  let manager1, manager2, manager3, dev1, dev2, qa1, qa2

  before(() => {
    manager1 = new Manager()
    manager2 = new Manager()
    manager3 = new Manager()
    dev1 = new Developer()
    dev2 = new Developer()
    qa1 = new QATester()
    qa2 = new QATester()

    manager1.assign(dev1)
    manager1.assign(dev2)

    manager2.assign(manager1)
    manager2.assign(qa1)
    manager2.assign(qa2)

  })

  describe("Manager One", () => {    
    it("should have a team of three people", () => {
      expect(manager1.employees.length).to.equal(2)
    })
    it("team of two developers should cost 2300", () => {
      expect(manager1.getTotalAllocation()).to.equal(2300)
    })
  })
  describe("Manager Two", () => {
    it("should have a team of three direct reports", () => {
      expect(manager2.employees.length).to.equal(3)
    })
    it("team of one manager with two developers and two direct QA should cost 3600", () => {
      expect(manager2.getTotalAllocation()).to.equal(3600)
    })
  })
  describe("Employee Allocations", () => {
    describe("Managers", () => {
      it("should cost 300", () => {
        expect(manager1.getAllocation()).to.equal(300)
      })
    })
    describe("Developers", () => {
      it("should cost 1000", () => {
        expect(dev1.getAllocation()).to.equal(1000)
      })
    })
    describe("QA Testers", () => {
      it("should cost 500", () => {
        expect(qa1.getAllocation()).to.equal(500)
      })
    })    
  })
})
