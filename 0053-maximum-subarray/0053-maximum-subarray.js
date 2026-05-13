/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
let currentsum=nums[0];
let maxsum=nums[0];
for(let i=1;i<nums.length;i++){
    currentsum =Math.max(nums[i],currentsum+nums[i]);
    maxsum=Math.max(maxsum,currentsum)
}
return maxsum
};