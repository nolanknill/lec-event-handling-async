
// Listen for a mousemove event
document.addEventListener("mousemove", function(event) {
    console.log("Mouse is moving");
    // console.log(event);
});

// How can we listen for a click event on our h1.page-title?
const pageTitleEl = document.querySelector(".page-title");

pageTitleEl.addEventListener("click", function(event){
    // console.log("Title is clicked");
    console.log(event);
});

const inputEl = document.querySelector(".input-example");
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert(event.target.value);
    }
    
})


// Get the element
const formEl = document.getElementById("form-example");

// Decide the event (submit)
formEl.addEventListener("submit", function(event) {
    // handle the event (also prevent default for form submission)
    event.preventDefault();

    console.log(event.target["input-example"].value);

    event.target.reset();
})



const navEl = document.querySelector(".nav");
navEl.addEventListener("click", function(event) {
    navEl.classList.add("nav--active");
})

const navItems = document.querySelectorAll(".nav__item");

for (let i = 0; i < navItems.length; i++) {
    let navItemEl = navItems[i];

    navItemEl.addEventListener("click", function(event) {

        /* Pseudocode for only having one selected */

        // What elements do we want to set to default?

        // What does default mean? Remove nav__item--active class from any elements that already have the nav__item--active
        const activeEl = document.querySelector(".nav__item--active");
        if (activeEl !== null) {
            activeEl.classList.remove("nav__item--active");
        }

        navItemEl.classList.toggle("nav__item--active");

        event.stopPropagation();
    })
}
