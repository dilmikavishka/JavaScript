/*-----------Array method--------------*/

let array1 = ["Ranil","Namal","Sajith"];
console.log(array1);

//push method
array1.push("ADK");
console.log(array1);

array1.push("Dilith");
console.log(array1);

//pop method
array1.pop();
console.log(array1);

//shift
array1.shift();
console.log(array1);

//unshift
array1.unshift("Ranjan");
console.log(array1);

array1.unshift("Prasad","Yasendra");
console.log(array1);

let number_array1 = [1,2,3];
let number_array2 = [4,5,6,7,8,9,10];

//concat
let number_array_resul = number_array1.concat(number_array2);
console.log("number_array1:",number_array1);
console.log("number_array2:",number_array2);
console.log("number_array_result:",number_array_resul);

let number_array_resul2 = number_array2.concat(number_array1);
console.log("number_array_result2:",number_array_resul2);

//slice
let number_array = [1,2,3,4,5,6,7,8,9,10];
let copy1 = number_array.slice(2);
console.log("copy1:",copy1);

let copy2 = number_array.slice(2,6);//6 weni index eka dakwa ewanawa 6 index eka enne nh ita kalin index eken nathara wenawa [3, 4, 5, 6]
console.log("copy1:",copy2);

let copy3 = number_array.slice(-1);//- dunnama aga idan ewa denne patan ganne -1 n
console.log("copy1:",copy3);//[10]

let copy4 = number_array.slice(-2);
console.log("copy1:",copy4);//[10,9]

/*let number_array_new = number_array;

console.log("number_array:",number_array);//(10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("number_array_new:",number_array_new);//(10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number_array_new[0] = 100;
console.log("number_array:",number_array);//[100, 2, 3, 4, 5, 6, 7, 8, 9, 10]//methana wenas wenawa a array ekatama assign karagena thina nisa
console.log("number_array_new:",number_array_new);//[100, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

let number_array_new = number_array.slice(0);

console.log("number_array:",number_array);//(10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("number_array_new:",number_array_new);//(10)[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number_array_new[0] = 100;
console.log("number_array:",number_array);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] methana 100 enne naththe slice(0) dila aluthenma array ekak define karagena thina nisa
console.log("number_array_new:",number_array_new);//[100, 2, 3, 4, 5, 6, 7, 8, 9, 10]//meka apita kamathi vidihakata change karagena yanna piuluwanne

//splice
let new_array1 = [1,2,3,4,5,6,7,8,9,10];

/*new_array1.splice(7);//7 weni index eke idan tika remove karanawa
console.log("splice:",new_array1);//[1, 2, 3, 4, 5, 6, 7]*/

/*new_array1.splice(3,2);//3 weni index eke9 idan index 2k delete wenawa 4,5
console.log("splice:",new_array1);//[1, 2, 3, 6, 7, 8, 9, 10]*/

new_array1.splice(1,1,"hello");//1index ekata hello kiyala add karanna
console.log("splice:",new_array1);//[1, 'hello', 3, 4, 5, 6, 7, 8, 9, 10]

//sort
let arr1 = [10,40,50,20,70,60,80,30];

for (let i = 0;i<arr1.length;i++){
    for (let j=0;j<arr1.length;j++){
        let num = arr1[i];
        if(arr1[j] > arr1[j+1]){
            var temp1 = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp1;
        }
    }
}
console.log("-----array sorted:",arr1);

let sort_arr1 = arr1.sort();
console.log("sort_arr1:",sort_arr1);//[10, 20, 30, 40, 50, 60, 70, 80]

//reverse
let revers_array = arr1.reverse();
console.log("reverse array:",revers_array);//[80, 70, 60, 50, 40, 30, 20, 10]

//indexOf
let x = ["US","UK","SL","USE","SL"];

let inx1 = x.indexOf("UK");
console.log("UK",inx1);//UK 1

let inx2 = x.indexOf("SL");
console.log("SL",inx2);//SL 2

let inx3 = x.lastIndexOf("SL");
console.log("SL",inx3);//SL 4

//include
let arr = [1,2,true,"hello","hi"];//me array eke thinawada kiyala balanawa a wachane
let includeHello = arr.includes("hello");
console.log("includeHello:",includeHello);//includeHello: true


//filter
let arr2 = [2,4,3,5,6,7,8,9,10];
let filter_even_number = arr2.filter(function (item){
    return item%2==0;
})
console.log("filter even number:",filter_even_number);

//map
let arr3 = ["USA","INDIA","SRI LANKA","RUSSIA"];

/*
for (let i = 0;i<arr3.length;i++){
    console.log(arr3[i]);
}*/

arr3.map((item,index)=>{
    console.log(index+":"+item);

});

//////////toString////////////

let ary = ["A","B","C","D","E","F","G","H","I"];
console.log("ToString:",ary.toString());
