https://www.w3resource.com/javascript-exercises/fundamental/index.php


//1
//Write a JavaScript function that accept two integers and display the larger
const giveHigherNumber = (num1, num2) => {
  //write function here
};

const res = giveHigherNumber(16, 89);
console.log(res)

//Solution
const giveHigherNumber = (num1, num2) => {
  return num1 >= num2 ? num1 : num2
};

const res = giveHigherNumber(16, 89);
console.log(res)





//2
//Check if number is odd or event
const oddOrEven2 = (num) => {
  //write function here
};

console.log(oddOrEven(16));
console.log(oddOrEven(89));


//Solution
const oddOrEven = (num) => {
  return num % 2 === 1 ? 'Odd' : 'Even'
};

//1 is true, 0 is false so this solution will work as well:
const oddOrEven2 = (num) => {
  return num % 2 ? 'Odd' : 'Even'
};

console.log(oddOrEven(16));
console.log(oddOrEven(89));





//3
//Create a function that find the average marks of the following students Then, this average is used to determine the corresponding grade.
//<60: E, <70: D, <80: C, <90: B, <100: A
const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
 
 //Write logic here

 console.log(avg, result)

//Expected output 81.6, B


//Solution
const students = [{name: 'David', mark: 80}, {name: 'Vinoth', mark: 77}, {name: 'Divya', mark: 88}, {name: 'Ishitha', mark: 95}, {name: 'Thomas', mark: 68}];
let sum = 0;

students.forEach((student) => {
  sum = sum + student.mark;
})

const avg = sum/students.length;
let result;

if (avg < 60) {
  result = 'E'
}else if(avg < 70) {
  result = 'D'
}else if(avg < 80) {
  result = 'C'
}else if (avg < 90) {
  result = 'B'
}else {
  result = 'A'
}
console.log(avg, result)


//4
//Extract out the values at the specified indexes from a specified array
const pullAtIndex = (arr, pullArr) => {
  let selected = [];
  //selected will contains the excluding value
  //remainArr will contains the remaining value
  let remainArr;

  //Write logic here

  return {array: remainArr, selected };
};

const arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pullAtIndex(arra1, [1, 3]));

const arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arra2, [4]));


//Output

{
  array: ["a", "c", "e", "f"],
  selected: ["b", "d"]
}

{
  array: [1, 2, 3, 4, 6, 7],
  selected: [5]
}

//Solution
const pullAtIndex = (arr, pullArr) => {
  let selected = [];
  let remainArr = arr
    .map((v, i) => (pullArr.includes(i) ? selected.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  return {array: remainArr, selected };
};

const arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pullAtIndex(arra1, [1, 3]));

const arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arra2, [4]));




//5
//Create a function that return the youngest player
const players = [{ name: 'John', age: 20 }, { name: 'Kevin', age: 16 }, { name: 'Ani', age: 19 }];

////Define getYoungestPlayer function here

console.log(getYoungestPlayer(players));



//Solution
const players = [{ name: 'John', age: 20 }, { name: 'Kevin', age: 16 }, { name: 'Ani', age: 19 }];

const getYoungestPlayer = (users) => {
  let youngestUser = users[0];
  users.forEach((user) => {
    youngestUser = youngestUser.age > user.age ? user : youngestUser;
  })
  return youngestUser;
}

console.log(getYoungestPlayer(players));




//6
//Returns true if the provided predicate function returns true for all elements in a collection, false otherwise

// Define all function here
console.log(all([4, 2, 3], x => x > 1)); 
console.log(all([4, 2, 3], x => x < 1));

//Solution
const all = (arr, fn) => arr.every(fn);
console.log(all([4, 2, 3], x => x > 1)); 
console.log(all([4, 2, 3], x => x < 1));


//7
//Split array into two array minors & majors
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]

const splitAge = (arr, age) => {
  let majors;
  let minors;

  // Write some logic here

  return {minors, majors };
};

console.log(splitAge(users,18).minors);
console.log(splitAge(users,18).majors);

//Solution
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]

const splitAge = (arr, age) => {
  let majors = [];
  let minors = arr
    .map((user, i) => (user.age >= age ? majors.push(user) : user))
    .filter((user, i) => user.age < age);
  return {minors, majors };
};

console.log(splitAge(users,18).minors);
console.log(splitAge(users,18).majors);



//8
//Concatenate 2 arrays not keeping double of element
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]
const users1 = [{ name: 'Paul', age: 12 }, { name: 'Mary', age: 30 }, { name: 'John', age: 20 }, , { name: 'Emma', age: 12 }, { name: 'Claire', age: 35 }, { name: 'Jean', age: 12 }]

//Solution
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]
const users1 = [{ name: 'Paul', age: 12 }, { name: 'Mary', age: 30 }, { name: 'John', age: 20 }, , { name: 'Emma', age: 12 }, { name: 'Claire', age: 35 }, { name: 'Jean', age: 12 }]

const concatenateArr = (arr1, arr2) => {
  // Write logic here
}


console.log(concatenateArr(users, users1));

const concatenateArr = (arr1, arr2) => {
  const filteredArr2 = arr2.filter((user) => {
    return arr1.findIndex(usr => user.name === usr.name && user.age === usr.age) === -1;
  });
  return [...arr1, ...filteredArr2];
}


console.log(concatenateArr(users, users1));




//9
//Order users by increasing  age
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]

//Create function here

console.log(sortByName(users)); 


//Solution
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]

const sortByName = (arr) => {
  return arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
}

console.log(sortByName(users)); 

