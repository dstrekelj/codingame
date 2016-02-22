// Total branch count.
var branchCount = parseInt(readline()),
// Nodes array.
nodes = [];

/**
* Nodes are stored as objects:
*
* { head : Number, type : String, tail : [ Number ] }
*
* The head is the identifier of the node itself,
* while the tail is an array of the node's children.
*/

/**
* Shorthand for checking if an element is in the array.
* @param   element Element to search for
* @param   array   Array to search in
* @return  `true` (exists), `false` (does not exist)
*/
function has(element, array) {
return (array.indexOf(element) > -1);
}

/**
* Searches for node by `head` property in nodes array.
* @param   nodeHead    Node `head` property
* @param   nodes       Nodes array
* @return  Node (found), `null` (not found).
*/
function find(nodeHead, nodes) {
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].head === nodeHead)
        return nodes[i];
}
return null;
}

/**
* Identifies and classifies leaf nodes as 'leaf' type.
* @param   nodes   Nodes array
*/
function identifyLeaf(nodes) {
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].tail.length === 0) {
        nodes[i].type = 'leaf';
    }
}
}

/**
* Identifies and classifies root nodes as 'root' type.
* @param   nodes   Nodes array
*/
function identifyRoot(nodes) {
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type === 'leaf')
        continue;
    var node = nodes[i],
        flag = true;
    for (var j = 0; j < nodes.length; j++) {
        if (i === j || nodes[j].type === 'leaf')
            continue;
        if (has(node.head, nodes[j].tail))
            flag = false;
    }
    if (flag)
        node.type = 'root';
}
}

/**
* Identifies and classifies regular nodes as 'node' type.
* @param   nodes   Nodes array
*/
function identifyNode(nodes) {
for (var i = 0; i < nodes.length; i++) {
    if (!nodes[i].type)
        nodes[i].type = 'node';
}
}

function classify(nodes) {
identifyLeaf(nodes);
identifyRoot(nodes);
identifyNode(nodes);
}

for (var i = 0; i < branchCount; i++) {
var inputs = readline().split(' '),
    x = parseInt(inputs[0]),
    y = parseInt(inputs[1]),
    nodeX = find(x, nodes),
    nodeY = find(y, nodes);

if (nodeX)
    nodeX.tail.push(y);
else
    nodes.push({ head : x, tail : [ y ], visited : false });

if (!nodeY)
    nodes.push({ head : y, tail : [], visited : false });
}

classify(nodes);

printErr('pre-visit:');
nodes.forEach(function(v) { printErr(v.head, v.type, v.tail, v.visited); });

function visit(nodeHead, depth) {
var node = find(nodeHead, nodes);
if (node === null) return depth;

printErr('visiting: ', node.head);
node.visited = true;
depth += 1;

return visit(node.tail[0], depth);
}

var depths = [];

for (var i = 0; i < nodes.length; i++) {
if (nodes[i].type !== 'root')
    continue;
var rootNode = nodes[i];
printErr('\nstarting: ', rootNode.head)
for (var j = 0; j < rootNode.tail.length; j++) {
    if (!rootNode.tail[j].visited) {
        depths.push(visit(rootNode.tail[j], 1));
    }
}
}

printErr('\npost-visit:');
nodes.forEach(function(v) { printErr(v.head, v.type, v.tail, v.visited); });

depths.sort(function(a, b) { return b - a; });
print(depths[0]);
