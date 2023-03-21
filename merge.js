// let num = [45,12,6,89,2,5];
// let target = 6;
function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    const middle = Math.floor(arr.length /2);
    const leftIndex = arr.slice(0,middle);
    const rightIndex = arr.slice(middle);

    return merge(mergeSort(leftIndex),mergeSort(rightIndex));
}
function merge(leftIndex,rightIndex){
    let x = 0;
    let y = 0;
    const result = [];

    while (x <leftIndex.length && y < rightIndex.length){
        if (leftIndex[x]< rightIndex[y]){
            result.push(leftIndex[x]);
            x++;

        }
        else{
            result.push(rightIndex[y]);
            y++;
        }
    }
    return result.concat(leftIndex.slice(x)).concat(rightIndex.slice(y));

}
function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex<= rightIndex){
        const middle = Math.floor((leftIndex+rightIndex)/2);

        if (arr[middle]===target){
            return middle;
        }
        else if(arr[middle]<target){
            leftIndex = middle +1;
        }
        else{
            rightIndex = middle -1;
        }
    }
    return null;
}
let num = [45,12,6,89,2,5];
let targets = 6;

const sortedNum = mergeSort(num);
const index1 = binarySearch(sortedNum,targets);

console.log(index1);



// quiz 2; given an unsorted array of numbers return the sorted array in descending order
// let arr = [123,89,5,23,9,56]
function mergeSort(arr) {
    if (arr.length < 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
   
    const result = [];
  
    while (m < left.length && n < right.length) {
      if (left[0] > right[0]) {
        result.push(left.shift());
        
      } else {
        result.push(right.shift());
        
      }
    }
  
    return result.concat(left,right);
  }
  
  let arr1 = [123, 89, 5, 23, 9, 56];
  
  arr1 = mergeSort(arr1).reverse();
  
  console.log(arr1); 

  //quiz 3; given the following array, search for the following target 
  //let target = 34
  //let arr2 = [1,4,78,2,67,3]
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  }
  
  let target = 34;
  let arr = [1, 4, 78, 2, 67, 3];
  arr = mergeSort(arr);
  let index = binarySearch(arr, target);
  
  if (index !== -1) {
    console.log(`Target value ${target} is found at index ${index}.`);
  } else {
    console.log(`Target value ${target} is null.`);
  }
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (arr[middle] === target) {
        return middle;
      } else if (arr[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  
    return -1;
  }
  
  
  
  
