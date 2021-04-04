// https://leetcode-cn.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
  let find = 0; // 开始寻找初始值
  let bound = 2; // 寻找间隔
  const len = nums.length;
  
  if (nums[0] > target) {
    return 0;
  } 

  // 指数查找
  // 先进行指数查找，将[0, n)的区间缩小至[x, x + 2 ^ n)
  // 可以将时间效率从 O(log n) -> O(log d)，d为目标值剧左侧距离 及 target
  while (target > nums[find] && find < len) {
    find += bound;
    bound *= 2;
  }

  let left = find - bound / 2;
  let right = Math.min(find, len);

  // 二分
  while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return Math.floor((left + right) / 2);
};