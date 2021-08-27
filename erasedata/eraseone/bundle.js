const wrapper = document.querySelector('.wrapper'),
      form = wrapper.querySelectorAll('.form'),
      submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e){
  
  e.preventDefault();
  var formData = new FormData(form[0]);

  alert( formData.get('eraseone') + ' - ');
}
document.addEventListener('DOMContentLoaded', function() {
  submitInput.addEventListener('click', getDataForm, false);
}, false);
