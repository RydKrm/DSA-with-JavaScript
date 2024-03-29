/* 
  * create a tree node
  * Each node contain a value field and an array to store the child node address
  * also a node has addChild() method to add a child node 
*/

class TreeNode{
    // * for creating new Node
    constructor(value){
        this.value = value,
        this.child = []
    };

    // * new child add method
    addChild(treeNode){
        this.child.push(treeNode);
    }
}

// * Traversing all node of the tree
// * create a DFS algo for traversing 

const dfs = (node)=>{
    console.log(node);
    node.child.forEach(item =>{
        dfs(item);
    })
}

const rootNode = new TreeNode('A');
const nodeA = new TreeNode('B');
const nodeB = new TreeNode('C');
const nodeC = new TreeNode('D');  

rootNode.addChild(nodeA);
rootNode.addChild(nodeB);
nodeB.addChild(nodeC);

dfs(rootNode)
// console.log(rootNode)