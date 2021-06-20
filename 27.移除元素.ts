/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let p = 0;
  let q = 0;

  while (q < len) {
    if (nums[q] !== val) {
      nums[p++] = nums[q];
    }
    q++;
  }

  return p;
};
// @lc code=end

