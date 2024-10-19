import { linkedList } from "./linked_list.js";

const list = linkedList();

list.append("primo");
list.append("secondo");
list.append("terzo");

console.log(list.toString());
console.log(list.size());

list.prepend("quarto");
list.prepend("quinto");

console.log(list.toString());
console.log(list.size());

console.log("head and  tail");
console.log(list.head());
console.log(list.tail());

console.log("contains");
console.log(list.contains("quarto"));
console.log(list.contains("broccoli"));
console.log(list.contains("quinto"));
console.log(list.contains("terzo"));

console.log("find");
console.log(list.find("quarto"));
console.log(list.find("broccoli"));
console.log(list.find("quinto"));
console.log(list.find("terzo"));

console.log("at");
console.log(list.at(0));
console.log(list.at(3));
console.log(list.at(4));
console.log(list.at(7));
console.log(list.at(-1));
console.log(list.at("broccoli"));

console.log("pop");
list.pop();
console.log(list.toString());
list.pop();
console.log(list.toString());

console.log("insertAt");
list.insertAt("sesto", 3);
console.log(list.toString());
list.insertAt("settimo", 1);
console.log(list.toString());
list.insertAt("ottavo", 4);
console.log(list.toString());
list.insertAt("broccolo", 7);
console.log(list.toString());
list.insertAt("broccolo", -1);
console.log(list.toString());
list.insertAt("nono", 0);
console.log(list.toString());

console.log("removeAt");
list.removeAt(0);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());