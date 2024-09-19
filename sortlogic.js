// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "51963": "Altruismo",
    "58767": "Altruismo",
    "54924": "Amistad",
    "58910": "Amistad",
    "55009": "Amistad",
    "58697": "Isibindi",
    "65856": "Isibindi",
    "59181": "Isibindi",
    "58858": "Nukumori",
    "58737": "Nukumori",
    "64945": "Onraka",
    "58740": "Onraka",
    "53679": "Onraka",
    "66329": "Onraka",
    "54249": "Protos",
    "51275": "Protos",
    "51288": "Reveur",
    "62003": "Sollevare",
    "60806": "Sollevare",
    "53054": "Sollevare",
    "55034": "Sollevare",
    "54917": "Altruismo",
    "58223": "Altruismo",
    "53934": "Altruismo",
    "51302": "Altruismo",
    "60484": "Amistad",
    "52539": "Amistad",
    "55092": "Amistad",
    "55638": "Nukumori",
    "52541": "Onraka",
    "55002": "Onraka",
    "60457": "Onraka",
    "57590": "Protos",
    "55007": "Protos",
    "59016": "Reveur",
    "69420": "Reveur",
    "59870": "Reveur",
    "58055": "Reveur",
    "73055": "Reveur",
    "51500": "Reveur",
    "58711": "Reveur",
    "69423": "Sollevare",
    "55045": "Sollevare",
    "64531": "Altruismo",
    "61021": "Altruismo",
    "58753": "Altruismo",
    "58696": "Altruismo",
    "56848": "Amistad",
    "58880": "Amistad",
    "58721": "Amistad",
    "58724": "Amistad",
    "57930": "Isibindi",
    "59865": "Isibindi",
    "58925": "Isibindi",
    "58792": "Isibindi",
    "62105": "Nukumori",
    "58859": "Nukumori",
    "52612": "Nukumori",
    "74328": "Onraka",
    "52009": "Protos",
    "56847": "Reveur",
    "56130": "Reveur",
    "58965": "Sollevare",
    "58769": "Sollevare",
    "48785": "Altruismo",
    "55037": "Altruismo",
    "54920": "Amistad",
    "58804": "Isibindi",
    "60586": "Isibindi",
    "48614": "Isibindi",
    "58723": "Isibindi",
    "58120": "Nukumori",
    "69416": "Nukumori",
    "54994": "Nukumori",
    "55113": "Nukumori",
    "55030": "Nukumori",
    "55109": "Onraka",
    "52902": "Onraka",
    "72823": "Onraka",
    "53636": "Protos",
    "53349": "Protos",
    "51170": "Protos",
    "58927": "Protos",
    "49256": "Protos",
    "60953": "Reveur",
    "54943": "Sollevare",
    "52657": "Sollevare",
    "59272": "Amistad",
    "69306": "Amistad",
    "58058": "Amistad",
    "70432": "Isibindi",
    "66818": "Isibindi",
    "58064": "Isibindi",
    "66814": "Isibindi",
    "74339": "Nukumori",
    "66866": "Onraka",
    "74835": "Protos",
    "76640": "Protos",
    "75197": "Protos",
    "58843": "Protos",
    "69373": "Protos",
    "59603": "Reveur",
    "66822": "Reveur",
    "63181": "Reveur",
    "58815": "Sollevare",
    "66808": "Sollevare",
    "58672": "Sollevare",
    "66147": "Nukumori",
    "57009": "Altruismo",
    "66813": "Altruismo",
    "68998": "Amistad",
    "67870": "Amistad",
    "58638": "Amistad",
    "59638": "Isibindi",
    "65640": "Isibindi",
    "66979": "Isibindi",
    "66807": "Nukumori",
    "63179": "Nukumori",
    "60397": "Nukumori",
    "66861": "Onraka",
    "66950": "Onraka",
    "66810": "Onraka",
    "59577": "Protos",
    "66811": "Reveur",
    "66816": "Reveur",
    "66885": "Reveur",
    "66809": "Sollevare",
    "66878": "Sollevare",
    "63065": "Sollevare",
    "66812": "Sollevare",
    "63074": "Protos",
    "58759": "Altruismo",
    "58321": "Altruismo",
    "61774": "Amistad",
    "58809": "Amistad",
    "60307": "Amistad",
    "55744": "Isibindi",
    "62885": "Nukumori",
    "74341": "Nukumori",
    "56075": "Nukumori",
    "63061": "Onraka",
    "59683": "Onraka",
    "57699": "Protos",
    "59630": "Protos",
    "65408": "Protos",
    "74254": "Reveur",
    "69296": "Reveur",
    "61820": "Reveur",
    "59558": "Sollevare",
    "75056": "Sollevare",
    "66025": "Altruismo",
    "67478": "Protos",
    "66817": "Altruismo",
    "57995": "Altruismo",
    "62173": "Altruismo",
    "59900": "Altruismo",
    "70118": "Altruismo",
    "68871": "Amistad",
    "58024": "Isibindi",
    "73084": "Isibindi",
    "59090": "Isibindi",
    "60020": "Nukumori",
    "59763": "Nukumori",
    "73144": "Onraka",
    "66973": "Onraka",
    "66997": "Onraka",
    "65471": "Onraka",
    "66949": "Onraka",
    "61884": "Protos",
    "75362": "Protos",
    "61768": "Reveur",
    "37847": "Reveur",
    "62308": "Sollevare",
    "65847": "Altruismo",
    "58617": "Protos",
    "50376": "Isibindi",
    "70120": "Amistad",
    "54368": "Amistad",
    "59566": "Reveur",
    "60350": "Sollevare",
    "52911": "Sollevare",
    "54806": "Reveur",
    "58800": "Protos",
    "66150": "Altruismo",
    "65905": "Amistad",
    "61589": "Nukumori",
    "62639": "Reveur",
    "62729": "Sollevare",
    "62080": "Amistad",
    "77696": "Onraka",
    "75207": "Onraka",
    "70508": "Reveur"



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


