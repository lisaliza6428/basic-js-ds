const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {

  myStack = [];
  
  push(element) {
    return this.myStack.push(element);
    
  }

  pop() {
    return this.myStack.pop();
  }

  peek() {
    return this.myStack[this.myStack.length - 1];
  }
}
