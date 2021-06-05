/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let begin = 0;
  let end = nums.length;

  while (begin < end) {
    const mid = Math.floor((begin + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      begin = mid + 1;
    } else {
      end = mid;
    }
  }
  return begin;
};
// @lc code=end

