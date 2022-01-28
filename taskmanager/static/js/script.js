document.addEventListener('DOMContentLoaded', function() {
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function() {
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

document.addEventListener('DOMContentLoaded', function() {
  let datePicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datePicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});

document.addEventListener('DOMContentLoaded', function() {
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});