function checkForm() {
   let errors = document.createElement('ul');

   let name = document.getElementById('fullName');
   let email = document.getElementById('email');
   let password = document.getElementById('password');
   let confirmPw = document.getElementById('passwordConfirm');

   name.classList.remove('error');
   email.classList.remove('error');
   password.classList.remove('error');
   confirmPw.classList.remove('error');

   if (name.value.length < 1) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Missing full name.'))

      errors.appendChild(li);

      name.classList.add('error')
   }

   let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRe.exec(email.value)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Invalid or missing email address.'))

      errors.appendChild(li);

      email.classList.add('error')
   }

   let lowerRe = /.*[a-z].*/;
   let upperRe = /.*[A-Z].*/;
   let digitRe = /.*[0-9].*/;
   if (password.value.length < 10 || password.value.length > 20) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must be between 10 and 20 characters.'))

      errors.appendChild(li);

      password.classList.add('error')
   }
   if (!lowerRe.exec(password.value)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one lowercase character.'))

      errors.appendChild(li);

      password.classList.add('error')
   }
   if (!upperRe.exec(password.value)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one uppercase character.'))

      errors.appendChild(li);

      password.classList.add('error')
   }
   if (!digitRe.exec(password.value)) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password must contain at least one digit.'))

      errors.appendChild(li);

      password.classList.add('error')
   }
   if (password.value !== confirmPw.value) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode('Password and confirmation password don\'t match.'))

      errors.appendChild(li);

      password.classList.add('error')
      confirmPw.classList.add('error');
   }

   let div = document.getElementById('formErrors');
   console.log(errors.childElementCount)
   if (errors.childElementCount > 0) {
      div.innerHTML = '';
      div.appendChild(errors);
      div.classList.remove('hide');
   }
   else {
      div.classList.add('hide');
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});