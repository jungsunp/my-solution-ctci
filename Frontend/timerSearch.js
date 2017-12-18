

// https://www.glassdoor.com/Interview/If-you-were-building-a-search-tool-and-wanted-search-results-to-pop-up-as-you-typed-but-the-server-call-was-taxing-write-a-QTN_835901.htm

const input = document.querySelector('input');
let lastTimer;
const search = () => {
  if (lastTimer) {
    clearTimeout(lastTimer);
  }
  setTimeout(() => {
    // search stuff
  }, 400);
};
input.addEventListener('keyDown', search);
