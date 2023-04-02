class Ship {
    constructor(name, type, length) {
      this.name = name;
      this.type = type;
      this.length = length;
    }
  
    get description() {
      return `${this.name} is a ${this.type} ship that is ${this.length} meters long.`;
    }
  }
  
  class MotorBoat extends Ship {
    constructor(name, length, maxSpeed) {
      super(name, 'motor boat', length);
      this.maxSpeed = maxSpeed;
    }
  
    get description() {
      return `${super.description} It has a maximum speed of ${this.maxSpeed} knots.`;
    }
  }

  class SailBoat extends Ship {
    constructor(name, length, sailArea) {
      super(name, 'sail boat', length);
      this.sailArea = sailArea;
    }
  
    get description() {
      return `${super.description} It has a sail area of ${this.sailArea} square meters.`;
    }
  }

  class Yacht extends Ship {
    constructor(name, length, cabinCount) {
      super(name, 'yacht', length);
      this.cabinCount = cabinCount;
    }
  
    get description() {
      return `${super.description} It has ${this.cabinCount} cabins.`;
    }
  }

  const boat1 = new MotorBoat('Sea Breeze', 10, 20);
  console.log(boat1.description);
  