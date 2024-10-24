class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode
    }

}

class HashNode {
    constructor(key, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

export { Node, HashNode }