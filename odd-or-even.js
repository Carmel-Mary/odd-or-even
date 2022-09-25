//Given a list of integers, determine whether the sum of its elements is odd or even.

//Give your answer as a string matching "odd" or "even".


//SOLUTION
function oddOrEven(array) {
    //enter code here
   let sum = 0
   for(let i = 0; i < array.length; i++)
     {sum = sum + array[i]}
   if(sum % 2 === 0){return "even"}
   else{return "odd"}
 }
