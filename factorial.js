// Nabasirye Gertrude, Ssozi Martin Rukundo.

/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
module.exports = function factorial(num) {
  if (num < 0) return "Can't find factorial for negative numbers";
  if (num <= 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
