import Node from "./nodes.js";

const linkedList = (function () {
    let head = null;

    // create and append node at the end of linked list
    const append = (value) => {
        const item = new Node(value);
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

    // create and prepend node at the beginning of linked list
    const prepend = (value) => {
        const item = new Node(value);
        if (!head) {
            head = item;
            return;
        };
        item.nextNode = head;
        head = item;
    };

    // returns the number of nodes in the linked list
    const size = (pointer = head) => {
        if (!pointer) return 0;
        return 1 + size(pointer.nextNode);
    }

    // return a string with all the nodes of the linked list
    const toString = (pointer = head) => {
        if (!pointer) return "null";
        return `(${pointer.value}) -> ` + toString(pointer.nextNode);
    };

    return { append, prepend, size, toString };
})();

export { linkedList }