

// Solution
const addMinutes = (time, minToAdd) => {
  let [ hour, min ] = time.split(':').map(t => Number.parseInt(t));
  let carry = Math.floor((min + minToAdd) / 60);
  min = (min + minToAdd) % 60;
  hour = (hour + carry) % 12;
  if (hour === 0) hour = 12;
  return hour + ':' + min;
};

console.log(addMinutes('2:30', 25));
console.log(addMinutes('12:30', 40));
console.log(addMinutes('1:59', 240));
console.log(addMinutes('6:34', 371));
