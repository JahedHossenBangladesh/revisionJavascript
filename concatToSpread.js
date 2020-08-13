const schoolFriend =["jon","Ron","Rin"];
const universityFriend= ["Kuddus","Kalam","Jamal"];
const allFriend = schoolFriend.concat(universityFriend);
// I can do the same thing with spread operator

const concatToSpread =[...schoolFriend, ...universityFriend];
// it give array value

console.log(allFriend);
allFriend.reverse();
console.log(allFriend)
allFriend.sort()
console.log(allFriend);
console.log(concatToSpread);
const Array = [1,2,3,4,5,6];
console.log(...Array);