import chalkAnimation from 'chalk-animation';

/* chalkAnimation.rainbow('Lorem ipsum dolor sit amet'); */

// Start and Stop
/* const rainbow = chalkAnimation.rainbow('Lorem ipsum'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 2000);

setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 1000); */


// Automatic stop
// Anything printed to the console will stop the previous animation automatically

//// Variationen --------RAINBOW--------------------------
chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
setTimeout(() => {
    // Stop the 'Lorem ipsum' animation, then write on a new line.
    console.log("weiter geht`s....");
}, 1000);


// // ---PULSE
/* chalkAnimation.pulse('Lorem ipsum dolor sit amet');
setTimeout(() => {
    console.log("weiter geht`s....");
}, 5000);
 */


// // ---RADAR
/* chalkAnimation.radar('Lorem ipsum dolor sit amet');
setTimeout(() => {
    console.log("weiter geht`s....");
}, 5000); */


// // ---KARAOKE
/* chalkAnimation.karaoke('Lorem ipsum dolor sit amet');
setTimeout(() => {
    console.log("weiter geht`s....");
}, 5000); */

// Changing speed
// Change the animation speed using a second parameter. Should be greater than 0, default is 1.

/* chalkAnimation.rainbow('Lorem ipsum', 2); // Two times faster than default */


// Changing text
// Change the animated text seamlessly with replace()

/* let str = 'Loading...';
const rainbow = chalkAnimation.rainbow(str);

// Add a new dot every second
setInterval(() => {
	rainbow.replace(str += '.');
}, 5000); */


// Manual rendering
// Manually render frames with render(), or get the content of the next frame with frame()

/* const rainbow = chalkAnimation.rainbow('Lorem ipsum').stop(); // Don't start the animation

rainbow.render(); // Display the first frame

const frame = rainbow.frame(); // Get the second frame
console.log(frame); */


// Available animations
// rainbow
// pulse
// glitch
// radar
// neon
// karaoke