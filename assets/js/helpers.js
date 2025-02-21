function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function formatElgeisDate(unixTimestamp) {
    const realDate = new Date(unixTimestamp * 1000);

    const yearOffset = 2018; // August 30, 2018 = Year 1
    const newYearMonth = 7;  // August (zero-based index)
    const newYearDay = 30;

    // Determine the custom year
    let customYear = realDate.getFullYear() - yearOffset + 1;
    const newYear = new Date(realDate.getFullYear(), newYearMonth, newYearDay);

    if (realDate < newYear) {
        customYear -= 1;
    }

    // Get month name and day with suffix
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[realDate.getMonth()];
    const day = realDate.getDate();
    const suffix = getDaySuffix(day);

    return `${month} ${day}${suffix}, Year ${customYear}`;
}

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}


const els = document.getElementsByClassName("to-elgeis-time");
for (let el of els) {
    el.textContent = formatElgeisDate(el.textContent);
}