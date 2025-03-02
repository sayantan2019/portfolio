let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let days = document.getElementById("days");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");




setInterval(() => {
    let ct = new Date();

    hr.innerHTML = (ct.getHours() % 12 || 12 < 10 ? "0" : "") + ct.getHours()
    min.innerHTML = (ct.getMinutes() < 10 ? "0" : "") + ct.getMinutes()
    sec.innerHTML = (ct.getSeconds() < 10 ? "0" : "") + ct.getSeconds()
    ampm.innerHTML = ct.getHours() < 12 ? "am" : "pm"

},1000)

days.innerHTML = ct.getDay();
date.innerHTML = ct.getDate();
month.innerHTML = ct.getMonth();
year.innerHTML = ct.getFullYear();
