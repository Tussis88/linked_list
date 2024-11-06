import { linkedList } from "./linked_list.js";
import { hashMap } from "./hashmap.js";
import { tree, arrayRandomizer, prettyPrint } from "./binarySearch.js";

import { linkedTest } from "./test_linked.js";
import { hashTest } from "./test_hashmap.js";

const test = tree(arrayRandomizer(20));


console.groupCollapsed("basic test");
console.log(test.sortedArray);
prettyPrint(test.root);
console.groupEnd();

console.groupCollapsed("insert");
test.insert(125);
prettyPrint(test.root);
test.insert(27);
prettyPrint(test.root);
console.groupEnd();

console.groupCollapsed("remove");
test.remove(27);
prettyPrint(test.root);
test.remove(55);
prettyPrint(test.root);
console.groupEnd();

console.groupCollapsed("find");
console.log(test.find(125));
console.log(test.find(12));
console.groupEnd();

console.groupCollapsed("levelOrder");
console.log(test.levelOrder((node) => node.data * 10));
// console.log(test.levelOrder("gne"));
console.groupEnd();

console.groupCollapsed("inOrder, preOrder, postOrder");
console.log(test.inOrder((node) => node.data * 10));
console.log(test.preOrder((node) => node.data * 10));
console.log(test.postOrder((node) => node.data));
console.groupEnd();

console.groupCollapsed("height");
console.log(test.height());
console.groupEnd();

console.groupCollapsed("depth");
console.log(test.depth(125));
console.groupEnd();

console.groupCollapsed("rebalance");
test.insert(126);
test.insert(127);
test.insert(129);
test.insert(130);
prettyPrint(test.root);
test.rebalance();
prettyPrint(test.root);
console.groupEnd();
