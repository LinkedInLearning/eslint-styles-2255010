// Customize .eslintrc.js so ESLint behaves as described

// No error for 'comma-dangle' rule:
const user = {
  firstName: 'Sasha',
  lastName: 'Vodnik',
};

let counter = 5;
// Error for 'yoda' rule:
if (counter < 10) {
  counter += 1;
}

// Errors for 'array-bracket-newline' rule:
const grades = [ 
  'a', 
  'b', 
  'c', 
  'd', 
  'f', 
];
// No errors for 'array-bracket-newline' rule:
const scores = [ 23, 52, ];
