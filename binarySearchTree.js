/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //-----------Tuesday--------//
  /**
   * Determines if this tree is empty.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (this.isEmpty()) return null;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    if (current.left === null) {
      return current.data;
    }
    return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (this.isEmpty()) return null;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    if (current.right === null) {
      return current.data;
    }
    return this.maxRecursive(current.right);
  }

  //-----------Wednesday--------//

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {
    if (this.isEmpty()) return false;

    let runner = this.root;
    while (runner) {
      if ( runner.data == searchVal){
        return true;
      }
      if (runner.data > searchVal) {
        runner = runner.left;
        // console.log(runner.data)
      } else if (runner.data < searchVal) {
        runner = runner.right;
        // console.log(runner.data)
      }
    }
    return false;
  }
  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (this.isEmpty()) return false;
    if (current === null) return false;
    if (current.data === searchVal){
      return true;
    }
    if (current.data > searchVal) {
      return this.containsRecursive(searchVal, current.left);
    } else if (current.data < searchVal) {
      return this.containsRecursive(searchVal, current.right);
    }
  }
  ////! TUESDAY //////////////////
  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
  range(startNode = this.root) {
    let max = this.max();
    let min = this.min();
    if (this.isEmpty()) return false;
    return (max - min);

  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

console.log(threeLevelTree.containsRecursive(15));
console.log(threeLevelTree.containsRecursive(42));
console.log(threeLevelTree.containsRecursive(6));
console.log(threeLevelTree.containsRecursive(13));
console.log(threeLevelTree.containsRecursive(140));


console.log(threeLevelTree.range());
// console.log(threeLevelTree.range(140));
/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);

const bst = new BinarySearchTree();
bst.root = new BSTNode(34);
bst.root.left = new BSTNode(24);
bst.root.left.right = new BSTNode(27);
bst.root.left.left = new BSTNode(14);
bst.root.right = new BSTNode(42);
// console.log(bst.min())
// console.log(bst.max());
// console.log(bst.isEmpty())

