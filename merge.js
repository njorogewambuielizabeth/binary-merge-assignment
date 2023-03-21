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
    if (arr.length < 2) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let m = 0;
    let n = 0;
    const result = [];
  
    while (m < left.length && n < right.length) {
      if (left[m] > right[n]) {
        result.push(left[m]);
        m++;
      } else {
        result.push(right[n]);
        n++;
      }
    }
  
    return result.concat(left.slice(m)).concat(right.slice(n));
  }
  
  let arr = [123, 89, 5, 23, 9, 56];
  
  const sortedArr2 = mergeSort(arr);
  
  console.log(sortedArr2); 

  //quiz 3; given the following array, search for the following target 
  //let target = 34
  //let arr2 = [1,4,78,2,67,3]
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(leftNum, rightNum) {
    let f = 0;
    let v = 0;
    const result = [];
  
    while (f < leftNum.length && v < rightNum.length) {
      if (leftNum[f] < rightNum[v]) {
        result.push(leftNum[f]);
        f++;
      } else {
        result.push(rightNum[v]);
        v++;
      }
    }
  
    return result.concat(leftNum.slice(f)).concat(rightNum.slice(v));
  }
  
  function binarySearch(arr, target) {
    let leftNum = 0;
    let rightNum = arr.length - 1;
  
    while (leftNum <= rightNum) {
      const mid = Math.floor((leftNum + rightNum) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return null;
  }
  
  let arr2 = [1, 4, 78, 2, 67, 3];
  let target = 34;
  
  const sortedArr = mergeSort(arr2);
  const index3 = binarySearch(sortedArr, target);
  
  console.log(index3);
  
  
