// let aisha=  class man {
//     name: string ;
//     constructor(name:string){
//         this.name="Aisha";
//     }
//     eat(){console.log(this.name + " " + "is a animal who is Eating")
// }
// }
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
// var a = new Animal("cat").name;
// console.log(a);
// class human {
//     private name: string ;
//     constructor(theName :string){
//         this.name = theName;
//     }
//     alert(this.name + " " + "is a animal");
// }
var Human = (function () {
    function Human(name) {
        this.name = "Aisha";
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Human;
}());
var animal = (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.eat = function () {
        console.log(this.name + "is an animal and is eating");
    };
    return animal;
}());
var robot = (function () {
    function robot(name) {
        this.name = name;
    }
    return robot;
}());
var h = new Human("Aisha");
var a = new Animal("dog");
var r = new robot("chitti");
//   let r0 :robot = new Animal ("cat")//
var h2 = h;
console.log(r);
var bigAnimal = (function () {
    function bigAnimal(name) {
        this.name = name;
    }
    return bigAnimal;
}());
var cat = (function (_super) {
    __extends(cat, _super);
    function cat() {
        _super.call(this, "cat");
    }
    return cat;
}(bigAnimal));
var servent = (function () {
    function servent(name) {
        this.name = name;
    }
    return servent;
}());
var b = new bigAnimal("lion");
var c = new cat(); //isme agr value dal dnge too error aega q k ye extend class h
var s = new servent("nabeel");
b = c; //extend class h tuu is lyn ye allow karega 
// b=s  //extend class nh h thtx why ye allow nh kare ga 
//step # 23 (class-protected-modifier)
//protected keyword allows subclasses to gain visibility into the parent class without exposing this API to other parts of the code.           
var list = (function () {
    function list() {
        this.content = ["aisha", "hira"];
    }
    list.prototype.setElement = function (index, name) {
        if (index === void 0) { index = 4; }
        if (name === void 0) { name = "Aisha"; }
        this.content[index] = "Aisha"; //this class is not shown ass its portected nd only shown in subclasses
    };
    return list;
}());
var stack = (function (_super) {
    __extends(stack, _super);
    function stack() {
        _super.call(this);
        this.currentIndex = 9;
    }
    stack.prototype.push = function (item) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
    };
    return stack;
}(list));
var hahah = new stack();
console.log(hahah);
//  step # 24 (accessor)//
//TypeScript supports getters/setters as a way of intercepting accesses to a member of an object, thus allowing Encapsulation
//This gives you a way of having finer-grained control over how a member is accessed on each object.
//Encapsulation is the packing of data and functions into a single component. 
//It allows selective hiding of properties and methods in an object by building an impenetrable wall to protect the code
// from accidental corruption.
//Note getters and setters are only supported when targeting ES 5 or higher 
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "MR" + this._fullName;
        },
        set: function (newName) {
            if (passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// console.log(passcode)
//step # 2 as we want to access modifier than we should apply same access modifier on getter nd setter 
var human = (function () {
    function human() {
    }
    Object.defineProperty(human.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secretpasscode") {
                this._fullName = newName;
            }
            else {
                console.log("Error!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return human;
}());
var employee = new Employee();
employee.fullName = "aisha";
if (employee.fullName) {
    console.log(employee.fullName);
}
//step # 25 (static proporties)
//Please note that in each instance accesses this static value through prepending the name of the class. 
//Similarly to prepending 'this.' in front of instance accesses, here we prepend 'Grid.' in front of static accesses.
var Employee1 = (function () {
    function Employee1() {
    }
    Employee1.incomeTax = 30;
    return Employee1;
}());
var e = new Employee1();
Employee1.incomeTax = 40;
console.log(Employee1.incomeTax);
//we can also have static methods
//step # 26(interfaces)
//One of TypeScript's core principles is that type-checking focuses on the 'shape' that values have. 
//This is sometimes called "duck typing" or "structural subtyping". 
//In TypeScript, interfaces fill the role of naming these types
//new objects
function name1(labelledobj) {
    console.log(labelledobj.label + "is a label");
}
name1({ label: "aisha" }); //its ok as its new object
// name1({mylabel: "Aisha"})   //gives error becaues itx a new object nd it doex exist rename proporty
function nameX(_a) {
    var string = _a.x;
    console.log(arguments[0]);
}
nameX({ arguments: "Aisha" });
nameX({ name: "nida" }); //name matched by index signature
// name1({label :"one" size : "10th"})   //as it a fresh object soo it doesnt allow extra proporties 
//stale objects
var new2 = { label: "aisha ", name: "aisha" };
name1(new2); //it doesnt give any error as it contain same proporties while if w chnge label by name dn its give an error 
var new3 = { name: "aisha", size: "30" };
nameX(new3); // its gives error as it doesnt give the proporty 
function create(config) {
    var new6 = { name: "Aisha", age: 12, size: 39 };
    if (config.name) {
        new6.name = config.name;
    }
    if (config.size) {
        new6.age = config.size * config.size;
    }
    return new6;
}
var new7 = create({ name: "saba" });
console.log(new7.age);
var mySearch = function (fS, lS) {
    if (fS === void 0) { fS = "Aisha"; }
    if (lS === void 0) { lS = "Akber"; }
    var result = fS.search(lS);
    if (result == 1) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch);
var newArr = ["Aisha", "Nida"];
var first = newArr[0];
console.log(first);
var newLib = { "first ": "maths", "second": "chemistry", lenght: "2" }; //without lenght k error dega 
var hello = newLib["first"];
console.log(hello); //ye result undefined q arha h?
var clock = (function () {
    function clock(h, d) {
    }
    clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return clock;
}());
var clock5 = (function () {
    function clock5(h, m) {
    }
    return clock5;
}());
var newClock = clock;
var newC = new newClock(30, 40);
var Hie = {};
Hie.color = "blue";
Hie.size = 40;
Hie.height = 5;
var he = {}; //var he = {} as he    another syntex for explict casting
he.color = "yellow";
he.size = 12;
var copy1;
copy1(10);
// copy1.reset()
copy1.interval = 5.;
//When interacting with 3rd-party JavaScript, you may need to use patterns like the above to fully-describe the shape of the type.
//Note: The transpiled Javascript code will not run here it is being used as an example
//step # 34 (classes as interface)
//A class declaration creates two things: a type representing instances of the class and a constructor function. 
//Because classes create types, you can use them in the same places you would be able to use interfaces.
var point = (function () {
    function point() {
    }
    return point;
}());
var pointX = (function (_super) {
    __extends(pointX, _super);
    function pointX() {
        _super.apply(this, arguments);
    }
    return pointX;
}(point));
var PointX = {
    x: 1, y: 3, z: 5
};
//step # 35 (modules)
function add(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    return a + b;
}
exports.add = add;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;
function cal(a, b) {
    return a * b;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cal;
//step # 37(generics) 
//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is 'generics', that is,
//being able to create a component that can work over a variety of types rather than a single one. 
//This allows users to consume these components and use their own types.
var Container = (function () {
    function Container() {
        this._array = [];
    }
    Container.prototype.add = function (item) {
        this._array.push(item);
    };
    return Container;
}());
var d = new Container();
var c1 = new Container();
