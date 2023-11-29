/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/
let nums1 = [0,1,0,3,12,9,17,0]
let nums2 = [0]
function moveZeroes(mvZero) {
    let nums = mvZero.sort()
    for (let i = 0; i <= mvZero.length - 1; i++) {
        if (nums[0] == 0) {
            nums.shift()
            nums.push(0)
        } else {
            break
        }
    }
    console.log(nums)
}
moveZeroes(nums1)
moveZeroes(nums2)
/*
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

let nums3 = [1, 2, 2, 1];
let nums4 = [2, 2]
let nums5 = [4, 9, 5]
let nums6 = [9, 4, 9, 8, 4]
let z=[];
let u = [];
let x = nums3.length
let y = nums4.length
let x1 = nums5.length
let y1 = nums6.length
function arrayInter(firstArray, SecondArray, a,b) {
    if (a >= b) {
        for (let i = 0; i <= b - 1; i++) {
            for (let j = 0; j <= a - 1; j++) {
                if (SecondArray[i] == firstArray[j]) {
                    z[i] = SecondArray[i]
                }
            }
        }
        console.log(z)
    } else {
        for (let i = 0; i <= a - 1; i++) {
            for (let j = 0; j <= b - 1; j++) {
                if (firstArray[i] == SecondArray[j]) {
                    u[i] = SecondArray[i]
                }
            }
        }
        console.log(u)
    }

}

arrayInter(nums3,nums4,x,y,z)
arrayInter(nums5,nums6,x1,y1,u)
/*
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/
let nums = [34, 7, 21, 89, 54, 10, 91, 67]
function maxminCheck() {
    // min number in arrry
    let max = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            mxindex = i;
        }
    }
    console.log("The Max value:  " + max + " The index value is : " + mxindex);

    // min number in arrry
    let min = 100;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minindex = i
        }
    }
    console.log("The Min value:  " + min + " The index value is : " + minindex);
}

maxminCheck()
/*
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
let iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
function duplicateCheck() {
    let dupcheck = [];
    for (i = 0; i < iputArray.length; i++) {
        if(dupcheck.indexOf(iputArray[i]) === -1){
            dupcheck.push(iputArray[i])
        }
    }
    console.log(dupcheck)
}
duplicateCheck()