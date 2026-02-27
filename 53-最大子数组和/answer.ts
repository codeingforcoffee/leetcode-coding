// 动态规划
// dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  const dp = [max];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
