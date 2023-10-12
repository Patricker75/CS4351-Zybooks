function calcWordFrequencies() {
  let input = prompt("");
  let words = input.split(" ");
  
  for(let word of words) {
    let count = 0;
    for (let i=0; i < words.length; i++) {
      if (word === words[i]) {
        count++;
      }
    }

    console.log(word + ' ' + count);
  }
}