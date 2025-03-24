// Sorting is the process of arranging elements in a specific order (ascending or descending). JavaScript provides multiple sorting algorithms, each with different use cases and performance characteristics. Below are different types of sorting in JavaScript with explanations and code examples.

// 1. Bubble Sort
// Time Complexity: O(n²) (Worst/Average), O(n) (Best - already sorted)
// Description: Repeatedly swaps adjacent elements if they are in the wrong order.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log("bubbleSort");
console.log(bubbleSort([2, 6, 4, 2, 8, 6, 4, 7, 3]));


// 2. Selection Sort
// Time Complexity: O(n²)
// Description: Finds the smallest element and swaps it with the first element, then repeats.

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
    return arr;
}

console.log("selectionSort");
console.log(selectionSort([2, 6, 4, 2, 8, 6, 4, 7, 3]));


// 3. Insertion Sort
// Time Complexity: O(n²) (Worst/Average), O(n) (Best - already sorted)
// Description: Picks an element and inserts it into its correct position.

function InsertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0, arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;

        }
        arr[j + 1] = key;

    }
    return arr;

}

console.log("InsertionSort");
console.log(InsertionSort([2, 6, 4, 2, 8, 6, 4, 7, 3]));


// 4. Merge Sort (Divide and Conquer Algorithm)
// Time Complexity: O(n log n)
// Description: Recursively divides the array into halves, sorts them, and merges them back.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("mergeSort");
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));


// 5. Quick Sort (Divide and Conquer Algorithm)
// Time Complexity: O(n log n) (Best/Average), O(n²) (Worst)
// Description: Picks a pivot, partitions the array around it, and recursively sorts.

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el > pivot);
    let middle = arr.filter(el => el === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log("quickSort");
console.log(quickSort([10, 7, 8, 9, 1, 5]));


// 6. Heap Sort (Binary Heap-Based Algorithm)
// Time Complexity: O(n log n)
// Description: Uses a heap data structure to repeatedly extract the largest element.

function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

console.log("heapSort");
console.log(heapSort([4, 10, 3, 5, 1]));


// 7. Counting Sort (For Integer and Small Range Values)
// Time Complexity: O(n + k) (where k is the range of numbers)
// Description: Counts occurrences of each element and reconstructs the sorted array.


function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let sortedArr = [];

    arr.forEach(num => count[num]++);
    count.forEach((num, i) => {
        while (num-- > 0) sortedArr.push(i);
    });

    return sortedArr;
}

console.log("countingSort");
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));


// 8. Radix Sort (For Large Integer Numbers)
// Time Complexity: O(nk) (where k is the number of digits in the largest number)
// Description: Sorts numbers digit by digit using counting sort as a subroutine.

function radixSort(arr) {
    let max = Math.max(...arr);
    let exp = 1;

    while (max / exp > 1) {
        countingSortByDigit(arr, exp);
        exp *= 10;
    }
    return arr;
}

function countingSortByDigit(arr, exp) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    arr.forEach(num => count[Math.floor(num / exp) % 10]++);
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        let index = Math.floor(arr[i] / exp) % 10;
        output[--count[index]] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
}

console.log("radixSort");
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
