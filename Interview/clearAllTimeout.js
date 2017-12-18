

// step 1 - implement clear all timeout

const hash = new Map(); // store list of timers

const newSetTimeout = (callback, sec) => {
  const timer = setTimeout(callback, sec);
  hash.set(timer, true);
};

const newClearTimeout = (timer) => {
  clearTimeout(timer);
  hash.delete(timer);
};

const clearAllTimeout = () => {
  hash.forEach((val, timer) => {
    clearTimeout(timer);
  });
  hash.clear();
};

// step 2 - reassign setTimeout

setTimeout = ((origSetTimeout) => {
  return (callback, sec) => {
    const timer = origSetTimeout(callback, sec);
    hash.set(timer, true);
  };
})(setTimeout);
