/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 1;
  let right = x;
  let res = 1;
  if (x === 0) {
    return 0;
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid <= x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
// @lc code=end

