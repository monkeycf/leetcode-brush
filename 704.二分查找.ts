/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let begin = 0;
  let end = nums.length;

  while (begin < end && end > 0) {
    const mid = Math.floor((begin + end) / 2);
    const midValue = nums[mid];
    if (midValue === target) {
      return mid;
    }

    if (midValue > target) {
      end = mid;
    } else {
      begin = mid + 1;
    }
  }
  return -1;
};
// @lc code=end

