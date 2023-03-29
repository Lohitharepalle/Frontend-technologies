//Simple Syntax of Generics
function identity(arg) {
    return arg;
}
var out1 = identity("My Generic type function");
var out2 = identity(10);
console.log(out1);
console.log(out2);
function identity2(arg) {
    return arg;
}
var out3 = identity(10);
console.log(out3);
function identity3(arg) {
    return arg;
}
var out4 = identity3("Lohitha");
console.log(out4);
function identity4(args) {
    return args;
}
var out5 = identity4("LR");
var out6 = identity4(10);
console.log(out5);
console.log(out6);
/*let x:<S>={
    name:string;
    id:number
}

let v:<S>={
    name:'Pratap',
    id:10,
}*/
function ownType(id, name) {
    console.log(id, name);
}
var out7 = ownType(10, "Lohitha");
function anotherType(id, name) {
    console.log(id, name);
}
var out8 = anotherType(10, "Lohitha");
