const myAtoi = function (str) {
  str = str.trim();
  if (!str) return 0;
  let isPositive = 1;
  let i = 0,
    ans = 0;
  if (str[i] === "+") {
    isPositive = 1;
    i++;
  } else if (str[i] === "-") {
    isPositive = 0;
    i++;
  }
  for (; i < str.length; i++) {
    let t = str.charCodeAt(i) - 48;
    if (t > 9 || t < 0) break;
    if (ans > 2147483647 / 10 || ans > (2147483647 - t) / 10) {
      return isPositive ? 2147483647 : -2147483648;
    } else {
      ans = ans * 10 + t;
    }
  }
  return isPositive ? ans : -ans;
};

const str1 = "42",
  str2 = " -042",
  str3 = "1337c0d3",
  str4 = "0-1",
  str5 = "words and 987";
[str1, str2, str3, str4, str5].forEach((str) => {
  console.log("atoi of ", str, myAtoi(str));
});
