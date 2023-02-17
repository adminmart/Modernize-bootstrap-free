// Import our custom CSS
import '../scss/styles.scss'
import './dashboard';
import './app.min';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


// =================================
// Tooltip
// =================================
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



