const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }


  add(data) {
    this.rootTree = addFunction(this.rootTree, data);
    function addFunction(node, data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node
      }
      if (data < node.data){
        node.left = addFunction(node.left, data)
      }
      else{
        node.right = addFunction(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasOrNot(this.rootTree, data);
    function hasOrNot(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
     if (data < node.data){
       return hasOrNot(node.left, data);
     }
     else {
       return hasOrNot(node.right, data);
     }
    }
  }

  find(data) {
    return hasOrNot(this.rootTree, data);
    function hasOrNot(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
     if (data < node.data){
       return hasOrNot(node.left, data);
     }
     else {
       return hasOrNot(node.right, data);
     }
    }
  }

  remove(data) {
    this.rootTree = removeData(this.rootTree, data);
    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }


  max() {
    if (!this.rootTree) {
      return;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

}