

// https://leetcode.com/problems/copy-list-with-random-pointer/description/

// Solution - Hash Map
var copyRandomListHM = function (head) {
    if (!head) return null;

    // copy all nodes to hash
    const hash = new Map();
    let node = head;
    while (node) {
        hash.set(node, new RandomListNode(node.label));
        node = node.next;
    }

    // set pointers
    node = head;
    let newNode = hash.get(node);
    while (node.next) {
        newNode.next = hash.get(node.next);
        newNode.random = node.random ? hash.get(node.random) : null;
        node = node.next;
        newNode = newNode.next;
    }

    return hash.get(node);
};
// Run: O(n)
// Space: O(n)

// Solution - less space used
var copyRandomList = function (head) {
    if (!head) return null;

    // copy to the original list
    let node = head;
    while (node) {
        const next = node.next;
        node.next = new RandomListNode(node.label);
        node.next.next = next;
        node = next;
    }

    // set random pointers
    node = head;
    while (node) {
        if (node.random) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }

    // extract new list
    const dummyNode = new RandomListNode();
    node = head;
    let newNode = dummyNode;
    while (node) {
        const next = node.next.next;
        newNode.next = node.next;
        node.next = next;

        node = next;
        newNode = newNode.next;
    }

    return dummyNode.next;
};
// Run: O(n)
// Space: O(1)
