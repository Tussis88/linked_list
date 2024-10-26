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

        limitationSnippet(index, bucketArray);

        if (!bucketArray[index]) {
            bucketArray[index] = linkedList();
            bucketArray[index].append(item);
            size++;
        } else if (!bucketArray[index].contains(item)) {
            bucketArray[index].append(item);
            size++
        } else {
            let linkedIndex = bucketArray[index].find(item);
            bucketArray[index].removeAt(linkedIndex);
            bucketArray[index].insertAt(item, linkedIndex);
        }
        console.log(bucketArray);
        console.log(bucketArray[index].toString())
        if (size / bucketArray.length > loadFactor) resize();
    }

    const resize = () => {
        const tempBucket = bucketArray;
        capacity = capacity * 2;
        bucketArray = new Array(capacity).fill(null);
        tempBucket.forEach((bucket) => {
            if (bucket) {
                let current = bucket.head();
                while (current) {
                    console.log(current);
                    set(current.value.key, current.value.value);
                    current = current.next;
                }
            }
        })
    }

    return { hash, set }
}


export { hashMap }