// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "62325": "Amistad",
    "62332": "Isibindi",
    "55974": "Isibindi",
    "62920": "Isibindi",
    "59523": "Nukumori",
    "60323": "Nukumori",
    "62260": "Nukumori",
    "56048": "Nukumori",
    "62654": "Nukumori",
    "60375": "Nukumori",
    "59779": "Onraka",
    "59806": "Onraka",
    "62623": "Onraka",
    "58250": "Onraka",
    "55062": "Protos",
    "62721": "Protos",
    "62310": "Protos",
    "60496": "Protos",
    "58272": "Reveur",
    "62265": "Reveur",
    "60288": "Reveur",
    "68639": "Reveur",
    "55975": "Reveur",
    "61594": "Reveur",
    "75047": "Reveur",
    "59496": "Altruismo",
    "57598": "Altruismo",
    "73540": "Altruismo",
    "56962": "Altruismo",
    "56061": "Altruismo",
    "62326": "Amistad",
    "67561": "Amistad",
    "55706": "Isibindi",
    "64432": "Isibindi",
    "68175": "Isibindi",
    "62262": "Nukumori",
    "69284": "Nukumori",
    "56026": "Onraka",
    "66706": "Onraka",
    "74749": "Onraka",
    "59872": "Onraka",
    "52443": "Protos",
    "73655": "Protos",
    "62335": "Protos",
    "62464": "Protos",
    "62676": "Reveur",
    "66882": "Reveur",
    "62505": "Reveur",
    "62478": "Reveur",
    "55222": "Sollevare",
    "62339": "Altruismo",
    "63216": "Altruismo",
    "60335": "Altruismo",
    "58031": "Amistad",
    "62340": "Amistad",
    "63230": "Amistad",
    "59664": "Amistad",
    "56151": "Amistad",
    "62620": "Amistad",
    "57622": "Isibindi",
    "62324": "Isibindi",
    "64881": "Isibindi",
    "62328": "Nukumori",
    "59648": "Nukumori",
    "59403": "Onraka",
    "56967": "Onraka",
    "62859": "Protos",
    "57760": "Protos",
    "55129": "Protos",
    "57629": "Protos",
    "52448": "Revuer",
    "57626": "Reveur",
    "77047": "Sollevare",
    "62160": "Sollevare",
    "56137": "Sollevare",
    "62333": "Altruismo",
    "55977": "Altruismo",
    "60270": "Altruismo",
    "63944": "Altruismo",
    "59597": "Amistad",
    "55196": "Amistad",
    "60362": "Amistad",
    "62719": "Amistad",
    "64971": "Isibindi",
    "58496": "Isibindi",
    "69438": "Isibindi",
    "62434": "Nukumori",
    "56067": "Nukumori",
    "63251": "Onraka",
    "77153": "Onraka",
    "57947": "Onraka",
    "62873": "Protos",
    "57011": "Reveur",
    "54117": "Reveur",
    "60104": "Reveur",
    "55154": "Reveur",
    "67562": "Sollevare",
    "55226": "Sollevare",
    "55668": "Sollevare",
    "62557": "Sollevare"
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


