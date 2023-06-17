const options = document.querySelector('.header-options')
const optionsmenu = document.querySelector('.options-menu')
const toggleswitches = document.querySelectorAll('.toggle-switch')

const canvas1 = document.querySelector('.canvas')

options.addEventListener('click', () => {
    optionsmenu.classList.toggle('options-menu-active')
})

function updateStates() {
    if (activeSwitch(0)) canvas1.classList.add('canvas-active'); else canvas1.classList.remove('canvas-active')
    if (activeSwitch(1)) document.body.classList.add('body-image'); else document.body.classList.remove('body-image')
    if (activeSwitch(2)) optionsmenu.classList.add('transparent'); else optionsmenu.classList.remove('transparent')
}

updateStates()

toggleswitches.forEach(switchtoggle => {
    switchtoggle.addEventListener('click', () => {
        if (!switchtoggle.classList.contains('unrendered')) {
            switchtoggle.classList.toggle('toggle-switch-active');
        }

        updateStates()
    })
})

function activeSwitch(toggle) {
    if (toggleswitches[toggle].classList.contains('toggle-switch-active')) return true; else return false;
}