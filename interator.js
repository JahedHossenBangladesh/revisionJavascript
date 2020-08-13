//Iterator
function fruitsIterator(values){
    let nextIndex = 0;
    return{
        next: function(){
            if (nextIndex < values.length){
                return {value: values[nextIndex++],
                done: false
                }
            }
            else{
               return { done: true
               }
            }
        }
    }
}



const fruits = ["Apples","Grapes","Oranges","coconut"];
console.log("My array is", fruits);
const fruitsAll = fruitsIterator(fruits);
console.log(fruitsAll.next());
console.log(fruitsAll.next());
console.log(fruitsAll.next());
console.log(fruitsAll.next());
console.log(fruitsAll.next());