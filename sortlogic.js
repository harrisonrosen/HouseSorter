// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "75303": "Nukumori",
    "66204": "Altruismo",
    "63127": "Amistad",
    "51248": "Amistad",
    "71679": "Amistad",
    "65906": "Protos",
    "65905": "Amistad",
    "52539": "Amistad",
    "52541": "Onraka",
    "63251": "Onraka",
    "62679": "Reveur",
    "73666": "Altruismo",
    "75080": "Nukumori",
    "70361": "Reveur",
    "57950": "Amistad",
    "59064": "Isibindi"
    // Add all student names and their corresponding houses here
};

const houseAnimations = {
    "Reveur": "<video width='320' height='240' controls><source src='Animations/reveur-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Amistad": "<video width='320' height='240' controls><source src='Animations/amistad-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Isibindi": "<video width='320' height='240' controls><source src='Animations/isibindi-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Altruismo": "<video width='320' height='240' controls><source src='Animations/altruismo-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Onraka": "<video width='320' height='240' controls><source src='Animations/onraka-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Sollevare": "<video width='320' height='240' controls><source src='Animations/sollevare-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Nukumori": "<video width='320' height='240' controls><source src='Animations/nukumori-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
    "Protos": "<video width='320' height='240' controls><source src='Animations/protos-animation.mp4' type='video/mp4'>Your browser does not support the video tag.</video>"
};

function sortStudent() {
    const name = document.getElementById('studentName').value;
    const house = houseAssignments[name] || "Unknown";
    const resultDiv = document.getElementById('result');
    const animationDiv = document.getElementById('animation');

    if (house === "Unknown") {
        resultDiv.innerHTML = "Oh no! Your name was spelled incorrectly, please try again!";
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

        // Reload the page when the video ends
        videoElement.addEventListener('ended', function() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            // Reload the page for the next student
            setTimeout(() => {
                location.reload();
            }, 1000); // Wait for a short period to ensure the fullscreen exit animation completes
        });
    }
}


