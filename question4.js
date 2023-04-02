function pattern_count(text, pattern) {
  let count = 0;
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.substring(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}