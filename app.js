// Information

// classList - shows/gets all classes
// contains - check classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links')
const toggleButton = document.querySelector('.nav-toggle')

toggleButton.addEventListener('click', () => {
    links.classList.toggle("show-links");
})

