/* Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers (map, forEach, reduce, etc)! */
const numbers = [1, 2, 3];

function double(numbers) {
    // instantiate new array - returned as final solution
    let newArray = [];
    // recursive func
    const recursiveFunc = (numbers) => {
        // separate first value in array with rest of values
        let [a, ...rest] = numbers;
        /* if first array value is undefined (if recursiveFunc is called with empty array), return immediately */
        if (!a) {
            return;
        }
        /* if first array value exists, push it into the new array after multiplying by 2 */
        newArray.push(a * 2);
        /* call recursive function again with rest of array (without first value) */
        recursiveFunc(rest);
    }
    // start recursive func w/ original input array
    recursiveFunc(numbers);
    // return newArray when all call stacks are clear
    return newArray;
};
//invoke function with test array
double(numbers);
/* -------------------- */
