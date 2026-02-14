function lengthOfLongestSubstring(s: string): number {
  const strSet = new Set<string>(Array.from(s));
  if (strSet.size === s.length) return s.length;
  if (strSet.size === 1) return 1;
  let max = 0;
  let start = 0;
  const charIndexMap = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (charIndexMap.has(s[i])) {
      start = Math.max(start, charIndexMap.get(s[i])! + 1);
    }
    charIndexMap.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max; 
}