// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "67247": "Altruismo",
    "66901": "Altruismo",
    "66204": "Altruismo",
    "67382": "Amistad",
    "70107": "Amistad",
    "67327": "Amistad",
    "71692": "Isibindi",
    "69915": "Isibindi",
    "70360": "Isibindi",
    "71528": "Nukumori",
    "67274": "Nukumori",
    "65907": "Nukumori",
    "75303": "Nukumori",
    "75623": "Onraka",
    "66501": "Onraka",
    "75407": "Protos",
    "75434": "Protos",
    "74000": "Protos",
    "71671": "Reveur",
    "71306": "Sollevare",
    "70552": "Sollevare",
    "76341": "Sollevare",
    "71519": "Sollevare",
    "75298": "Altruismo",
    "67393": "Altruismo",
    "75302": "Altruismo",
    "75297": "Amistad",
    "71680": "Amistad",
    "75359": "Amistad",
    "75444": "Amistad",
    "75233": "Isibindi",
    "75295": "Isibindi",
    "74008": "Isibindi",
    "75439": "Isibindi",
    "71322": "Nukumori",
    "76422": "Nukumori",
    "66719": "Nukumori",
    "74003": "Onraka",
    "75296": "Onraka",
    "65709": "Onraka",
    "74671": "Protos",
    "70764": "Protos",
    "75299": "Protos",
    "66686": "Reveur",
    "65368": "Sollevare",
    "65721": "Sollevare",
    "66534": "Altruismo",
    "75544": "Altruismo",
    "77324": "Amistad",
    "75308": "Isibindi",
    "66894": "Isibindi",
    "75080": "Nukumori",
    "75148": "Onraka",
    "62890": "Onraka",
    "74490": "Onraka",
    "76169": "Protos",
    "76097": "Protos",
    "65910": "Protos",
    "66168": "Protos",
    "66923": "Reveur",
    "61877": "Reveur",
    "77256": "Reveur",
    "62810": "Reveur",
    "66402": "Reveur",
    "70365": "Reveur",
    "75294": "Sollevare",
    "67281": "Sollevare",
    "70134": "Sollevare",
    "77072": "Altruismo",
    "73666": "Altruismo",
    "75415": "Altruismo",
    "67185": "Amistad",
    "67209": "Amistad",
    "65655": "Amistad",
    "67414": "Amistad",
    "77887": "Isibindi",
    "74005": "Isibindi",
    "69828": "Nukumori",
    "63092": "Nukumori",
    "73851": "Nukumori",
    "78085": "Onraka",
    "70356": "Onraka",
    "70893": "Onraka",
    "66684": "Protos",
    "75102": "Reveur",
    "77410": "Reveur",
    "67269": "Reveur",
    "70361": "Reveur",
    "71001": "Sollevare",
    "65869": "Sollevare",
    "72566": "Altruismo",
    "61892": "Altruismo",
    "63030": "Amistad",
    "73224": "Amistad",
    "63174": "Isibindi",
    "62893": "Isibindi",
    "67300": "Isibindi",
    "71672": "Isibindi",
    "62277": "Nukumori",
    "71675": "Nukumori",
    "74453": "Nukumori",
    "78081": "Nukumori",
    "61749": "Onraka",
    "66029": "Protos",
    "63039": "Protos",
    "62727": "Protos",
    "65467": "Protos",
    "63116": "Protos",
    "71637": "Protos",
    "63198": "Reveur",
    "71573": "Reveur",
    "61868": "Reveur",
    "67339": "Reveur",
    "71662": "Sollevare",
    "66171": "Sollevare",
    "72855": "Altruismo",
    "69430": "Altruismo",
    "71678": "Amistad",
    "66556": "Amistad",
    "58760": "Amistad",
    "61961": "Amistad",
    "70138": "Isibindi",
    "72288": "Isibindi",
    "65396": "Isibindi",
    "61900": "Nukumori",
    "65646": "Nukumori",
    "63014": "Nukumori",
    "71682": "Nukumori",
    "75050": "Nukumori",
    "63196": "Onraka",
    "66018": "Onraka",
    "62993": "Onraka",
    "74452": "Onraka",
    "64233": "Protos",
    "62808": "Protos",
    "71603": "Protos",
    "63121": "Reveur",
    "71592": "Sollevare",
    "72240": "Sollevare",
    "63168": "Altruismo",
    "59268": "Altruismo",
    "67172": "Altruismo",
    "69958": "Altruismo",
    "61750": "Amistad",
    "77149": "Amistad",
    "71679": "Amistad",
    "67390": "Isibindi",
    "73287": "Isibindi",
    "75607": "Nukumori",
    "62964": "Nukumori",
    "62679": "Nukumori",
    "61752": "Onraka",
    "74418": "Onraka",
    "63189": "Onraka",
    "66730": "Onraka",
    "61627": "Protos",
    "65906": "Protos",
    "62745": "Protos",
    "62682": "Reveur",
    "66021": "Reveur",
    "67446": "Reveur",
    "61769": "Sollevare",
    "71668": "Sollevare",
    "71665": "Sollevare",
    "61550": "Altruismo",
    "71622": "Altruismo",
    "63149": "Altruismo",
    "71642": "Altruismo",
    "72979": "Amistad",
    "75364": "Amistad",
    "61967": "Amistad",
    "63127": "Amistad",
    "66728": "Isibindi",
    "63193": "Isibindi",
    "71677": "Isibindi",
    "67400": "Isibindi",
    "71673": "Onraka",
    "69774": "Onraka",
    "66717": "Onraka",
    "71681": "Protos",
    "71661": "Reveur",
    "62596": "Reveur",
    "63099": "Reveur",
    "71632": "Reveur",
    "67193": "Sollevare",
    "65636": "Sollevare",
    "62992": "Sollevare",
    "63075": "Sollevare"
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


