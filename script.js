let slider = document.querySelector('.slider');
let sliderImages = slider.children[0].children;
let sliderButtons = slider.children[1].children;
let toolsForm = document.querySelector('.tools_form');

let addClass = 0;
let removeClass = 0;
let intervalId;

sliderImages[addClass].classList.add('active');



function classChanger() {
    sliderImages[addClass].classList.add('active');
    sliderImages[removeClass].classList.remove('active');
}

function next() {
    if (addClass < sliderImages.length - 1) {
        addClass++;
        removeClass = addClass - 1;
        classChanger()
    } else {
        if (toolsForm.loop.checked) {
            addClass = 0;
            removeClass = sliderImages.length - 1;
            classChanger()
        }
    }

}

sliderButtons[1].addEventListener('click', () => {
    next()
})

function prev() {
    if (addClass > 0) {
        addClass--;
        removeClass = addClass + 1;
        classChanger()
    } else {
        if (toolsForm.loop.checked) {
            removeClass = 0;
            addClass = sliderImages.length - 1;
            classChanger()
        }
    }

}

sliderButtons[0].addEventListener('click', () => {
    prev()
})

function autoPlay(delay = 2000) {
    return setInterval(() => {
        next()
    }, delay)
}


function changer() {
    clearInterval(intervalId)
    if (toolsForm.time.checked) {
        intervalId = autoPlay(Number(toolsForm.timeValue.value))
    }

}

toolsForm.time.addEventListener('change', changer)
toolsForm.timeValue.addEventListener('change', changer)
