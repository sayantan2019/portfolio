function updateClock() {
    const now = new Date();
    // const location = new Location()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    const ohours = hours;
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zeros
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    const banner = document.getElementById('clock')
    if(ohours>=17 || ohours<6){
        banner.classList.remove('light-theam');
        banner.classList.add('dark-theam');
    }else{
        banner.classList.remove('dark-theam');
        banner.classList.add('light-theam');
    }

    
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();
    
    const datestring = `${day}, ${date} ${month} ${year}`;


    document.querySelector('.time').textContent = timeString;
    document.querySelector('.date').textContent = datestring;
}

setInterval(updateClock, 1000); // Update time every second
updateClock(); // Initial call to avoid delay


<<<<<<< HEAD
=======
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

function formatdate(date){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let num = date.getDate();

    return `${day} ${month} ${num}, ${year}`;
}

setInterval(()=>{
    let ct = new Date();
    let date = formatdate(ct);
    docoument.getElementByclassName("date").innerHTML = date;
})
>>>>>>> 1c30358cfadcd2b851d2adf7b75707c06b6204a6
