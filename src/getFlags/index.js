/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
 for(i=0; i < arr.length; i++){
 	getFlags.push(arr[i]+arr2[i]);
 }
 return getFlags;
};

export default getFlags;
