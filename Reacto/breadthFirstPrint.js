
// Breadth First Print
// http://slides.com/benjaminconant/reacto#/

// Solution
const printTreeLevels = tree => {
  let curLevelArr = [tree];

  while (curLevelArr.length > 0) {
    const nextLevelArr = [];
    let outStr = '';
    curLevelArr.forEach(node => {
      if (node.children) nextLevelArr = nextLevelArr.concat(node.children);
      outStr += node.value + ' ';
    });
    console.log(outStr);
    curLevelArr = nextLevelArr;
  }
};
// run time: O(n)
// space complexity: O(n)

const myTree = {
  value: 'A',
  children: [{
    value: 'B',
    children: [{
      value: 'D',
      children: [{
        value: 'H',
        children: []
      }]
    }]
  }, {
    value: 'C',
    children: [{
      value: 'E',
      children: []
    }, {
      value: 'F',
      children: [{
        value: 'I',
        children: []
      }, {
        value: 'J',
        children: []
      }]
    }, {
      value: 'G',
      children: []
    }]
  }]
};


printTreeLevels(myTree);
