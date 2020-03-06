//Solution
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]
const users1 = [{ name: 'Paul', age: 12 }, { name: 'Mary', age: 30 }, { name: 'John', age: 20 }, , { name: 'Emma', age: 12 }, { name: 'Claire', age: 35 }, { name: 'Jean', age: 12 }]


const concatenateArr = (arr1, arr2) => {
  const filteredArr2 = arr2.filter((user) => {
    return arr1.findIndex(usr => user.name === usr.name && user.age === usr.age) === -1;
  });
  return [...arr1, ...filteredArr2];
}


console.log(concatenateArr(users, users1));