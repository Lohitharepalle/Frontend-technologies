//array using arrayobject
let arr:string[]=new Array("VRSEC","501","java","abhishek");
for(var i=0;i<arr.length;i++)
{
	console.log(arr[i]);
}

//array traversal by using a for...in loop
let j:any;
let arr1:string[]=["VRSEC","502","Python","abhishek"];
for(j in arr1)
{
	console.log(arr1[j]);
}