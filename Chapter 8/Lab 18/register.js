function checkForm() {
   document.getElementById('fullName').removeAttribute('style');
   document.getElementById('email').removeAttribute('style');
   document.getElementById('password').removeAttribute('style');


   let name = document.getElementById('fullName').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let confirmPw = document.getElementById('passwordConfirm').value;

   let errors = document.createElement('ul')

   if (name.length < 1) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Missing full name.'))

      errors.appendChild(li);

      document.getElementById('fullName').style.border = '2px solid red';
   }

   let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRe.exec(email)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Invalid or missing email address.'))

      errors.appendChild(li);

      document.getElementById('email').style.border = '2px solid red';
   }

   let lowerRe = /.*[a-z].*/;
   let upperRe = /.*[A-Z].*/;
   let digitRe = /.*[0-9].*/;
   if (password.length < 10 || password.length > 20) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must be between 10 and 20 characters.'))

      errors.appendChild(li);

      document.getElementById('password').style.border = '2px solid red';
   }
   if (!lowerRe.exec(password)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one lowercase character.'))

      errors.appendChild(li);

      document.getElementById('password').style.border = '2px solid red';
   }
   if (!upperRe.exec(password)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one uppercase character.'))

      errors.appendChild(li);

      document.getElementById('password').style.border = '2px solid red';
   }
   if (!digitRe.exec(password)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one digit.'))

      errors.appendChild(li);

      document.getElementById('password').style.border = '2px solid red';
   }
   if (password !== confirmPw) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password and confirmation password don\'t match.'))

      errors.appendChild(li);

      document.getElementById('password').style.border = '2px solid red';
   }

   let div = document.getElementById('formErrors');
   if (errors.childNodes.length > 0) {
      div.style.display = 'block';
      div.appendChild(errors);
   }
   else {
      div.style.display = 'none';
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});