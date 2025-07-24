function isAnagram(s: string, t: string): boolean {
  //   const sNums = new Array(123).fill(0);
  //   const tNums = new Array(123).fill(0);
  const sNums = new Array(26).fill(0);
  const tNums = new Array(26).fill(0);

  //   Array.from(s).forEach((char, index) => {
  //     sNums[s.charCodeAt(index)]++;
  //   })

  //   Array.from(t).forEach((char, index) => {
  //     tNums[t.charCodeAt(index)]++;
  //   })
  for (let i = 0; i < s.length; i++) {
    sNums[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    tNums[t.charCodeAt(i) - 97]++;
  }
  return sNums.join("") === tNums.join("");
}
