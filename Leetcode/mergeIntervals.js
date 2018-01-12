

// https://leetcode.com/problems/merge-intervals/description/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals || !intervals.length) return [];
  intervals.sort((a, b) => {
    return a.start - b.start;
  });

  const retArr = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (retArr[retArr.length - 1].end >= intervals[i].start) {
      const curElem = retArr.pop();
      const start = Math.min(curElem.start, intervals[i].start);
      const end = Math.max(curElem.end, intervals[i].end);
      retArr.push(new Interval(start, end));
    } else {
      retArr.push(intervals[i]);
    }
  }

  return retArr;
};
// Run: O(n log n)
// Space: O(n)
