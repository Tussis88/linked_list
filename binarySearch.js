import { TreeNode } from "./nodes.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const arrayRandomizer = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const tree = (array) => {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    // create the binary tree and returns the rootNode
    const buildTree = (arrayToTree) => {
        if (arrayToTree.length === 0) return null;

        const midPoint = Math.floor(arrayToTree.length / 2);
        const rootNode = new TreeNode(arrayToTree[midPoint]);

        rootNode.left = buildTree(arrayToTree.slice(0, midPoint));
        rootNode.right = buildTree(arrayToTree.slice(midPoint + 1));

        return rootNode;
    }


    let root = buildTree(sortedArray);


    // insert a new Node in the tree
    const insert = (value, currentNode = root) => {
        if (currentNode === null) return new TreeNode(value);
        if (currentNode.data === value) return currentNode;


        if (currentNode.data < value) {
            currentNode.right = insert(value, currentNode.right);
        } else {
            currentNode.left = insert(value, currentNode.left);
        }
        return currentNode;
    };

    // remove a node from the tree
    const remove = (value, currentNode = root) => {
        if (currentNode === null) return currentNode;

        if (currentNode.data === value) {
            // rimuovi nodo
            if (currentNode.left && currentNode.right) {
                let successorNode = currentNode;
                while (successorNode.left) {
                    successorNode = successorNode.left;
                };
                currentNode.data = successorNode.data;
                currentNode.right = remove(successorNode.value, currentNode.right);
                return currentNode;
            } else {
                const replacementNode = currentNode.right || currentNode.left;
                currentNode = null;
                return replacementNode;
            }
        } else if (currentNode.data < value) {
            currentNode.right = remove(value, currentNode.right);
        } else {
            currentNode.left = remove(value, currentNode.left);
        }
        return currentNode;
    };

    // find a value and return it's node
    const find = (value, currentNode = root) => {
        if (currentNode === null || currentNode.data === value) return currentNode;

        if (currentNode.data < value) {
            return find(value, currentNode.right);
        } else {
            return find(value, currentNode.left);
        }
    };

    // traverse the tree in breadth-first level order and call the callback on each node as it traverses
    const levelOrder = (callback) => {
        if (typeof callback !== "function") throw new Error("levelOrder must be used with functions");

        const queue = [root];
        const levelOrderList = [];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            levelOrderList.push(callback(currentNode));

            const enqueueList = [
                currentNode.left,
                currentNode.right
            ].filter((value) => value);

            queue.push(...enqueueList);
        }
        if (levelOrderList.length > 0) return levelOrderList;
    };


    const preOrder = (callback, currentNode = root, orderList = []) => {
        if (typeof callback !== "function") throw new Error("preOrder must be used with functions");
        if (currentNode === null) return;

        orderList.push(callback(currentNode));
        preOrder(callback, currentNode.left, orderList);
        preOrder(callback, currentNode.right, orderList);

        if (orderList.length > 0) return orderList;
    };

    const inOrder = (callback, currentNode = root, orderList = []) => {
        if (typeof callback !== "function") throw new Error("inOrder must be used with functions");
        if (currentNode === null) return;

        inOrder(callback, currentNode.left, orderList);
        orderList.push(callback(currentNode));
        inOrder(callback, currentNode.right, orderList);

        if (orderList.length > 0) return orderList;
    };

    const postOrder = (callback, currentNode = root, orderList = []) => {
        if (typeof callback !== "function") throw new Error("postOrder must be used with functions");
        if (currentNode === null) return;

        postOrder(callback, currentNode.left, orderList);
        postOrder(callback, currentNode.right, orderList);
        orderList.push(callback(currentNode));

        if (orderList.length > 0) return orderList;
    };

    // returns the given node’s height
    const height = (currentNode = root) => {
        if (currentNode === null) return 0;

        const left = height(currentNode.left);
        const right = height(currentNode.right);

        return Math.max(left, right) + 1;
    };

    // returns the given node’s depth
    const depth = (value, currentNode = root, counter = 0) => {
        if (currentNode === null) return;
        if (currentNode.data === value) return counter;

        if (currentNode.data < value) {
            return depth(value, currentNode.right, counter + 1);
        } else {
            return depth(value, currentNode.left, counter + 1);
        }
    };

    const isBalanced = () => {

    }

    const rebalance = () => {
        const sortedRebalancedArray = [...new Set(levelOrder((node) => node.data))].sort((a, b) => a - b);
        root = buildTree(sortedRebalancedArray);
    }

    return { sortedArray, root, insert, remove, find, levelOrder, inOrder, preOrder, postOrder, height, depth, rebalance };
}

export { arrayRandomizer, tree, prettyPrint }