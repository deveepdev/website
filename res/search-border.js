const search = document.querySelector('.search-input')
const searchFocus = document.querySelector('.search-focus')

function placeSearchFocus() {
    searchFocus.style.top = `${search.getBoundingClientRect().top + search.getBoundingClientRect().height}px`
    searchFocus.style.left = `${search.getBoundingClientRect().left}px`
}

placeSearchFocus()

addEventListener('resize', placeSearchFocus)

search.addEventListener('focus', () => {
    searchFocus.style.width = `${search.getBoundingClientRect().width}px`
})

search.addEventListener('focusout', () => {
    searchFocus.style.width = '0px'
})