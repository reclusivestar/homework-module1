// Create a time data function
function currentTime() {
    // Declare variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // Declare empty variable to store AM or PM

    // Get the time zone using Intl.DateTimeFormat
    var timeZoneFull = Intl.DateTimeFormat().resolvedOptions().timeZone;

    var timeZoneMap = {
        "America/New_York": "ET",  // Eastern Time
        "America/Chicago": "CT",   // Central Time
        "America/Denver": "MT",    // Mountain Time
        "America/Los_Angeles": "PT", // Pacific Time
        "UTC": "GMT"              // GMT/UTC
    };

    // Determine the time zone based on the full time zone name
    var timeZone = timeZoneMap[timeZoneFull] || "Unknown";

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; // Set to PM
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; // Set to PM
    } else {
        ampm = "AM"; // Set to AM
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // Adding time 
    setTimeout(currentTime, 1000);
}

currentTime();

var partners = [
    { src: 'images/partners/partner-bustour.png', alt: 'Partner Bus Tours' },
    { src: 'images/partners/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
    { src: 'images/partners/partner-campingadv.png', alt: 'Partner Camping Adventure' },
    { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
    { src: 'images/partners/partner-rentalbike.png', alt: 'Partner Bike Rentals' },
    { src: 'images/partners/partner-tourgroup.png', alt: 'Partner Tour Group' }
];

var partnersList = '';

for (var i = 0; i < partners.length; i++) {
    partnersList += `
        <li class="partner">
            <img src="${partners[i].src}" alt="${partners[i].alt}">
        </li>`;
}
document.getElementById('partners').innerHTML = partnersList;