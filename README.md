meetup-whereami
===============

Two Bookmarklets for use with Meetup.com to get information on oversubscribed events. Go to the event page of interest and run the desired bookmarklet script. Warning: Both of these are hacky ways to get the info so they might break when meetup.com decides to change things. 

1.To find your numerical position on the waitlist, run whereami.js :
Add this bookmark:
```javascript
javascript:(function(a){var b=a.createElement("script");b.src="https://raw.github.com/larsericsson/meetup-whereami/master/whereami.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);
```

This gives you a rough estimate on where you are on the waitlist. It doesn't account for +1's right now.

1a.Known bug: If your name appears on the page in a comment but on neither the going or waitlist people, the script says "you're going."
1b.To permanently install a bookmarklet on Firefox, merely drag the below code to the bookmarklet menu.

2.If you cancel on the same day, thus offering up your position, it is courteous to leave a comment advising next person in line. To copy that person's name, run whonext.js : 
```javascript
javascript:(function(a){var b=a.createElement("script");b.src="https://raw.github.com/AnneTheAgile/meetup-whereami/master/whonext.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);
```

2a.NB: The URL's differ for [2] vs [1] because AnneTheAgile's pull request is pending.

3.For your testing pleasure, three NYC groups whose events are often oversubscribed are:
http://www.meetup.com/nycpython/
http://www.meetup.com/NYC-Machine-Learning/
http://www.meetup.com/nychtml5/



