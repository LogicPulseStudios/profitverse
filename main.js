// Function to hide alerts after 3 seconds
function hideAlerts() {
  var alerts = document.getElementsByClassName('alert');
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].classList.add('hidden'); // Add the 'hidden' class to hide the alert
  }
}

// Hide the alerts after 3 seconds (3000 milliseconds)
setTimeout(hideAlerts, 3000);

// Function to show the loader
function showLoader() {
  var loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'flex'; // Show the loader container
}

// Function to hide the loader
function hideLoader() {
  var loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none'; // Hide the loader container
}

// Show loader when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  showLoader(); // Show loader
});

 

// Listen for beforeunload event to show the loader before navigating away
window.addEventListener('beforeunload', showLoader);

// Hide the loader when the page has finished loading
window.onload = hideLoader;

// Disable right-click context menu on images
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Listen for scroll event to add animation classes
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll('.animated-on-scroll');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (positionFromTop - screenHeight <= -5) {
      element.classList.add('show');
    } else {
      element.classList.remove('show'); // Remove 'show' class if element is no longer in viewport
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add exclude-script class to the button element
    var button = document.querySelector('.navbar-toggler');
    if (button) {
        button.classList.add('exclude-script');
    }

    // Add exclude-script class to table elements
    var tables = document.querySelectorAll('table');
    tables.forEach(function(table) {
        table.classList.add('exclude-script');
    });

    // Add exclude-script class to links with class "btn"
    var btnLinks = document.querySelectorAll('a.btn');
    btnLinks.forEach(function(link) {
        link.classList.add('exclude-script');
    });

    // Add exclude-script class to all form elements
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.classList.add('exclude-script');
    });
});



