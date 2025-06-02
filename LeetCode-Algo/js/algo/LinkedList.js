class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // Create new node with our data
    let newNode = new Node(data);

    // if head is null
    if (this.head === null) {
      this.head = newNode; // insert our new node at head
      return;
    }

    // Set newNode's next to current head
    newNode.next = this.head;

    // Set current head equal to this new head
    this.head = newNode;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // if linked list is empty (head is null)
    if (this.head === null) {
      return null;
    }

    let current = this.head;

    // while we are not at the tail
    while (current.next !== null) {
      current = current.next;
    }

    // we are at the tail
    return current;
  }

  insertLast(data) {
    // if linked list is empty (head is null)
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    // Else start at head and iterate towards end of linkedlist
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    // set current tail's next node to our new node
    current.next = new Node(data);
  }

  size() {
    // if linked list is empty (head is null)
    if (this.head === null) {
      return 0;
    }

    let current = this.head;
    let count = 1;
    while (current.next !== null) {
      current = current.next;
      count++;
    }

    return count;
  }

  clear() {
    this.head = null;
  }

  deleteValue(data) {
    //if head is null
    if (this.head === null) {
      return;
    }
    //if head matches our data
    if (this.head === data) {
      this.head = this.head.next;
    }

    //else walk through the list
    let current = this.head;

    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  removeFirst() {
    //if head is null
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    //if head is null
    if (this.head === null) {
      return;
    }

    //if head.next is empty
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
}
