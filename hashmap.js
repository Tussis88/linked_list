import { HashNode } from "./nodes.js";
import { linkedList } from "./linked_list.js";

const limitationSnippet = (index) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const hashMap = function () {

    let capacity = 16;
    let loadFactor = 0.75;
    const bucketArray = new Array(capacity).fill(null);
    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    const set = (key, value) => { }
    return { hash }
}


export { hashMap }