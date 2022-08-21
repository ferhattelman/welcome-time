function updateClock() {

    var now = new Date();
    var day = now.getDay();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    pe = "AM";

    if (hours > 12) {
        hours = hours - 12;
        pe = "PM";
    }
    var ho = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["day", "hours", "minutes", "seconds", "period"];
    var values = [days[day], ho[hours], minutes, seconds, pe];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock", 1000);
}