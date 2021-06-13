/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left: number = 1;
        let right: number = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const isBad = isBadVersion(mid);

            if (isBad) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};
// @lc code=end

