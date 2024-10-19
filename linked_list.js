import Node from "./nodes.js";

const linkedList = function () {
    let currentHead = null;

    // create and append node at the end of linked list
    const append = (value, pointer = currentHead) => {
        if (!currentHead) {
            currentHead = new Node(value);
            return;
        }
        if (!pointer.nextNode) {
            pointer.nextNode = new Node(value);
            return;
        }
        return append(value, pointer.nextNode);
    };

    // create and prepend node at the beginning of linked list
    const prepend = (value) => {
        const item = new Node(value);
        if (!currentHead) {
            currentHead = item;
            return;
        };
        item.nextNode = currentHead;
        currentHead = item;
    };

    // returns the number of nodes in the linked list
    const size = (pointer = currentHead) => {
        if (!pointer) return 0;
        return 1 + size(pointer.nextNode);
    }

    // return a string with all the nodes of the linked list
    const toString = (pointer = currentHead) => {
        if (!pointer) return "null";
        return `(${pointer.value}) -> ` + toString(pointer.nextNode);
    };

    // returns the node at the beginning of the linked list
    const head = () => currentHead;

    // returns the node at the end of the linked list
    const tail = (pointer = currentHead) => {
        if (!currentHead) return null;
        if (!pointer.nextNode) return pointer;
        return tail(pointer.nextNode);

    };

    // return node at given position on the linked list
    const at = (value, pointer = currentHead, position = 0) => {
        if (isNaN(value) || value < 0 || value > size()) return null;
        if (!currentHead) return null;
        if (value === position) return pointer;
        return at(value, pointer.nextNode, position + 1);
    };

    // deletes the last node of  the linked list
    const pop = (pointer = currentHead) => {
        if (!currentHead) return null;
        if (!currentHead.nextNode) {
            currentHead = null;
            return;
        }
        if (!pointer.nextNode.nextNode) {
            pointer.nextNode = null;
            return;
        }
        return pop(pointer.nextNode);
    }

    // returns true if the linked list contains given value. Otherwise it returns false
    const contains = (value, pointer = currentHead) => {
        if (!pointer) return false;
        if (pointer.value === value) return true;
        return contains(value, pointer.nextNode);
    };

    // return the index of the node with the give value
    const find = (value, pointer = currentHead, position = 0) => {
        if (!pointer) return null;
        if (pointer.value === value) return position;
        if (!pointer.nextNode) return null;
        return find(value, pointer.nextNode, position + 1);
    };

    // insert a new node at a specific index
    const insertAt = (value, index, pointer = currentHead, position = 0) => {
        if (!pointer) return append(value);
        if (isNaN(index) || index < 0 || index > size()) return;
        if (index === 0) return prepend(value);
        if (index - 1 === position) {
            const item = new Node(value);
            item.nextNode = pointer.nextNode;
            pointer.nextNode = item;
            return;
        }
        return insertAt(value, index, pointer.nextNode, position + 1);
    }

    // removes node at chosen index
    const removeAt = (index, pointer = currentHead, position = 0) => {
        if (isNaN(index) || index < 0 || index >= size()) return null;
        if (!currentHead) return null;
        if (index === 0) {
            currentHead = pointer.nextNode;
            return;
        };
        if (index - 1 === position) {
            pointer.nextNode = pointer.nextNode ? pointer.nextNode.nextNode : pop();
            return;
        };
        return removeAt(index, pointer.nextNode, position + 1);
    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt };
};

export { linkedList }