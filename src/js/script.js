const eye = document.getElementById('eye');

eye.addEventListener('click', function() {
  const input = this.nextElementSibling;

  if(input.type === 'password')
    input.type = 'text';
  else 
   input.type = 'password';
});