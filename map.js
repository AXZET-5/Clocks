function adjustMap() {
    mapBox = document.getElementById('mapBox')
    height = mapBox.clientHeight;

    hour = document.getElementById('hour').textContent
    minute = document.getElementById('minute').textContent

    singapore = document.getElementById('sg')
    singapore.style.bottom = String(height*0.45).concat('px')
    singapore.style.left = "63%"
    singaporeTime = "SG".concat(': ' + hour + minute + 'h')
    singapore.textContent = singaporeTime

    beijing = document.getElementById('bj')
    beijing.style.bottom = String(height*0.75).concat('px')
    beijing.style.left = "65%"
    beijingTime = "BJ".concat(': ' + hour + minute + 'h')
    beijing.textContent = beijingTime

    tokyo = document.getElementById('tk')
    tokyo.style.bottom = String(height*0.70).concat('px')
    tokyo.style.left = "77%"
    tokyoTime = "TYO".concat(': ' + String(parseInt(hour)+1) + minute + 'h')
    tokyo.textContent = tokyoTime

    seoul = document.getElementById('sl')
    seoul.style.bottom = String(height*0.75).concat('px')
    seoul.style.left = "67%"
    seoulTime = "SU".concat(': ' + String(parseInt(hour)+1) + minute + 'h')
    seoul.textContent = seoulTime

    london = document.getElementById('ld')
    london.style.bottom = String(height*0.95).concat('px')
    london.style.left = "45%"
    londonTime = "LDN".concat(': ' + String(parseInt(hour)-8) + minute + 'h')
    london.textContent = londonTime

    washington = document.getElementById('ws')
    washington.style.bottom = String(height*0.90).concat('px')
    washington.style.left = "25%"
    washingtonTime = "Wash".concat(': ' + String(parseInt(hour)-13) + minute + 'h')
    washington.textContent = washingtonTime

    canberra = document.getElementById('cb')
    canberra.style.bottom = String(height*0.55).concat('px')
    canberra.style.left = "70%"
    canberraTime = "CBR".concat(': ' + String(parseInt(hour)+3) + minute + 'h')
    canberra.textContent = canberraTime
}

setInterval(adjustMap, 10)