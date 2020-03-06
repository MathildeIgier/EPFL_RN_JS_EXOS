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
}else if (avg<100){
  result = 'A'
}else {
  result = 'error'
}
console.log(avg, result)

//Solution using reduce
const students = [{name: 'David', mark: 80}, {name: 'Vinoth', mark: 77}, {name: 'Divya', mark: 88}, {name: 'Ishitha', mark: 95}, {name: 'Thomas', mark: 68}];

const reducer = (accumulator, currentValue) => accumulator + currentValue.mark;

const sum = students.reduce(reducer,0)

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
}else if (avg<100){
  result = 'A'
}else {
  result = 'error'
}
console.log(avg, result)

//Shorter solution using reduce
const students = [{name: 'David', mark: 80}, {name: 'Vinoth', mark: 77}, {name: 'Divya', mark: 88}, {name: 'Ishitha', mark: 95}, {name: 'Thomas', mark: 68}];

const avg = (students.reduce((acc, curr) => acc + curr.mark,0))/students.length;
let result;

if (avg < 60) {
  result = 'E'
}else if(avg < 70) {
  result = 'D'
}else if(avg < 80) {
  result = 'C'
}else if (avg < 90) {
  result = 'B'
}else if (avg<100){
  result = 'A'
}else {
  result = 'error'
}
console.log(avg, result)