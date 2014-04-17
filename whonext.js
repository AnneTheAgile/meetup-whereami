(function(window) {
  // was var $waitlistEl = $('#rsvp-list-waitlist');
  var doc = document, obj = { meta: [], taxonomy: [] };
  var item = document.querySelector('#rsvp-list-waitlist li:first-child'),
    subItem = item.querySelector('.figureset-description h5 a');
 
  console.log(subItem.text); // "Sub-menu Item"


  if (subItem.text != "") {
    var x = "I am cancelling, so now "+ subItem.text +" gets to go."; 
    //Example; I am cancelling, so now Anne gets to go.
    alert(subItem.text + " is the next person who will get to go from the waitlist\n" + "Copy and paste this as a comment\n" + x);
    }
  else 
    alert("Error? Nothing in ; "+subItem.text)

})(window);