const students = [
    {id: 21, name:"Omor Shani"},
    {id: 31, name:"Manna"},
    {id: 51, name:"Shani"},
    {id: 61, name:"Omor "}
]
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     // console.log(element);
//     const emptyarray = [];
  
//   const name =emptyarray.push(element);
// console.log(name);
    
// }
const name1 = students.map(z => z.name);
const idall = students.map( z => z.id);
const filter = students.filter( z => z.id < 40);
console.log(filter);
console.log(idall);
console.log(name1);