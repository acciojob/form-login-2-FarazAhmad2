//your JS code here. If required.
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  var formValues = '';
  for (var pair of formData.entries()) {
    formValues += pair[0] + ': ' + pair[1] + ' ';
  }
  alert(formValues.trim());
});