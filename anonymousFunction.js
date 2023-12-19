
//Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array


let argArr =[1,2,3,4,5,6,7,8,9];

(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i])
        }
    }
})(argArr);



//2.Convert all the strings to title caps in a string array

let stringArray=("hi i am a string array").split(" ");

(function(str){{
for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
} 
let str2= str.join(" ");
    console.log(str2)
}
} )(stringArray)
;
//3.Sum of all numbers in an array

    let sumArr =[1,2,3,4,5,6,7,8];

    let resultArr=0;
    (function(sum){

    {for(let i=0;i<sum.length;i++){
      resultArr+=sum[i];
    }console.log(resultArr)
   }
})(sumArr);

//Return all the palindromes in an array

let paloriArr =["mom","dad","madam","nun"];

(function(palori){

for(let i=0;i<palori.length;i++){
    console.log(palori[i].split("").reverse().join(''))
}
let paloriArr1 =palori;
console.log(palori===paloriArr1)
})(paloriArr);
















