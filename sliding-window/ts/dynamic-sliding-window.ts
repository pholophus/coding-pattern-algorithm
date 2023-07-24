// This function finds the minimum length of a contiguous subarray in the given array 'arr'
// such that the sum of its elements is greater than or equal to the target value 'x'.
function dynamic_sliding_window(arr: number[], x: number) {
    // Initialize min_length to Infinity. We'll use this variable to keep track of the
    // minimum length of the subarray that meets the condition.
    let min_length = Infinity;
  
    // Initialize two pointers, 'start' and 'end', both set to the beginning of the array.
    // These pointers will help create a sliding window to find the subarray.
    let start = 0;
    let end = 0;
  
    // Initialize 'current_sum' to 0. This variable will store the sum of elements
    // within the current sliding window.
    let current_sum = 0;
  
    // Extend the sliding window until the 'end' pointer reaches the end of the array.
    while (end < arr.length) {
      // Add the element at the 'end' pointer to the current_sum and move the 'end' pointer.
      current_sum += arr[end];
      end++;
  
      // If the current_sum is greater than or equal to 'x', contract the sliding window
      // from the 'start' pointer until the condition is no longer met.
      while (start < end && current_sum >= x) {
        // Update min_length with the minimum value between the current min_length
        // and the difference between 'end' and 'start', representing the length of the subarray.
        min_length = Math.min(min_length, end - start);
  
        // Subtract the element at the 'start' pointer from the current_sum and move the 'start' pointer.
        current_sum -= arr[start];
        start++;
      }
    }
  
    // If min_length remains Infinity, it means no subarray was found that meets the condition.
    // In this case, return 0; otherwise, return the calculated min_length.
    return min_length === Infinity ? 0 : min_length;
  }
  
  let arr: number[] = [1, 2, 3, 4, 5, 6];
  let x: number = 13;
  let expectedValue = dynamic_sliding_window(arr, x);
  console.log(expectedValue); // Output: 3
  