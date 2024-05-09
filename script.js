// Glitch text

const things = ['coding', 'knitting', 'blogging', 'designing', 'planning', 'writing', 'programming', 'concluding', 'thinking', 'scripting', 'sewing', 'sketching', 'ruminating', 'deliberating', 'pondering', 'contemplating', 'abstracting', 'optimising', 'refactoring', 'objectifying', 'simplifying', 'decoupling', 'debugging', 'configuring', 'streamlining', 'searching', 'tweaking', 'editing'];
const junk = ['#', '@', '%', '*', '&amp;', '&lt;', '&gt;', '_', '=', '+', '[', ']', '|', '-', '!', '?', 'X'];

const audio = new Audio('audio.mp3');
audio.muted = true;
audio.addEventListener("audio", () => {
    audio.play();
});

function randomInt(min, max) {
    return Math.round(min + (Math.random() * (max - min)));
}

function tick() {
    // Glitch effect for the text
    let txt = things[randomInt(0, things.length - 1)];
    let chars = txt.split('');
    const glitch = randomInt(0, 3);
    for (let i = 0; i < glitch; i++) {
        chars[randomInt(0, chars.length - 1)] = junk[randomInt(0, junk.length - 1)];
    }
    txt = chars.join('');
    $('#ing').html(txt);

    // Flickering binary code
    const binaryElement = $('.binary-code');
    const binary = binaryElement.text();
    let flickerCount = 20; // Number of flickers
    const flickerDuration = 150; // Duration of each flicker in milliseconds

    function flickerBinary() {
        setTimeout(function () {
            binaryElement.text(generateFlickeringBinary(binary));
            flickerCount--;
            if (flickerCount > 0) {
                flickerBinary();
            } else {
                // Set final state of binary code
                binaryElement.text(binary);
            }
        }, flickerDuration);
    }

    flickerBinary();
}

function generateFlickeringBinary(binary) {
    let flickeringBinary = '';
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            flickeringBinary += randomInt(0, 1); // Randomly flicker between 0 and 1
        } else {
            flickeringBinary += randomInt(0, 1);
        }
    }
    return flickeringBinary;
}

tick();

// Add event listener to the button
document.getElementById("interactBtn").addEventListener("click", function() {
    audio.muted = false;
    audio.play();
});
