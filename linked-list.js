/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /**print(): print all nodes in list */
  print() {
    let currentNode = this.head;
    if (this.length === 1) return console.log(currentNode.val);
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    // console.log(newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let newTail;
    let lastItem;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        lastItem = currentNode.next;
        lastItem = lastItem.val;
        console.log(lastItem)
        newTail = currentNode;
        newTail.next = null;
      }
      currentNode = currentNode.next;
    }
    if (this.head === this.tail) {
      lastItem = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return lastItem;
    } else {
      this.tail = newTail;
      this.length -= 1;
      return lastItem;
    }
  }


  /** shift(): return & remove first item. */

  shift() {
    try {
      if (this.length === 0) throw new error;
      let newHead;
      let oldHead;
      if (this.length === 1) {
        oldHead = this.head;
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return oldHead.val;
      }
      oldHead = this.head;
      newHead = this.head.next;
      this.head = newHead;
      this.length -= 1;
      return oldHead.val;
    } catch (e) {
      return console.log('List is empty - nothing to shift')
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      //if only one item in list or idx is first node:
      if (currentNode.next === null || idx === 0) {
        return currentNode.val;
      }
      // console.log(i, currentNode.val);
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) return 'Invalid index';
    if (idx === 0) {
      this.head.val = val;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
      currentNode.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try {
      if (idx > this.length) throw new error;
      const newNode = new Node(val);
      let preNode;
      let postNode;
      if (!this.head) {
        this.head = newNode;
      }
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      preNode = currentNode;
      postNode = currentNode.next;
      preNode.next = newNode;
      newNode.next = postNode;
      this.length += 1;
      console.log('preNode', preNode);
      console.log('postNode', postNode);
      console.log('newNode', newNode)
      idx === this.length - 1 ? this.tail = newNode : null;
    } catch (error) {
      console.log('Invalid index');
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) return console.log('Invalid Index');
    if (!this.head) return console.log('Cannot perform operation on empty list');
    let currentNode = this.head;
    let preNode;
    let postNode;
    let deleteNode;
    if (this.length === 1 && idx === 0) {
      deleteNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return deleteNode;
    }
    if (this.length === 2) {
      this.tail = this.head;
      this.lenght -= 1;
      return this.head;
    }
    if (idx === 0) {
      postNode = this.head.next;
      this.head = postNode;
    }
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }
    preNode = currentNode;
    deleteNode = currentNode.next;
    postNode = deleteNode.next;
    preNode.next = postNode;
    this.length -= 1;
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let vals = []
    if (!this.length) return 0;
    while (currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return vals.reduce((a, b) => (a + b), 0) / vals.length;
  }
}

module.exports = LinkedList;
