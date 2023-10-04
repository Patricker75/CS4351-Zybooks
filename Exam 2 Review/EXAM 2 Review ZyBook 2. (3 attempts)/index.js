function calculate(){

   const enteredNum = prompt(); // Code will be tested with other values as well

   let num = enteredNum
   let nums = [];
   while (num < 60) {
      num *= 3;
      
      nums.push(num);
   }
   
   console.log(nums.join(' '))
}
