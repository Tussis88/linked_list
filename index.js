import { linkedList } from "./linked_list.js";
import { linkedTest } from "./test_linked.js";
import { hashMap } from "./hashmap.js";

const test = hashMap();
// console.log(test.hash("prova"));

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green') //
test.set('grape', 'purple') //
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden') //

console.log("get:");
console.log(test.get("lion"));
console.log(test.get("broccoli"));
console.log(test.get("grape"));

console.log("has:");
console.log(test.has("apple"));
console.log(test.has("lion"));
console.log(test.has("broccoli"));

