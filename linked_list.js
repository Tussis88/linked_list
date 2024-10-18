import Node from "./nodes.js";

const linkedList = (function () {
    let head = null;

    const append = (value) => {
        const item = new Node(value);
        console.log(item)
        if (!head) {
            head = item;
            return;
        };
        let pointer = head;
        while (pointer) {
            if (!pointer.nextNode) {
                pointer.nextNode = item;
                return;
            }
            pointer = pointer.nextNode;
        };
    }

    const toString = () => {
        if (!head) {
            return "the linked list is empty";
        }
        let string = "";
        let pointer = head;
        while (pointer) {
            string = string + `(${pointer.value}) -> `;
            pointer = pointer.nextNode;
        };
        return string + "null";
    }

    return { append, toString };
})();

export { linkedList }