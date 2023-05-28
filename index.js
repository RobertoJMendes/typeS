"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 20;
console.log(x);
let y = 10;
const numbers = [2, 3, 4, 5];
let myTuple;
myTuple = [5, "letras", ["a", "mais letras"]];
const user = {
    name: "Roberto",
    age: 41
};
console.log(user);
console.log(user.name);
let id = "20";
const userId = 10;
const produtos = "café";
const agora = x;
var size;
(function (size) {
    size["p"] = "pequeno";
    size["m"] = "m\u00E9dio";
    size["g"] = "grande";
})(size || (size = {}));
const camisa = {
    name: "camisa azul",
    size: size.p
};
console.log(camisa);
let teste;
function vamosSomar(a, b) {
    return a + b;
}
function sayHello(name) {
    return `hello${name}`;
}
console.log(sayHello("Junio"));
function logger(msg) {
    console.log(msg);
}
logger("testando!");
function greeting(name, greet) {
    console.log(`Ola ${greet} ${name}`);
}
console.log(greeting("junio"));
function novoGreenting(name, greet) {
    if (greet) {
        return console.log(`Ola ${greet} ${name}`);
    }
    else {
    }
    return console.log(`ola ${name}`);
}
novoGreenting("mendes");
novoGreenting("Roberto", "Junio");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const algunsNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(algunsNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("não foi passado um Number!");
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['Roberto', 'Junio', true];
showArraysItems([a1, a2]);
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome de usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O usuário é ${this.role}`);
            return;
        }
        console.log("informação restrita!");
    }
}
const zeca = new User('Zeca', "admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("Vw", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const A4 = new SuperCar("Audi", 4, 2.0);
console.log(A4);
A4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random;
                this.createDate = new Date();
            }
        };
    };
}
let PessoaPerson = class PessoaPerson {
    constructor(name) {
        this.name = name;
    }
};
PessoaPerson = __decorate([
    BaseParameters()
], PessoaPerson);
const SamEleMesmo = new PessoaPerson("Sam");
console.log(SamEleMesmo);
