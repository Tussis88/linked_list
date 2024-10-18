import { linkedList } from "./linked_list.js";

linkedList.append("primo");
linkedList.append("secondo");
linkedList.append("terzo");

console.log(linkedList.toString());
console.log(linkedList.size());

linkedList.prepend("quarto");
linkedList.prepend("quinto");

console.log(linkedList.toString());
console.log(linkedList.size());