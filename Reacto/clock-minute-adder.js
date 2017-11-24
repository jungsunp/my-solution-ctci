
// Clock Minute Adder
// http://slides.com/mschreiber/reacto-5#/

// Solution
const addMinutes = (time, minToAdd) => {
  let [ hour, min ] = time.split(':').map(t => Number.parseInt(t));
  let carry = Math.floor((min + minToAdd) / 60);
  min = (min + minToAdd) % 60;
  hour = (hour + carry) % 12;
  if (hour === 0) hour = 12; // another trick: hour = ((hour + carry -1) % 12) +1;
  return hour + ':' + min;
};
// run time: O(1)
// space complexity: O(1)

console.log(addMinutes('2:30', 25));
console.log(addMinutes('12:30', 40));
console.log(addMinutes('1:59', 240));
console.log(addMinutes('6:34', 371));
