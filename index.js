let second = 0
let minute = 0
let = hour = 0
let interval

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function Start() {
    watch()
    interval = setInterval(watch, 1000)
}

function Pause() {
    clearInterval(interval)
}

function Stop() {
    clearInterval(interval)
    minute = 0
    second = 0
    window.document.getElementById('watch').innerHTML = '00:00:00'
}

function watch() {
    second++
    if (second == 60) {
        minute++
        second = 0
        if (minute == 60) {
            minute = 0
            hour++
        }
    }
    window.document.getElementById('watch').innerHTML = twoDigits(hour) + ':' + twoDigits(minute) + ':' + twoDigits(second)
}