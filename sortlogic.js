// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "John Doe": "Reveur",
    "Jane Smith": "Altruismo",
    // Add all student names and their corresponding houses here
};

const houseAnimations = {
    "Reveur": "<img src='reveur-animation.gif' alt='Reveur Animation'>",
    "Amistad": "<img src='amistad-animation.gif' alt='Amistad Animation'>",
    "Isibindi": "<img src='isibindi-animation.gif' alt='Isibindi Animation'>",
    "Altruismo": "<video width='320' height='240' controls><source src='Animations/altruismo-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Onraka": "<img src='onraka-animation.gif' alt='Onraka Animation'>",
    "Sollevare": "<img src='sollevare-animation.gif' alt='Sollevare Animation'>",
    "Nukumori": "<img src='nukumori-animation.gif' alt='Nukumori Animation'>",
    "Protos": "<img src='protos-animation.gif' alt='Protos Animation'>"
};

function sortStudent() {
    const name = document.getElementById('studentName').value;
    const house = houseAssignments[name] || "Unknown";
    const resultDiv = document.getElementById('result');
    const animationDiv = document.getElementById('animation');

    if (house === "Unknown") {
        resultDiv.innerHTML = "Sorry, your name is not on the list.";
        animationDiv.innerHTML = "";
    } else {
        resultDiv.innerHTML = `Welcome to ${house}!`;
        const videoHtml = `<video id='houseVideo' width='100%' height='100%' controls autoplay><source src='animations/${house.toLowerCase()}-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>`;
        animationDiv.innerHTML = videoHtml;
        
        // Wait for the video to load and then play it in full screen
        const videoElement = document.getElementById('houseVideo');
        videoElement.addEventListener('loadeddata', function() {
            videoElement.requestFullscreen().then(() => {
                videoElement.play();
            });
        });

        // Listen for the end of the video and exit full screen mode
        videoElement.addEventListener('ended', function() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        });
    }
}