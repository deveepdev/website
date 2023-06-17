const headertabs = document.querySelectorAll('.header-tab')
const bodytabs = document.querySelectorAll('.body-tab')
const activeTab = document.querySelector('.active-tab')
const active = document.querySelector('.active')

function placeActiveTab() {
    activeTab.style.transform = `translateX(${active.getBoundingClientRect().left}px)`
    activeTab.style.width = `${active.getBoundingClientRect().width}px`
    activeTab.style.transition = '0.3s ease-in-out'
}

placeActiveTab()

addEventListener('resize', placeActiveTab)

for (let i = 0; i < headertabs.length; i++) {
    headertabs[i].addEventListener('click', () => {
        headertabs.forEach(tab => tab.classList.remove('active'))
        bodytabs.forEach(tab => tab.classList.remove('body-active'))

        headertabs[i].classList.add('active')
        bodytabs[i].classList.add('body-active')

        const tabRect = headertabs[i].getBoundingClientRect()
        activeTab.style.transform = `translateX(${tabRect.left}px)`
        activeTab.style.width = `${tabRect.width}px`
        activeTab.style.transition = '0.3s ease-in-out'
    })
}