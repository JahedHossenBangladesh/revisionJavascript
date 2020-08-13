const double = num => num * 2;
const give3 = () => 3;
const add = (x,y) => x + y;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum - diff;
    return result;
}

const result1 = double(3);
const result2 = give3();
const result3 = add(2,4);
const result4 = doMath(9,2);
console.log(result4);
console.log(result3);
console.log(result2);
console.log(result1);