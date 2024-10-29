import { Node } from "./nodes.js";
import { linkedList } from "./linked_list.js";

const limitationSnippet = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const hashMap = function () {

    let capacity = 8;
    const loadFactor = 0.75;
    let bucketArray = new Array(capacity).fill(null);
    let size = 0;

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % capacity;
    }

    const set = (key, value) => {
        const item = { key: key, value: value };
        const index = hash(key);
        // console.log(item, { index });

        limitationSnippet(index, bucketArray);

        if (!bucketArray[index]) {
            bucketArray[index] = linkedList();
            size++;
        } else if (!bucketArray[index].contains(item)) {
            size++
        } else {
            let linkedIndex = bucketArray[index].find(item);
            bucketArray[index].removeAt(linkedIndex);
        }
        bucketArray[index].append(item);
        if (size / bucketArray.length > loadFactor) resize();
    }

    const resize = () => {
        const tempBucket = bucketArray;
        capacity = capacity * 2;
        bucketArray = new Array(capacity).fill(null);
        size = 0;
        tempBucket.forEach((bucket) => {
            if (bucket) {
                let current = bucket.head();
                while (current) {

                    const { key, value } = current.value
                    set(key, value);
                    current = current.nextNode;
                }
            }
        })
    };

    const get = (key) => {
        const hashedKey = hash(key);
        // console.log({ hashedKey });
        if (!bucketArray[hashedKey]) return null;
        let current = bucketArray[hashedKey].head();
        while (current) {
            if (current.value.key === key) return current.value;
            current = current.nextNode;
        };
        return null;
    };

    const has = (key) => {
        return get(key) !== null;
    };

    const remove = (key) => {
        const itemToDelete = get(key);
        if (!itemToDelete) return false;

        for (let bucket of bucketArray) {
            if (bucket) {
                const index = bucket.find(itemToDelete);
                if (index !== null) {
                    bucket.removeAt(index);
                    size--;
                    return true;
                }
            }
        }
    };

    const length = () => size;

    const clear = () => {
        capacity = 8;
        bucketArray = new Array(capacity).fill(null);
        size = 0;
    };

    const keys = () => {
        const keysArray = [];
        bucketArray.forEach(bucket => {
            if (bucket && bucket.head()) {
                let current = bucket.head();
                while (current) {
                    keysArray.push(current.value.key);
                    current = current.nextNode;
                };
            };
        });
        return keysArray;
    };

    const values = () => {
        const keysArray = [];
        bucketArray.forEach(bucket => {
            if (bucket && bucket.head()) {
                let current = bucket.head();
                while (current) {
                    keysArray.push(current.value.value);
                    current = current.nextNode;
                };
            };
        });
        return keysArray;
    };

    const entries = () => {
        const keysArray = [];
        bucketArray.forEach(bucket => {
            if (bucket && bucket.head()) {
                let current = bucket.head();
                while (current) {
                    keysArray.push(current.value);
                    current = current.nextNode;
                };
            };
        });
        return keysArray;
    };
    return { set, get, has, remove, length, clear, keys, values, entries }
}


export { hashMap }