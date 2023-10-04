window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let btn = document.getElementById('convertButton');

   btn.addEventListener('click', function() {
      let cel = document.getElementById('cInput');
      let fah = document.getElementById('fInput');
      
      let errMsg = document.getElementById('errorMessage');

      if (cel.value) {
         if (isNaN(cel.value)) {
            errMsg.innerHTML = cel.value + ' is not a number';
            return;
         }

         let temp = convertCtoF(parseFloat(cel.value));
         errMsg.innerHTML = '';

         fah.value = temp;
      }
      else if (fah.value) {
         if (isNaN(fah.value)) {
            errMsg.innerHTML = fah.value + ' is not a number';
            return;
         }

         let temp = convertFtoC(parseFloat(fah.value));
         errMsg.innerHTML = '';

         cel.value = temp;
      }

      let img = document.getElementById('weatherImage');
      if (fah.value < 32) {
         img.src = 'cold.png';
      }
      else if (fah.value <= 50) {
         img.src = 'cool.png';
      }
      else {
         img.src = 'warm.png';
      }
   })

   let cInput = document.getElementById('cInput');
   let fInput = document.getElementById('fInput');

   cInput.addEventListener('input', function() {
      document.getElementById('fInput').value = '';
   })
   fInput.addEventListener('input', function() {
      document.getElementById('cInput').value = '';
   })
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}
