// Declare the values for each project's tag
// Development
let ripples = ["iOS App", "SwiftUI", "SpriteKit"];
let noBreak = ["iOS App", "UI Kit", "SpriteKit"];

// Design
let pucAcolhe = ["App Design", "UX/UI", "Mental health"];
let bimo = ["iOS App Design", "UX/UI", "Journaling"];
let dux = ["App Design", "UX/UI", "Digital nomads"];
let petMatch = ["App Design", "Usability testing", "Pet adoption"];

// Function declaration
function addTags(list, elementId) {
    let container = document.getElementById(elementId);

    console.log(container);

    list.forEach(item => {
        let span = document.createElement('span');
        span.textContent = item;
        span.className = 'badge badge-light badges text-dark';   
        container.appendChild(span);
    });
}

// Function execution
addTags(ripples, 'ripplesProject');
addTags(noBreak, 'noBreakProject');

// Collapse scroll
var initialScrollPosition;

// Ripples
$('#collapseRipples').on('show.bs.collapse', function () {
initialScrollPosition = window.scrollY;
});

// Function to handle collapse close event
$('#collapseRipples').on('hidden.bs.collapse', function () {
// Scroll back to the initial position
window.scrollTo(0, initialScrollPosition);
});

// No Break
$('#collapseNoBreak').on('show.bs.collapse', function () {
    initialScrollPosition = window.scrollY;
    });

$('#collapseNoBreak').on('hidden.bs.collapse', function () {
window.scrollTo(0, initialScrollPosition);
});