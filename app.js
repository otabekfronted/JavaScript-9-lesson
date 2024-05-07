// masala 1
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];
// function getNamesByGrade(students, grade) {
//     return students
//         .map((students) => {
//             if (students.percent >= 85) {
//                 return {
//                     name: students.name,
//                     percent: students.percent,
//                     grade: 5,
//                 };
//             } else if (students.percent >= 70 && students.percent < 85) {
//                 return {
//                     name: students.name,
//                     percent: students.percent,
//                     grade: 4,
//                 };
//             } else {
//                 return {
//                     name: students.name,
//                     percent: students.percent,
//                     grade: 3,
//                 };
//             }
//         })
//         .filter((student) => {
//             return student.grade == grade;
//         })
//         .map((student) => {
//             return student.name;
//         });
// }

// masala 2
// const result = getNamesByGrade(students, 3);
// console.log(result);

// const animals = [
//     "dog",
//     "chicken",
//     "cat",
//     "dog",
//     "chicken",
//     "chicken",
//     "rabbit",
// ];

// const allAnimal = animals.flatMap((animal) => {
//     return animal;
// });
// console.log(allAnimal);

// const sumAnimal = allAnimal.reduce((acc, curVal) => {
//     if (!acc[curVal]) {
//         acc[curVal] = 1;
//     } else {
//         acc[curVal] += 1;
//     }
//     return acc;
// }, {});
// console.log(sumAnimal);

// masala 3
// let number = [1, 2, 3, 4, 5];
// let kvadrat = number.map((num) => {
//     return num ** 2;
// });
// console.log(kvadrat);

// masala 4
// let numbers = [1, -4, 12, 0, -3, 29, -150, 23];

// const filter = numbers.filter((number) => {
//     if (number > 0) {
//         return number;
//     }
// });
// const musbat = filter.reduce((num1, num2) => {
//     return (num1 += num2);
// });
// console.log(musbat);

// masala 5
// const string = "George Raymond Richard Martin";

// const toUppercaseJoin = string
//     .split(" ")
//     .map((str) => {
//         return str[0];
//     })
//     .join("");

// console.log(toUppercaseJoin);
// masala 6
// let Input = [
//     { name: "John", age: 13 },
//     { name: "Mark", age: 56 },
//     { name: "Rachel", age: 45 },
//     { name: "Nate", age: 67 },
//     { name: "Jeniffer", age: 65 },
// ];
// let result = Input.sort((young, old) => {
//     return young.age - old.age;
// });
// let javob = result[result.length - 1].age - result[0].age;
// console.log(javob);

// masala 7
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const even = [];
// const odd = [];
// const oddEeven = numbers.filter((number) => {
//     if (number % 2 == 0) {
//         even.push(number);
//     } else {
//         odd.push(number);
//     }
// });
// console.log(even);
// console.log(odd);

// masala 8
// let numbers = [1, 2, 3, 4, 3, 8, 6, 5, 4];
// const removeNumber = numbers.reduce((num1, num2) => {
//     if (num1[num2]) {
//         num1[num2] = 1;
//     } else {
//         num1[num2] += 1;
//     }
//     return num1;
// }, []);
// console.log(removeNumber);

// const array = [3, 7, 2, 5, 2, 8, 2, 9, 4, 6, 3, 7];
// const result = array.reduce((num1, num2, num3) => {
//     if (num1.indexOf(num2) === num3) {
//         num2.push(num2);
//     }
//     return num1;
// }, []);

// console.log(result); // Output: [3, 7, 2, 5, 8, 9, 4, 6]

// masala 9
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const pro = [...products].sort((product, prod) => {
//     return product.id - prod.id;
// });
// console.log(pro);

// masala 10
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const pro = [...products].sort((product, prod) => {
//     return prod.rating - product.rating;
// });
// console.log(pro);
// console.log(pro[0]);

// masala 11
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const umumiySumma = products.reduce((a, b) => {
//     return a + b.price;
// });
// console.log(umumiySumma);

// masala 12

// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const d = products
//     .map((s) => {
//         return s.price;
//     })
//     .reduce((a, b) => {
//         return a + b;
//     });
// console.log(d);

// masala 13
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const d = products.map((s) => {
//     return s.name;
// });
// console.log(d);

// masala 14
// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const nameChiqarish = products.find((search) => {
//     if (search.id === 5) {
//         console.log(`ID 5 mahsulotning nomi ${search.name}`);
//     }
//     // Domla shunda else ni ishlatsam takrorlanib chiqib qolyabdi
//     //  else {
//     //     console.log(`ID 5 mahsuloti topilmadi`);
//     // }
// });

// masala 15
// let products = [
//     {
//         id: 3,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];

// const nameChiqarish = products.filter((search) => {
//     if (search.id === 4) {
//         return search.remove;
//     }
//     return search;
// });
// console.log(nameChiqarish);

// masala 16
// function isOnlyLetters(text) {
//     const lettersSmall = "abcdefghijklmnopqrstuvwxyz";
//     const letterBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const letters = text.split("");
//     return letters.every(
//         (char) => lettersSmall.includes(char) || letterBig.includes(char)
//     );
// }
// const texts = "HelloWorld";
// console.log(isOnlyLetters(texts));

// masala 17
// function getTruthyFalsy(truthyFalsy) {
//     let result = {};
//     let truthy = truthyFalsy.filter((value) => {
//         if (value == true) {
//             result += value;
//         }
//     });

//     console.log(truthy);
// }

// let truthyFalsy = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// console.log(getTruthyFalsy(truthyFalsy));

// // masala 18
// let str = "Men Abdulaziz Programmerman. Otabek Frontend Dasturchi.";

// let word = str.split(" ").map((words) => {
//     return words.length;
// });

// console.log(word);

// masala 19
// let input = "Men Abdulaziz Programmerman";
// let probel = input.split("").some((pro) => pro == " ");
// console.log(probel);

// masala 20

// let obj = { a: 2, b: 5, c: 7 };
// let result = Object.entries(obj).map((ob) => ob.join(""));
// console.log(result);

// masala 21
// function digitSum(number) {
//     if (number < 10) {
//         return number;
//     } else {
//         return number % 10 + digitSum(Math.floor(number / 10));
//     }
// }

// const number = 12345;
// const result = digitSum(number);
// console.log("Raqamlar yig'indisi:", result);

// masala 22
// const pupils = [
//     {
//         name: "Elbek",
//         protcent: 95,
//     },
//     {
//         name: "Zafar",
//         protcent: 78,
//     },
//     {
//         name: "Aziz",
//         protcent: 83,
//     },
//     {
//         name: "Jasur",
//         protcent: 88,
//     },
//     {
//         name: "Bobur",
//         protcent: 66,
//     },
//     {
//         name: "Kamron",
//         protcent: 75,
//     },
// ];
// masala 22
// let obj = pupils.reduce((a, b) => {
//     return a + b.protcent;
// }, 0);
// console.log((obj / pupils.length).toFixed(1));

// masala 23
// const pupils = [
//     {
//         name: "Elbek",
//         protcent: 95,
//     },
//     {
//         name: "Zafar",
//         protcent: 78,
//     },
//     {
//         name: "Aziz",
//         protcent: 83,
//     },
//     {
//         name: "Jasur",
//         protcent: 88,
//     },
//     {
//         name: "Bobur",
//         protcent: 66,
//     },
//     {
//         name: "Kamron",
//         protcent: 75,
//     },
// ];

// let result = pupils.map((baho) => {
//     if (baho.protcent > 90) {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 5,
//         };
//     } else if (baho.protcent <= 90 && baho.protcent > 80) {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 4,
//         };
//     } else if (baho.protcent <= 80 && baho.protcent > 70) {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 3,
//         };
//     } else {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 2,
//         };
//     }
// });
// console.log(result);
// masala 24
// const pupils = [
//     {
//         name: "Elbek",
//         protcent: 95,
//     },
//     {
//         name: "Zafar",
//         protcent: 78,
//     },
//     {
//         name: "Aziz",
//         protcent: 83,
//     },
//     {
//         name: "Jasur",
//         protcent: 88,
//     },
//     {
//         name: "Bobur",
//         protcent: 66,
//     },
//     {
//         name: "Kamron",
//         protcent: 75,
//     },
// ];

// let result = pupils.map((baho) => {
//     if (baho.protcent > 70) {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 5,
//             isPased: true,
//         };
//     } else {
//         return {
//             name: baho.name,
//             protcent: baho.protcent,
//             grade: 2,
//             isPased: false,
//         };
//     }
// });
// console.log(result);

// masala 25
const pupils = [
    {
        name: "Elbek",
        protcent: 95,
    },
    {
        name: "Zafar",
        protcent: 78,
    },
    {
        name: "Aziz",
        protcent: 83,
    },
    {
        name: "Jasur",
        protcent: 88,
    },
    {
        name: "Bobur",
        protcent: 66,
    },
    {
        name: "Kamron",
        protcent: 75,
    },
];
let result = pupils
    .map((baho) => {
        if (baho.protcent > 70) {
            return {
                name: baho.name,
                protcent: baho.protcent,
                grade: 5,
                isPased: true,
            };
        } else {
            return {
                name: baho.name,
                protcent: baho.protcent,
                grade: 2,
                isPased: false,
            };
        }
    })
    .reduce((a, b) => {
        return a + b.isPased;
    }, 0);
let yiqilgan = pupils.length - result;
console.log(`${result} ta o'tgan ${yiqilgan} ta o'taolmagan`);
