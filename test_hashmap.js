import { hashMap } from "./hashmap.js";

export function hashTest() {
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

    console.log("remove:");
    console.log(test.remove("lion"));
    console.log(test.get("lion"));
    console.log(test.remove("apple"));
    console.log(test.get("apple"));
    console.log(test.remove("broccoli"));

    console.log("size:")
    console.log(test.length());
    test.set('apple', 'red');
    test.set('lion', 'golden');
    console.log(test.length());

    console.log("keys, values, entries:")
    console.log(test.keys());
    console.log(test.values());
    console.log(test.entries());
}