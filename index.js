import { linkedList } from "./linked_list.js";
import { hashMap } from "./hashmap.js";
import { tree, arrayRandomizer, prettyPrint } from "./binarySearch.js";

import { linkedTest } from "./test_linked.js";
import { hashTest } from "./test_hashmap.js";

const test = tree(arrayRandomizer(20));
console.log(test.sortedArray);
prettyPrint(test.root);

console.log(test.find(3))