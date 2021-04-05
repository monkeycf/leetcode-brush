// https://leetcode-cn.com/problems/remove-element/
// 双指针
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let len = nums.length;

  while(left <  len) {
    if (nums[left] == val) {
      nums[left] = nums[len - 1];
      len --;
    } else {
      left++;
    }
  }
  return left;
}