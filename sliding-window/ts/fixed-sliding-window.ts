/**
 * Calculates the fixed sliding window sum for an array of numbers.
 *
 * @param {number[]} array - The input array of numbers.
 * @param {number} value - The size of the sliding window.
 * @returns {number[]} - An array containing the sum of each subarray of size `value`.
 */
function fixedSlidingWindow(array: number[], value: number) {
    // Initialize an empty array to store the result.
    let result: number[] = [];

    // Variable to keep track of the current subarray sum.
    let currSubarray = 0;

    // Calculate the sum of the first subarray and add it to the result.
    for (let i = 0; i < value; i++) {
        currSubarray += array[i]; // Add the current element to the subarray sum.
    }
    result.push(currSubarray); // Store the sum of the first subarray in the result array.

    // To get each subsequent subarray, add the next value in the list
    // and remove the first value from the previous subarray.
    for (let i = 1; i < array.length - value+1; i++) {
        // Update the current subarray sum by subtracting the leftmost element
        // and adding the rightmost element of the new window.
        currSubarray = currSubarray - array[i - 1] + array[i + value - 1];

        // Add the updated subarray sum to the result array.
        result.push(currSubarray);
    }

    // Return the array containing the sum of each subarray of size `value`.
    return result;
}

let arr1: number[] = [1, 2, 3, 4, 5, 6];
let size = 2;
let value = fixedSlidingWindow(arr1, size);
console.log(value); // Output: [6,9,12,15]
