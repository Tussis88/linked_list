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

    return { sortedArray, root };
}

export { arrayRandomizer, tree, prettyPrint }