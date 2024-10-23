/*

/!*-------------------Literal based arrays-----------------*!/

//let array =[];
let array1 = [1, 2, 3, 4, 5];
console.log(array1);

let array2 = ["hello",1,true,function(){},["A","B","C"]];
console.log(array2);

/!*-------------------constructor based arrays-----------------*!/
let array3 = new Array(1,2,3,4);
let array4 = new Array(1,"hello",true,function (){},["hi","haloo"],{/!*object ekak me*!/});*/

let array = ["A", "B", "C", "D", "E", "F"];

//get array item by index
console.log("index0:",array[0]);
console.log("index1:",array[1]);
console.log("index2:",array[2]);
console.log("index3:",array[3]);
console.log("index4:",array[4]);

//array index ekakata apata data ekak assign karanna puluwan mehema
console.log("array:",array);
array[3] = "Dilmi";
console.log("array:",array);