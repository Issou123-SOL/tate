$(document).ready(function() {

  var params = new URLSearchParams(window.location.search);

  if(!params) return;
  console.log(params);
  
  var links = document.querySelectorAll('a:not([ignore_aff])');
  links.forEach(function (link) {
    if (link.getAttribute('href')) {

      link.search = params.toString();

      //link.href = link.href;
    }
  });

});