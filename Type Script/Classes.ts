//Generics can store variables of diff types,whereas classes can store methods too
class Student
{
	//variables
	name:string;
	id:number;
	//functions
	display():any
	{
		console.log(this.name,this.id);
	}
	//constructor
	constructor(name:string,id:number)
	{
		this.name;
		this.id;
	}
}

//creating an object

let s1=new Student("Lohitha",101);
console.log("Student Details:"+s1.name);
console.log("Student Details:"+s1.id);
