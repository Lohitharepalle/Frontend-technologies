//Generics can store variables of diff types,whereas classes can store methods too
var Student = /** @class */ (function () {
    function Student() {
    }
    //functions
    Student.prototype.display = function () {
        console.log(this.name, this.id);
    };
    return Student;
}());
//creating an object
var s1 = new Student("Lohitha", 101);
console.log("Student Details:" + s1.name);
console.log("Student Details:" + s1.id);
