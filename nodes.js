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

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export { Node, HashNode, TreeNode }