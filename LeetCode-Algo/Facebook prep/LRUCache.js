s // Using ES6 Map

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1; // if key doesn't exist, return -1
        }
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value); //remove and put key/value back into hash to move this key to the back (most recently used)
        return value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            //remove it and add it back with new value
            this.map.delete(key);
            this.map.set(key, value);
        } else if (this.map.size == this.capacity) {
            //remove the first key
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
            this.map.set(key, value);
        } else { //this map has extra capacity
            this.map.set(key,value)
        }
    }


}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Using Object and Doubly linked list

// class Node {
//   constructor(key, val) {
//     this.key = key;
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(key, val) {
//     const newNode = new Node(key, val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return newNode;
//   }

//   remove(node) {
//     if (!node.next && !node.prev) {
//       // if there's only 1 node
//       this.head === null;
//       this.tail === null;
//     } else if (!node.next) {
//       // if the node is tail node
//       this.tail = node.prev;
//       this.tail.next = null;
//     } else if (!node.prev) {
//       // if the node is head node
//       this.head = node.next;
//       this.head.prev = null;
//     } else {
//       // if the node is in between
//       const prev = node.prev;
//       const next = node.next;
//       prev.next = next;
//       next.prev = prev;
//     }
//     this.length--;
//   }
// }

// class LRUCache {
//   constructor(capacity) {
//     this.DLL = new DoublyLinkedList();
//     this.map = {};
//     this.capacity = capacity;
//   }

//   get(key) {
//     if (!this.map[key]) return -1;
//     const value = this.map[key].val;
//     this.DLL.remove(this.map[key]);
//     this.map[key] = this.DLL.push(key, value);
//     return value;
//   }

//   put(key, value) {
//     if (this.map[key]) this.DLL.remove(this.map[key]);
//     this.map[key] = this.DLL.push(key, value);
//     if (this.DLL.length > this.capacity) {
//       const currKey = this.DLL.head.key;
//       delete this.map[currKey];
//       this.DLL.remove(this.DLL.head);
//     }
//   }
// }
