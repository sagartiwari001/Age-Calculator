document.querySelector("#submit").addEventListener("click", function
    () {
    const update = function () {
        let dob = document.querySelector("#dob").value,
            day = new Date(dob),
            time = day.getTime(),
            today = new Date(),
            timenow = today.getTime(),
            value = timenow - time,
            sec = Math.floor(value / (1000)),
            mins = Math.floor(value / (1000 * 60)),
            hours = Math.floor(value / (1000 * 60 * 60)),
            days = Math.floor(value / (1000 * 60 * 60 * 24)),
            weeks = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            months = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

        let insert = function (x, y) {
            document.querySelector(x).innerHTML = y;
        }
        insert("#year", year + " <- Years");
        insert("#months", months + " <- Months");
        insert("#weeks", weeks + " <- Week");
        insert("#days", days + " <- Days");
        insert("#hours", hours + " <- Hours");
        insert("#mins", mins + " <- Minutes");
        insert("#sec", sec + " <- Seconds");
    }
    setInterval(update, 1000);
})


