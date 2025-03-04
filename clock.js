function updateClock() {
    const now = new Date();
    // const location = new Location()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    const ohours = hours;
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zeros
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    const banner = document.getElementById('banner')
    const edu = document.getElementById('education')
    const about = document.getElementById('text-box')
    if(ohours>=17 || ohours<6){
        banner.classList.add('dark-theam');
        edu.classList.add('dark-theam');
        about.classList.add('dark-theam');
    }else{
        
        banner.classList.remove('dark-theam');
        edu.classList.add('dark-theam');
        about.classList.add('dark-theam');
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


