function showUl(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var currentValue = element.style[propertyName]; // Get the current value of the CSS property
    var newValue = currentValue === 'none' ? 'flex' : 'none'; // Toggle the value to the opposite color
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}

function changeCSSProperty(elementId, propertyName) {
    var element = document.getElementById(elementId); // Get the element by ID
    var screenWidth = window.innerWidth; // Get the screen width
    var newValue = screenWidth > 879 ? 'none' ? 'none' : 'flex': 'none'; // Set the new value based on the screen width
  
    element.style[propertyName] = newValue; // Set the CSS property value to the new value
}

window.addEventListener('resize', function() {
    changeCSSProperty('humb-menu', 'display');
});





// @media screen and (max-width: 1079px) {

// }
// @media screen and (max-width: 747px) {

// }
// @media screen and (max-width: 545px) {

// }
// @media screen and (max-width: 509px) {

// }
// @media screen and (max-width: 478px) {

// }
// @media screen and (max-width: 377px) {

// }
// @media screen and (max-width: 339px) {

// }