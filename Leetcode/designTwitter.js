/**
 * Initialize your data structure here.
 */
// {
//      userID: {
//                  tweets: [tweet1, tweet2, ...],
//                  following: {user1: true, user2: true, ...}
//              }
// }
var Twitter = function () {
  this.data = new Map();
};

/**
* Compose a new tweet.
* @param {number} userId
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.data.has(userId)) {
    this.data.set(userId, {
      tweets: [],
      following: {}
    });
  }
  this.data.get(userId).tweets.push(tweetId);
};

/**
* Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
* @param {number} userId
* @return {number[]}
*/

const bubbleUp = heap => {
  let done = false;
  let index = heap.length - 1;
  while (index > 1 && !done) {
    const pIdx = Math.floor(index / 2);
    if (heap[pIdx].freq < heap[index].freq) {
      const tmp = heap[pIdx];
      heap[pIdx] = heap[index];
      heap[index] = tmp;
      index = pIdx;
    } else {
      done = true;
    }
  }
};

const bubbleDown = heap => {
  let done = false;
  let index = 1;
  while (index < heap.length && !done) {
    const lChild = 2 * index;
    const rChild = 2 * index + 1;
    const lFreq = heap[lChild] ? heap[lChild].freq : 0;
    const rFreq = heap[rChild] ? heap[rChild].freq : 0;
    if (lFreq > 0 && heap[index].freq < Math.max(lFreq, rFreq)) {
      let swapIndex;
      if (lFreq < rFreq) {
        swapIndex = rChild;
      } else {
        swapIndex = lChild;
      }
      const tmp = heap[swapIndex];
      heap[swapIndex] = heap[index];
      heap[index] = tmp;
      index = swapIndex;
    } else {
      done = true;
    }
  }
};

Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.data.has(userId)) return [];
  const userArr = Object.keys(this.data.get(userId).following).map(user => +user);
  userArr.push(userId);

  // build max heap with all tweets from following users
  const maxHeap = [null];
  userArr.forEach(user => {
    if (this.data.has(user)) {
      this.data.get(user).tweets.forEach(tweet => {
        maxHeap.push(tweet);
        bubbleUp(maxHeap);
      });
    }
  });

  // return max head 10 times
  const retArr = [];
  if (maxHeap.length === 1) return retArr;
  let counter = 10;
  while (counter > 0) {
    retArr.push(maxHeap[1]);
    if (maxHeap.length === 2) break;
    const end = maxHeap.pop();
    maxHeap[1] = end;
    bubbleDown(maxHeap);
    counter--;
  }
  return retArr;
};

/**
* Follower follows a followee. If the operation is invalid, it should be a no-op.
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.data.has(followerId)) {
    this.data.set(followerId, {
      tweets: [],
      following: {}
    });
  }
  this.data.get(followerId).following[followeeId] = true;
};

/**
* Follower unfollows a followee. If the operation is invalid, it should be a no-op.
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.data.has(followerId)) return;
  if (!this.data.get(followerId).following[followeeId]) return;
  delete this.data.get(followerId).following[followeeId];
};

/**
* Your Twitter object will be instantiated and called as such:
* var obj = Object.create(Twitter).createNew()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/


const twit = new Twitter();
twit.postTweet(1, 1);
console.log(twit.getNewsFeed(1));
twit.follow(2, 1);
console.log(twit.getNewsFeed(2));
twit.unfollow(2, 1);
console.log(twit.getNewsFeed(2));
