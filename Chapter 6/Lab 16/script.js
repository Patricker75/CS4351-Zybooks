function calcWordFrequencies() {
  let input = prompt("");
  let words = input.split(" ");
  let freq = {};

  for (let word of words) {
      if (freq[word]) {
        freq[word]++;
      } else {
        freq[word] = 1;
      }
  }

  for (let word in freq) {
      console.log(word + " " + freq[word]);
  }
}