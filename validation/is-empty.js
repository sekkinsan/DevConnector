//global isempty function to check for undefined
//null, empty object or empty string

// function isEmpty(value) {
//   return(
//     value === undefined ||
//     value === null ||
//     (typeof value === 'object' && Object.keys(value).length === 0) ||
//     (typeof value === 'string' && value.trim().length === 0)
//   );
// };

//refactor to es6
const isEmpty = (value) => 
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);


module.exports = isEmpty;
