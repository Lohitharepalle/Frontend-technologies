//Inheritance
//extends
//TypeScript--> Single ,Multilevel Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Base class
var ParentClassName = /** @class */ (function () {
    function ParentClassName(sname) {
        this.name = sname;
    }
    ParentClassName.prototype.speak = function () {
        console.log(this.name + " is Speaking!!");
    };
    return ParentClassName;
}());
//derived class
var ChildClassName = /** @class */ (function (_super) {
    __extends(ChildClassName, _super);
    //constructor
    function ChildClassName(roll, name) {
        var _this = _super.call(this, name) || this;
        _this.roll = roll;
        return _this;
    }
    ChildClassName.prototype.display = function () {
        console.log("Student name " + this.name);
        console.log("Student number " + this.roll);
    };
    return ChildClassName;
}(ParentClassName));
//creating objects
var s1 = new ChildClassName(1, "Mukesh");
var s2 = new ChildClassName(2, "Sandeep");
//Accessing members of other classes in current class
console.log("Student 1 information");
//calling information
s1.display();
