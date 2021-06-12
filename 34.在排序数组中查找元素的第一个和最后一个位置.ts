/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  function searchHandler(nums: number[], target: number, flag: boolean, beginIndex: number, endIndex: number): number {
    let begin = beginIndex;
    let end = endIndex;
    let res = endIndex;
    while (begin < end) {
      const mid = Math.floor((begin + end) / 2);
      if (nums[mid] > target || (flag && nums[mid] === target)) {
        end = mid;
        res = mid;
      } else {
        begin = mid + 1;
      }
    }
    return res;
  }
  const leftIndex = searchHandler(nums, target, true, 0, nums.length);
  if (leftIndex < 0 || nums[leftIndex] !== target) {
    return [-1, -1];
  }
  const rightIndex = searchHandler(nums, target, false, leftIndex, nums.length) - 1;
  return [leftIndex, rightIndex];
};
// @lc code=end

