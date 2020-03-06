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

//Solution using reduce
const players = [{ name: 'John', age: 20 }, { name: 'Kevin', age: 16 }, { name: 'Ani', age: 19 }];

const reducer = (acc, curr) => acc.age > curr.age ? curr : acc;

const getYoungestPlayer = (users) => {
  return users.reduce(reducer, users[0])
}

console.log(getYoungestPlayer(players));

//Shorter solution using reduce
const players = [{ name: 'John', age: 20 }, { name: 'Kevin', age: 16 }, { name: 'Ani', age: 19 }];

const getYoungestPlayer = (users) => users.reduce((acc, curr) => acc.age > curr.age ? curr : acc, users[0]);

console.log(getYoungestPlayer(players));