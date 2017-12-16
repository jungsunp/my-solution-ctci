

// https://leetcode.com/problems/implement-trie-prefix-tree/description/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.trie = {};
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.trie;
  for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = {};
      node = node[word[i]];
  };
  node['*'] = true; // mark end of word
};

/**
* Returns if the word is in the trie.
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.trie;
  for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) return false;
      node = node[word[i]];
  }
  return node['*'] === true;
};

/**
* Returns if there is any word in the trie that starts with the given prefix.
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.trie;
  for (let i = 0; i < prefix.length; i++) {
      if (!node[prefix[i]]) return false;
      node = node[prefix[i]];
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = Object.create(Trie).createNew()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
