

// http://eloquentjavascript.net/13_dom.html#c_rOOH9tlfsG

// Example
function highlightCode(node, keywords) {
  var text = node.textContent;
  node.textContent = ''; // Clear the node

  var match, pos = 0;
  while (match = keywords.exec(text)) {

    // add unmatched text as text node
    var before = text.slice(pos, match.index);
    node.appendChild(document.createTextNode(before));

    // add matched text as strong elem
    var strong = document.createElement('strong');
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);

    pos = keywords.lastIndex;
  }
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}

var languages = {
  javascript: /\b(function|return|var)\b/g
  /* … etc */
};

function highlightAllCode() {
  var pres = document.body.getElementsByTagName('pre');
  for (var i = 0; i < pres.length; i++) {
    var pre = pres[i];
    var lang = pre.getAttribute('data-language');
    if (languages.hasOwnProperty(lang))
      highlightCode(pre, languages[lang]);
  }
}

// Test
//
// <p>Here it is, the identity function:</p>
// <pre data-language="javascript">
// function id(x) { return x; }
// </pre>
//
// <script>highlightAllCode();</script>
