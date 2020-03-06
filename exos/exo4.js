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