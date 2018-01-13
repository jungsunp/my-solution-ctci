

/*
Write a function that can break a large SMS message string given a length limit per substring. Words must stay together. If a word is longer than the limit, use the word in a new substring and split it as relevant.

Example input: 'Joe is the funniest guy', 6
Example output: [ 'Joe is', ' the f', 'unnies', 't guy' ]
*/

const smsMessages = (text, limit) => {
    const retArr = [];
    let token = '';
    for (let i = 0; i < text.length; i++) {
        token += text[i];
        if ((i + 1) % limit === 0) {
            retArr.push(token);
            token = '';
        }
    }
    if (token.length) retArr.push(token);
    return retArr;
};

console.log(smsMessages('Joe is the funniest guy', 6));
