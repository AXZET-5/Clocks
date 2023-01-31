function determiner(type, value) {
    switch(type) {
        case 'month':
            switch(value) {
                case 1:
                    return 'January'
                case 2:
                    return 'February'
                case 3:
                    return 'March'
                case 4:
                    return 'April'
                case 5:
                    return 'May'
                case 6:
                    return 'June'
                case 7:
                    return 'July'
                case 8:
                    return 'August'
                case 9:
                    return 'September'
                case 10:
                    return 'October'
                case 11:
                    return 'November'
                case 12:
                    return 'December'
            }
        case 'day':
            switch(value) {
                case 1:
                    return 'Monday'
                case 2:
                    return 'Tuesday'
                case 3:
                    return 'Wednesday'
                case 4:
                    return 'Thursday'
                case 5:
                    return 'Friday'
                case 6:
                    return 'Saturday'
                case 7:
                    return 'Sunday'
            }
    }
}

function refreshTime() {
    // Getting all HTML elements
    const yearDisplay = document.getElementById("year")
    const monthDisplay = document.getElementById("month")
    const dateDisplay = document.getElementById("date")
    const dayDisplay = document.getElementById("day")
    const hourDisplay = document.getElementById("hour")
    const minuteDisplay = document.getElementById("minute")
    const secondDisplay = document.getElementById("second")
    const timezoneDisplay = document.getElementById("timezone")

    // Getting time
    var year = new Date().getYear() + 1900
    var monthRaw = new Date().getMonth() + 1
    var date = new Date().getDate()
    var dayRaw = new Date().getDay()
    var hourRaw = new Date().getHours()
    var minuteRaw = new Date().getMinutes()
    var secondRaw = new Date().getSeconds()
    var timezoneRaw = new Date().getTimezoneOffset() / -60

    // Reformatting month and day
    var month = determiner('month', monthRaw)
    var day = determiner('day', dayRaw)

    // Setting time to 2 significant figures
    if (String(hourRaw).length == 1) {
        var hour = String(0).concat(String(hourRaw)) }
    else {hour = hourRaw}
    if (String(minuteRaw).length == 1) {
        var minute = String(0).concat(String(minuteRaw)) }
    else {minute = minuteRaw}
    if (String(secondRaw).length == 1) {
        var second = String(0).concat(String(secondRaw)) }
    else {second = secondRaw}

    // Reformatting timezone
    if (timezoneRaw >= 0) {
        var timezone = String('+').concat(String(timezoneRaw))}
    else {var timezone = timezoneRaw}

    // Logging to console
    console.log('Writing to page: ', year, month, date, day, hour, minute, second)
    console.log('Timezone: ', timezone)

    // Displaying time on HTML page
    yearDisplay.textContent = year
    monthDisplay.textContent = month
    dateDisplay.textContent = date
    dayDisplay.textContent = day
    hourDisplay.textContent = hour
    minuteDisplay.textContent = minute
    secondDisplay.textContent = second
    timezoneDisplay.textContent = timezone
}

setInterval(refreshTime, 100);