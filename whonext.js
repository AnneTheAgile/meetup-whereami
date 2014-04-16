(function(window) {
  // was var $waitlistEl = $('#rsvp-list-waitlist');
  var doc = document, obj = { meta: [], taxonomy: [] };
  var item = document.querySelector('#rsvp-list-waitlist li:first-child'),
    subItem = item.querySelector('.figureset-description h5 a');
 
  console.log(subItem.text); // "Sub-menu Item"

  if (subItem.text != "")
    alert(subItem.text + " is the next person who will get to go from the waitlist");
  else 
    alert("Error? Nothing in ; "+subItem.text)
    
  window.prompt("Copy to clipboard: Ctrl+C, Enter", subItem.text);

})(window);