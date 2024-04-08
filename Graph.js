const numberOfNode = 5;

const list = Array.from({length:numberOfNode+1},()=>[])

const addEdge = (to, node)=>{
    list[to].push(node);
}

addEdge(1,2)
addEdge(1,4)
addEdge(2,4)
addEdge(2,3)
addEdge(3,5)
addEdge(4,5)

console.log(list)

// * BFS 
let visited = Array(numberOfNode).fill(false);
const queue = [];
let source = 1;
queue.push(source);
visited[source] = true;

let container = [];
  
while(queue.length>0){ 
    const front = queue.shift();
    container.push(front);
    for(let neighbor of list[front]){
        if(!visited[neighbor]){
            queue.push(neighbor);
            visited[neighbor] = true;
        }
    }
}

console.log("BFS Traverse List ", container)  

// * DFS 
visited = Array(numberOfNode).fill(false);
let stack = [];
source = 1;
container = [];
stack.push(source);
visited[source] = true;

while(stack.length>0){
    const front = stack[stack.length-1];
    stack.pop();
    container.push(front);
    for(let neighbor of list[front]){
        if(!visited[neighbor]){
            stack.push(neighbor);
            visited[neighbor] = true;
        }
    }
}

console.log("DFS Traverse List ",container)

