//Array is a collection of similar kind of data but in js it provide to make collection of different type of data like string,number,boolean

let name = ["Shubham", 1, true, null];
// console.log(name);                  //["Shubham",1,true,null];
// console.log(name.length);           //4



// //push method 
// //to add the element at the end of the array
// name.push("Singha");         
// console.log(name);                  //["Shubham",1,true,null,"Singha"];




// //unshift method 
// //to add the element at the start of the array
// name.unshift("Abhay");
// console.log(name);                  //["Abhay","Shubham",1,true,null,"Singha"];





// //splice method 
// //to remove the element from the array ans also add the new element by removing the exit element by passing index and its return array
// name.splice(2,1);                   //name.splice(index,no.of data)
// console.log(name);                  //["Abhay","Shubham",true,null,"Singha"];

// name.splice(2,0,"Anita");          //name.splice(index,no.of data,add new element)
// console.log(name);                //["Abhay","Shubham","Anita,true,null,"Singha"];





let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 40];
let num2 = [11, 21, 31, 41, 51, 61, 71, 81, 91];

// // for loop
// for(let i=0; i<=num.length-1;i++){
//     console.log(num[i]);
// }




// // for each
// num.forEach((value, index, array) => {
//     console.log(value + " " + index + " " + array);
// });






// //Note=> for each method doesnot return array and it also excute within a array if we want to declaire it on another array it will give error undefine exampl below
// const a = num.forEach((value, index, array) => {
//     return value;
// });
// console.log(a);                        //undefined





// //Map method 
// // To overcome this problem we use map method which return a array and we can declaire it into another array and it returns that array
// const a = num.map((value, index, array) => {
//     return value;
// });
// console.log(a);                        //returns array






// //for in or of there is a different showning below
////in ke case me ye index print karta h and of ke case me direct value print krta h
// for (const a in num) {                   
// //  console.log(a);                       // return index
//  console.log(num[a]);                     // return value
// }

// for (const a of num) {
//     console.log(a);                               // return value
// }






// //concat method
// //it is used to concat/join two array and return one array
// const a = num.concat(num2);
// console.log(a);





// console.log(num.indexOf(20));             // 1   find index of element 20

// console.log(num.reverse());               //reverse the array

// console.log(num.sort());                  //sort the element in ascending order




// //Slice method
// // it is used to slice/cut the array from given index to excluding the index which provide second
// const a = num.slice(1,4);
// console.log(a);                              // [20,30,40]
// console.log(num);                            // [10, 20, 30, 40, 50, 60, 70, 80, 90]





// //Splice method
// // it is used to splice/cut the array from given index to including the index which provide second
// const a = num.splice(1,4);
// console.log(a);                              // [20,30,40,50]
// console.log(num);                            // [10, 60, 70, 80, 90]


// console.log(num.toString());                    //  10, 20, 30, 40, 50, 60, 70, 80, 90
// console.log(typeof num.toString());             // string





// //filter
// //it is used to filter a data from an array or data
// const a = num.filter((val, index, arr) => {
//     if ((val >= 10) && (val <= 50)) {
//         return val;
//     }
// });
// console.log(a);                                    // [10, 20, 30, 40, 50]






// //find, findIndex, findLastIndex
// const a = num.find((val, index, arr) => {
//     return val == 40;
// });
// console.log(a);                                    // 10

// const a = num.findIndex((val, index, arr) => {
//     return val == 40;
// });
// console.log(a);                                     // 3

// const a = num.findLastIndex((val, index, arr) => {
//     return val == 40;
// });
// console.log(a);                                     // 9






// // Split method ,Join method

// let num1 = "10,20,30,40";
// let a = num1.split(",");
// console.log(a);                                        //["10", '20', '30', '40']
// a.forEach((e) => {
//     console.log(e);
// })

// const jo = a.join(" and ");
// console.log(jo);                                        // 10 and 20 and 30 and 40




// let arr = [
//     ["shubham",30],
//     ["Nikita",25],
//     ["Nita",38],
//     ["Ritu",35],
//     ["Anita",58]
// ];

// //M-1
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }


// //M-2
// arr.forEach(element => {
//     element.forEach(data =>{
//         console.log(data);
//     })

// });


// //M-3
// for(let i of arr){
//     for(let a of i){
//         console.log(a);
//     }
// }





// //Spread operator
// //it is used to copy and retur  one array to another and we can modigied the another which cant reflect the original one
// let arr1 = [10,20,30,40,50,60,70,80];
// let arr2 = [...arr1];
// console.log(arr2);                                            //[10,20,30,40,50,60,70,80]
// arr2.push(90);
// console.log(arr2);                                            //[10,20,30,40,50,60,70,80,90]
// console.log(arr1);                                            //[10,20,30,40,50,60,70,80]




// //Array distruct
// let arr1 = ["Shubham","Nikita","Nita","Ritu"];
// let [item1,item2,item3,item4] = arr1;
// console.log(item1);                                           //Shubham
// console.log(item2);                                           //Nikita
// console.log(item3);                                           //Nita
// console.log(item4);                                           //Ritu






// //Object
// let obj = {
//     first_name:"shubham",
//     age: 29,
//     "last name":"Singha",
//     fun: function(){
//         console.log("i am a intelligent boy");
//     },
//     arr: [10,20,30]
// }
// console.log(obj.first_name);                                    //shubham
// console.log(obj.age);                                           //29
// console.log(obj["last name"]);                                  //singha(yaha last name ke bich me space h to hume ise " " ke bich me rakhna complsary h baki sabko bhi rakh sakte h koi fark nahi padhega or console karne ke time pe obj[] use karna hi hoga )
// obj.fun();                                                      //i am a intelligent boy
// console.log(obj.arr);                                           //[10,20,30]

// let a = "key2";
// obj[a] = "item2";
// obj.key = "item";
// console.log(obj);






// //Object inside array
// let obj = [
//     { user: 1, fname: "shubham" },
//     { user: 2, fname: "Rahul" },
//     { user: 3, fname: "Rohit" },
//     { user: 4, fname: "Harshit" }
// ];

// let [{ fname }, , { fname: name1 }] = obj;

// console.log(fname);                                                 //shubham
// console.log(name1);                                                 //Rohit




// //Reduce function
// //it is used to reduce the array in a single value
// let arr1 = [10,20,30,40,50,60,70,80];
// const a = arr1.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(a);                                                        //360

// const b = arr1.reduce((acc,max) =>{
//      return max > acc ? max : acc 
// },arr1[0]);
// console.log(b);                                                        //80

// const c = arr1.reduce((acc,min) =>{
//     return min < acc ? min : acc ; 
// },arr1[0]);
// console.log(c);                                                        //10



