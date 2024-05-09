// glitch text

var things = ['coding','knitting','blogging','blogging','blogging','blogging','blogging','designing','planning','writing','writing','writing','writing','writing','writing','writing','programming','programming','programming','programming','programming','concluding','programming','thinking','scripting','scripting','scripting','scripting','scripting','sewing','sketching','ruminating','deliberating','pondering','contemplating','abstracting','abstracting','abstracting','abstracting','abstracting','abstracting','optimising','optimising','optimising','optimising','optimising','optimising','refactoring','refactoring','refactoring','objectifying','simplifying','decoupling','debugging','debugging','debugging','debugging','debugging','debugging','configuring','streamlining','searching','tweaking','editing'];
var junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?','X'];

function randomInt(min, max) {
    return Math.round(min + (Math.random() * (max - min)));
}

function tick() {
    // Glitch effect for the text
    var txt = things[randomInt(0, things.length - 1)];
    var chars = txt.split('');
    var glitch = randomInt(0, 3);
    for (var i = 0; i < glitch; i++) {
        chars[randomInt(0, chars.length - 1)] = junk[randomInt(0, junk.length - 1)];
    }
    txt = chars.join('');
    $('#ing').html(txt);

    // Flickering binary code
    var binaryElement = $('.binary-code');
    var binary = binaryElement.text();
    var flickerCount = 20; // Number of flickers
    var flickerDuration = 150; // Duration of each flicker in milliseconds

    function flickerBinary() {
        setTimeout(function() {
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
    var flickeringBinary = '';
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            flickeringBinary += randomInt(0, 1); // Randomly flicker between 0 and 1
        } else {
            flickeringBinary += randomInt(0, 1);
        }
    }
    return flickeringBinary;
}

tick();
