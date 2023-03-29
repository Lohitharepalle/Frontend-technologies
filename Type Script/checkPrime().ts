/*function checkPrime(cNumber:number)
{
	for(let i=2;i<=cNumber;i++)
	{
		if(cNumber<1)
		{
			return false;
		}
		else
		{
			if(cNumber%i==0)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
	}
}
let arr:number[]=[36,78,18,16,23,4];
arr.forEach(function(element)
	{
		const isPrime=checkPrime(element);
		if(isPrime)
		{
			console.log(`${element} is a prime`);
		}
		else
		{
			console.log(`${element} is not a prime`);
		}
	});*/
let arr1:number[][]=[[1,2,3],[4,5,6]];
console.log(arr1[0][1]);
for(let i=0;i<arr1.length;i++)
{
	for(let j=0;j<arr1[i].length;j++)
	{
		console.log(arr1[i][j]);
	}
}