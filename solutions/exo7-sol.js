//Solution
const users = [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }, { name: 'Emma', age: 12 }, { name: 'Laure', age: 35 }, { name: 'Louise', age: 12 }]

const sortByName = (arr) => {
  return arr.sort((a,b) => a.name > b.name ? 1 : -1);
}

console.log(sortByName(users));