// sortlogic.js

// Predefined list of house assignments
const houseAssignments = {
    "Remley McCluskey": "Reveur",
    "Josey Bockhold": "Reveur",
    "Glen Williams": "Reveur",
    "Isabella Eger": "Reveur",
    "Mae Thomas": "Reveur",
    "Teagan Woolson" : "Reveur",
    "Elizza Breckenkamp": "Reveur",
    "Ava-Le Ruby": "Reveur",
    "Melody Shear": "Reveur",
    "Claire Cook": "Reveur",
    "Bentley Squires": "Reveur",
    "Tripp Snyder": "Reveur",
    "Lynlee Pratt": "Reveur",
    "Layne Fanning": "Reveur",
    "Hailey Lentz": "Altruismo",
    "Alex Herren": "Altruismo",
    "Samurai Edlemon": "Altruismo",
    "Kelci Rowsey": "Altruismo",
    "Chase Dolieslager": "Altruismo",
    "Alex Tietsort": "Altruismo",
    "Kamrin McIntire": "Altruismo",
    "Jessica Weber": "Altruismo",
    "Kash Merida": "Altruismo",
    "Raleigh Strahan": "Altruismo",
    "Braden Harris": "Altruismo",
    "Dacion Monroe": "Altruismo",
    "Tristan Hildenbrand": "Onraka",
    "James Calaway": "Onraka",
    "Tori Otney": "Onraka",
    "Olivus Heather": "Onraka",
    "Nathan Valles-Peters": "Onraka",
    "Addilynn Hunt": "Onraka",
    "Ella Burton": "Onraka",
    "Millie Krigbaum": "Onraka",
    "Kate Carlson": "Onraka",
    "Serenity Jones": "Onraka",
    "Rube Powell": "Onraka",
    "Arrion Bloodson": "Onraka",
    "Ryatt Turner": "Onraka",
    "Devin Caley": "Onraka",
    "Josiah Smith": "Nukumori",
    "Jaxon Barry": "Nukumori",
    "Khloe Bassett": "Nukumori",
    "Lucy Hammer": "Nukumori",
    "Colton Cook": "Nukumori",
    "Blaze Hurley": "Nukumori",
    "Trenton Newendyke": "Nukumori",
    "Claire Morrison": "Nukumori",
    "Cailee Peters": "Nukumori",
    "Porsha Covington": "Nukumori",
    "Arden Tierney": "Nukumori",
    "James Buckner": "Nukumori",
    "Bentley Paetow": "Nukumori",
    "Elliot Stratton": "Amistad",
    "Jaidon Gay": "Amistad",
    "Lindyn Lair": "Amistad",
    "Will Easterling": "Amistad",
    "Tai'Lyn Manus": "Amistad",
    "Ellianna Fisher": "Amistad",
    "Klinton Daniels": "Amistad",
    "Aubri McCarty": "Amistad",
    "Elizabeth DeVerger": "Amistad",
    "Malia Hollensteiner": "Amistad",
    "Cameron Fish": "Amistad",
    "Joshua Brown": "Amistad",
    "John Harlow": "Amistad",
    "Dallas Smith": "Amistad",
    "Emma Hampsmire": "Sollevare",
    "Marryn McCabe": "Sollevare",
    "Annie Weiske": "Sollevare",
    "Barret Knight": "Sollevare",
    "Abi Bond": "Sollevare",
    "Kaedon Smith": "Sollevare",
    "Evelyn Burton": "Sollevare",
    "Ronald Owsley": "Sollevare",
    "Alyvia Hendrickson": "Sollevare",
    "Kennedy Scott": "Sollevare",
    "Aria Courtney": "Sollevare",
    "Dagyn Peyton": "Sollevare",
    "Archer Wiemelt": "Sollevare",
    "Alex Peters": "Sollevare",
    "Ariyah Winebrinner": "Isibindi",
    "Zain Ali": "Isibindi",
    "Haley Bates": "Isibindi",
    "Noah Bradford": "Isibindi",
    "Connor Roland": "Isibindi",
    "Gabe Zehnle": "Isibindi",
    "Parker Steffen": "Isibindi",
    "Kellan Mooney": "Isibindi",
    "Grant Mast": "Isibindi",
    "Ellen May": "Isibindi",
    "Lyza Carlin": "Isibindi",
    "Kaden Kamphaus": "Isibindi",
    "Kat Daggett": "Protos",
    "King Jones": "Protos",
    "August Holzgrafe": "Protos",
    "Gabe Crowell": "Protos",
    "Haven Warner": "Protos",
    "Alberto Barrera-Rincon": "Protos",
    "Grayson Wedding": "Protos",
    "Piper Kuhn": "Protos",
    "Silas Spidle": "Protos",
    "Karigen Wells": "Protos",
    "Sevyn Bailey": "Protos",
    "Jace Vaughn": "Protos",
    "Isla Young": "Protos"

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


