var inputs = readline().split(' '),
    nodeCount = parseInt(inputs[0]),    // Total node count (including gateways)
    linkCount = parseInt(inputs[1]),    // Total link count
    exitCount = parseInt(inputs[2]);    // Total exit count

/**
 * Nodes are stored in an array, as an array. Node ID is used as array indexes.
 * Connected nodes are stored in an array at the corresponding index. Exit node
 * IDs are stored in the exits array.
 */
var nodes = Array.apply(null, Array(nodeCount)).map(function () { return []; }),
    exits = [];

/**
 * Nodes connected by link are stored in arrays on both sides (see above).
 */
for (var i = 0; i < linkCount; i++) {
    var inputs = readline().split(' '),
        n1 = parseInt(inputs[0]),
        n2 = parseInt(inputs[1]);
    nodes[n1].push(n2);
    nodes[n2].push(n1);
}

/**
 * Storing exit node IDs.
 */
for (var i = 0; i < exitCount; i++) {
    exits.push(parseInt(readline()));
}

/**
 * Severs connection between two nodes, removing the connected node from the
 * array of connected nodes in the process.
 */
function sever(node1, node2) {
    nodes[node1].splice(nodes[node1].indexOf(node2), 1);
    nodes[node2].splice(nodes[node2].indexOf(node1), 1);
    printErr("severing ", node1, node2);
    print([node1, node2].join(' '));
}

/**
 * Debug output for testing.
 */
printErr("nodes,links,exits - " + inputs);
printErr('nodes...');
for (var i = 0; i < nodes.length; i++) { printErr(i + " - " + nodes[i]); };
printErr("exits...");
for (var i = 0; i < exits.length; i++) { printErr(i + " - " + exits[i]); };

/**
 * Severing logic is really simple. If the agent is on a node connected to a
 * gateway, prioritise severing that link. Otherwise, sever the link to the
 * first node in the connected nodes array.
 */
while (true) {
    var sI = parseInt(readline()),
        currentLinks = nodes[sI],
        severed = false;

    printErr("agent - " + sI + " - " + currentLinks);

    for (var i = 0, l = currentLinks.length; i < l; i++) {
        if (exits.indexOf(currentLinks[i]) > -1) {
            sever(sI, currentLinks[i]);
            severed = true;
        }
    }

    if (!severed) sever(sI, currentLinks[0]);
}
