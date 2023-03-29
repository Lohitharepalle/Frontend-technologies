 //abstract class cant be instantiated and constructor declarred private can also restrict that class from instantiating
abstract class Animal
{
  abstract name:string
  age:number

  constructor(age:number){
  	  //this.name=name  //this must not be assigned in the derived class constructor
  	  this.age=age
  }	

  //concrete method
  feed(food:string,amount:number):void{
  	console.log("Feeding "+this.name+" the "+" "+amount+"kg of"+food)
  }
  abstract sleep():void;
 }

 class Cat extends Animal
 {
    name:string
    constructor(name:string,amount:number)
    {
    	super(age)
    	this.name=name
    }
    sleep():void
    {
    	console.log("Cat is slepping")
    }
 }

class Dog extends Animal
 {
    name:string
    constructor(name:string,amount:number)
    {
    	super(age) //super in sub class constructor looks for the constructor in the super class to match for same no. of parameters
    	this.name=name
    }
    sleep():void
    {
    	console.log("Dog is slepping")
    }
 }

//Created an object of given class
 const CAT=new Cat("Cosmo",8)
 const DOG=new Dog("Rusty",12)
 CAT.feed("fish",1.2)
 DOG.feed("bis",1.2)