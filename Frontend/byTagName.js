// HTML
// <h1>Heading with a <span>span</span> element.</h1>
// <p>A paragraph with <span>one</span>, <span>two</span>
//   spans.</p>

// <script>
function byTagName(node, tagName) {
  // Your code here.
  tagName = tagName.toUpperCase();
  let retArr = [];
  const childArr = Array.prototype.slice.call(node.childNodes);
  childArr.forEach(elem => {
    if (elem.nodeType === document.ELEMENT_NODE) {
      if (elem.nodeName === tagName) retArr.push(elem);
      retArr = retArr.concat(byTagName(elem, tagName));
    }
  });

  return retArr;
}

console.log(byTagName(document.body, 'h1').length);
// → 1
console.log(byTagName(document.body, 'span').length);
// → 3
var para = document.querySelector('p');
console.log(byTagName(para, 'span').length);
  // → 2
// </script>
