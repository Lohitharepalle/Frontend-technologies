//Simple Syntax of Generics

function identity<T>(arg:T):T//a function type generic by adding <T>,,here type of generic is T
{
	return arg;
}

let out1=identity<string>("My Generic type function");
let out2=identity<number>(10);
console.log(out1)
console.log(out2)

function identity2(arg:number):number
{
	return arg;
}
let out3=identity(10);
console.log(out3)

function identity3(arg:any):any//any->accepts any value and leads to loss of info
{
	return arg;
}
let out4=identity3("Lohitha");
console.log(out4);

function identity4<Type>(args:Type):Type
{
	return args;
}
let out5=identity4("LR")
let out6=identity4<number>(10)
console.log(out5)
console.log(out6)

/*let x:<S>={
	name:string;
	id:number
}

let v:<S>={
	name:'Pratap',
	id:10,
}*/
function ownType<Type,T>(id:Type,name:T)
{
	console.log(id,name);
}
let out7=ownType<number,string>(10,"Lohitha");

function anotherType<Type>(id:Type,name:string)
{
	console.log(id,name);
}
anotherType<number>(10,"Lohitha");


