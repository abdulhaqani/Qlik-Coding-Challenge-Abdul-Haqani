// **********************************************************
//                     QUESTION 1
// **********************************************************

const mysort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  let left = [];
  let right = [];

  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return mysort(left).concat(pivot, mysort(right));
};

let arr = [];
for (let i = 0; i < 100; i++) {
  const r = Math.floor(Math.random() * 100);
  arr.push(r);
}
const sorted = mysort(arr);

// **********************************************************
//                     QUESTION 2
// **********************************************************

const largestPalindrome = () => {
  let max = 0;
  // not using i >= 100 since 100*100 is not palindrome! :)
  for (let i = 999; i > 100; i--) {
    // start with j = i since i * j = j * i
    for (let j = i; j > 100; j--) {
      // only execute next lines if both numbers are not a multiple of 10
      if (i % 10 != 0 && j % 10 != 0) {
        let val = j * i;
        // update maximum
        if (isPalindrome(val) && val > max) {
          max = val;
        }
      }
    }
  }

  return max;
};

const isPalindrome = i => {
  i = '' + i;
  return (
    i ===
    i
      .split('')
      .reverse()
      .join('')
  );
};

// **********************************************************
//                     QUESTION 3
// **********************************************************

const isAnagram = (string1, string2) => {
  let a = {};
  let b = {};

  console.log('String 1: ', string1, '\nString 2: ', string2);

  // strip spaces before going through
  let str1 = string1.split(/\s/).join('');
  let str2 = string2.split(/\s/).join('');

  // if non ' ' have a different total then not an anagram
  if (str1.length != str2.length) return false;

  // for each element in strings
  for (let i = 0; i < str1.length; i++) {
    // if letter already present add 1, else add to object
    letter1 = str1[i];
    letter2 = str2[i];

    // object a and b = object with count of each character for each string
    if (a[letter1]) a[letter1] += 1;
    else a[letter1] = 1;

    if (b[letter2]) b[letter2] += 1;
    else b[letter2] = 1;
  }

  // check if each character count is the same (already took care of different string lengths)
  for (let i = 0; i < a.length; i++) {
    if (a[str1[i]] != b[str2[i]]) return false;
  }
  return true;
};

// Logs
console.log('QUESTION 1: \n \n');
console.log('Unsorted array:', arr);
console.log('Sorted array:', sorted);
console.log('\n ************************************* \n');

console.log('QUESTION 2: \n \n');
console.log('Largest 3 digit Palindrome: ', largestPalindrome());
console.log('\n ************************************* \n');

console.log('QUESTION 3: \n \n');
console.log('Example 1: ');
console.log(isAnagram('Debit Card', 'Bad Credit'));
console.log('Example 2: ');
console.log(isAnagram('Astronomer', 'Moon starer'));
console.log('Example 3: ');
console.log(isAnagram('These churn air', 'The Hurricanes'));
console.log('Example 4: ');
console.log(isAnagram('Dormitory', 'Dirty rooms'));
