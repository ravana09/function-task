
//Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array


let argArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i])
        }
    }
})(argArr);



//2.Convert all the strings to title caps in a string array

let stringArray = ("hi i am a string array").split(" ");

(function (str) {
    {
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        let str2 = str.join(" ");
        console.log(str2)
    }
})(stringArray)
    ;
//3.Sum of all numbers in an array

let sumArr = [1, 2, 3, 4, 5, 6, 7, 8];

let resultArr = 0;
(function (sum) {

    {
        for (let i = 0; i < sum.length; i++) {
            resultArr += sum[i];
        } console.log(resultArr)
    }
})(sumArr);



//Return all the palindromes in an array

let paloriArr = ["mom", "dad", "madam", "nun"];

(function (palori) {

    for (let i = 0; i < palori.length; i++) {
        console.log(palori[i].split("").reverse().join(''))
    }
    let paloriArr1 = palori;
    console.log(palori === paloriArr1)
})(paloriArr);


//prime number

const primeno = () => {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var a = [];
    const prime = function () {
        for (var x of arr) {
            var b = 0;
            for (var i = 2; i <= x / 2; i++) {
                if (x % i == 0) {
                    b = 1;
                    break;
                }
            }
            if (b == 0) {
                a.push(x)
            }
        }
        return a

    }(arr)
    console.log(prime);
}
primeno();

//Return median of two sorted arrays of the same size

const median = (a, b) => {
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
let a=[1,8,6];
let b=[9,8,7];
console.log(median(a,b));


//Remove duplicates from an array
(()=>{
    let a=[1,4,5,2,4,5,4,5,8];
    let Duplicate = [...new Set(a)];
    console.log(Duplicate);
})();


//Rotate an array by k times
const rotateArray1 =(nums,k)=>{
    for (let i=0;i<k;i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }
  let nums=[2,7,6,8];
  let k=[2];
  console.log(rotateArray1(nums,k));


















