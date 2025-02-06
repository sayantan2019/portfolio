// Smooth Scrolling for Internal Links
document.querySelectorAll('.right a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); // Prevent default jump to section
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Separate Functionality for Navigation Links
document.querySelector(".home-link").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Navigating to Home Page");
    window.location.href = this.href;
});

// Separate Functionality for Logout Button
document.querySelector(".logout-link").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Logging out...");
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = this.href;
});
