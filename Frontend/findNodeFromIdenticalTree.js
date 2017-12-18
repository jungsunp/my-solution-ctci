

// FB interview questiosn
// https://www.glassdoor.com/Interview/Given-2-identical-DOM-trees-but-not-equal-and-one-element-of-the-first-DOM-tree-how-would-you-find-this-element-in-the-s-QTN_1793082.htm

// The general idea is to from a given node from the first DOM tree, maintaining a list of indices of node.parentNode and updating a node = node.parentNode, until reaching the top level:

// This function returns an array of indices from given node to the root
function getPath(root, node) {
    const path = [];
    let curElement = node;

    // This is important as if a node is null or doesn't have a parent
    // there is no need of searching further
    while (curElement !== root && curElement && curElement.parentNode) {
        const index = curElement.parentNode.childNodes.indexOf(curElement);
        path.push(index);
        curElement = curElement.parentNode;
    }

    return path;
}

// Popping all values from the array of indices we go to the symmetrical node
function getNodeByPath(root, originalPath) {
    const path = [].concat(originalPath);
    let element = root;
    while (path.length) {
        element = element.childNodes[path.pop()];
    }
    return element;
}

