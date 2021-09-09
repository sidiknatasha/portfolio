var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

'use strict';
(function() {

    window.addEventListener('load', init);

    function init() {
        const allBtn = document.getElementById('all');
        const webBtn = document.getElementById('website');
        const mobileBtn = document.getElementById('mobile');
        const researchBtn = document.getElementById('research');
        const designBtn = document.getElementById('design');
        const codeBtn = document.getElementById('code');
        const colorsBtn = document.getElementById('colors');

        allBtn.addEventListener('click', filter);
        webBtn.addEventListener('click', filter);
        mobileBtn.addEventListener('click', filter);
        researchBtn.addEventListener('click', filter);
        designBtn.addEventListener('click', filter);
        codeBtn.addEventListener('click', filter);
        colorsBtn.addEventListener('click', filter);
    }

    /**
     * Filter elements. 
     */
    function filter() {
        // keyword "this" refers to the element which is calling this function.
        // access its id to get the category
        var selection = this.id; 
        var elements = document.getElementsByClassName('filterDiv');
        if (selection === 'all') {
            selection = ''
        }

        // loop through all elements.
        // add class 'show' to elements that are in the category.
        // remove class 'show' from those that are not in the category.
        for (var i = 0; i < elements.length; i++) {
            removeClass(elements[i], 'show');   
            if (elements[i].className.indexOf(selection) > -1) {
                addClass(elements[i], 'show');
            } 
        }

        // add class 'active' to the clicked button
        setActiveButton(this);
    }

    /**
     * Hide the element
     * @param {DOM Element} element 
     * @param {string} name 
     */
    function removeClass(element, name) {
        var classes, classToRemove;
        classes = element.className.split(" ");
        classToRemove = name.split(" ");
        for (var i = 0; i < classToRemove.length; i++) {
            while (classes.indexOf(classToRemove[i]) > -1) {
                classes.splice(classes.indexOf(classToRemove[i]), 1);     
            }
        }
        element.className = classes.join(" ");
    }

    /**
     * Show the element
     * @param {DOM Element} element 
     * @param {string} name 
     */
    function addClass(element, name) {
        var classes, classToAdd;
        classes = element.className.split(" ");
        classToAdd = name.split(" ");
        for (var i = 0; i < classToAdd.length; i++) {
            if (classes.indexOf(classToAdd[i]) == -1) {
                element.className += " " + classToAdd[i];
            }
        }
    }

    /**
     * Set the background color for chosen button.
     * PS: In this method, I used another way to remove and add class.
     *     So you can know more ways to achieve the same task :D
     * @param {DOM Element} element 
     */
    function setActiveButton(element) {
        var activeBtn = document.getElementsByClassName('active');
        for (var i = 0; i < activeBtn.length; i++) {
            activeBtn[i].classList.remove('active')
        }
        element.classList.add("active")
    }
})();