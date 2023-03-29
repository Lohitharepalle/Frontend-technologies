//Inheritance
//extends
//TypeScript--> Single ,Multilevel Inheritance


//Base class
class ParentClassName
{

	//property--variable
	name:String
	constructor(sname:string)
	{
		this.name=sname;
	}
	speak():void
	{
	  console.log(this.name+" is Speaking!!")		
	}
}


//derived class
class ChildClassName extends ParentClassName
{
	//Property
	roll:number

	//constructor
	constructor(roll:number,name:string)
	{
		super(name)
		this.roll=roll
	}

	display():void
	{
		console.log("Student name "+this.name)
		console.log("Student number "+this.roll)
	}

}

//creating objects
var s1=new ChildClassName(1,"Mukesh")
var s2=new ChildClassName(2,"Sandeep")


//Accessing members of other classes in current class
console.log("Student 1 information")
//calling information
s1.display()