

// Solution
const permWithDups = str => {
	if (str === '') return [];
	if (str.length <= 1) return [str];
	const retArr = [];
	const hashPerm = {};
	const curChar = str[0];
	const prevPermArr = permWithDups(str.slice(1));
	prevPermArr.forEach(perm => {
		let tmpPerm;
    for (let i = 0; i <= perm.length; i++) {
      tmpPerm = perm.slice(0,i) + curChar + perm.slice(i);
      if (hashPerm[tmpPerm]) continue;
      retArr.push(tmpPerm);
      hashPerm[tmpPerm] = true;
    }
  });
return retArr;
};


/* TEST */

var test1 = 'aaa';
var test2 = 'abc';
var test3 = 'aba';

console.log(permWithDups(test1));
console.log(permWithDups(test2));
console.log(permWithDups(test3));
