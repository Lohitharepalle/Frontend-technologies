//Four types of functions in ts

//1.Named type functions
function greet(name)
{
	return "Hello "+name;
}
console.log(greet("Lohi"))


//2.Function Expressions/Anonymous functions(no function name)
let greet2=function(name:string){return "haii "+name;}
console.log(greet2("Lohitha"));


//3.Arrow type functions(Arrow operator,,no function keyword)
let greet3=(name:string)=>{return "Bye "+name;}
console.log(greet3("Lohitha"));


//4.Typed Functions(types of parameters and functions are mandatory)
function add(x:number,y:number):number
{
	return x+y;
}
console.log(add(4,-5));


//Parameters(formal parameters) and Arguments(actual parameters)
//Optional parameters and Default Parameters
//? optional parameters,,optional parameters should always follow the other parameters
function log(message:string,userID?:string):void //here userID is optional parameter
{
	let time=new Date().toLocaleTimeString()
	console.log(time,message,userID || 'Not Signed in')
}//prints userID if given else prints not signed in
log('Page Loaded');
log('Page loaded with username','Lohitha')


// = for default parameters
function log1(message:string,userID="Guest")
{
	console.log(message,userID)
}
log1("Page Loaded default");
log1("Page Loaded","Lohitha");


//Rest Parameters
/*
1. We can use only one rest parameter in a function definition
2. It should be of array type
3. It must be the last parameter in parameter list
*/
function sum(a:number,...b:number[]):number
{
	let result=a;
	for(var i=0;i<b.length;i++)
	{
		result+=b[i]
	}
	return result;
}
let sum1=sum(3,5);
console.log(sum1);
let sum2=sum(3,5,6,7,8);//5,6,7 will be stored in an array
console.log(sum2)


//"this" keyword
//this keyword points to current object i.e.,when interpreter leaves a block to access the variable,it loses the identity if object hence to overcome this,the address of current obj is stored in this which is global keyword
//call(),bind() and apply()
var car={
	registrationNumber:"AP16CH1218",
	brand:"Toyota",

	display:function(){console.log(this.registrationNumber+" "+this.brand);}
}
car.display();

//Function Overloading

/*
1.function name should be same
2.number of parameters can be different in each function you overload
3.if the number of parameters is same then their type must be different
4.return type of all overloaded functions should be same
*/

function add1(a:string,b:string):string;
function add1(a:number,b:number):number;

function add1(a:any,b:any):any;
{
	return a+b;
}

let res1=add1("Lohitha","Repalle");
let res2=add1(5,6);
console.log(res1,res2);
