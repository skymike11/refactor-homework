class Employee {
  constructor (name) {
    this._name = name;
  }

  get name(){
    return this._name;
  }

  toString () {
    return `${this.name} (${this.type})`;
  }
}

function createEmployee(name, type) {
    switch (type) {
        case 'engineer' : return new Engineer(name);
        case 'manager' : return new Engineer(name);
        case 'salesman' : return new Engineer(name);
        default: throw new Error(`Employee cannot be of type ${type}`);
    }
}

class Engineer extends Employee{
    get type(){
        return "engineer"
    }
}

class Salesman extends Employee{
    get type(){
        return "salesman"
    }
}

class Manager extends Employee{
    get type(){
        return "manager"
    }
}

module.exports = {
    createEmployee
};
