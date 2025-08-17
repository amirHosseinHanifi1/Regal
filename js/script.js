var mobile_header_button = document.querySelector('.mobile-header-button-3')
var desktop_header_nav_bar_2 = document.querySelector('.desktop-header-nav-bar-2')


mobile_header_button.addEventListener('click', () => {
    document.querySelector('.mobile-header-button-3 > img').setAttribute('src', '../icon/close-icon.svg')
    document.querySelector('.mobile-nav-bar').classList.remove('hidden')
    mobile_header_button.addEventListener('click', () => {
        document.querySelector('.mobile-header-button-3 > img').setAttribute('src', '../icon/menu.svg')
        document.querySelector('.mobile-nav-bar').classList.add('hidden')
    })
})

desktop_header_nav_bar_2.addEventListener('mouseenter', () => {
    document.querySelector('.desktop-sorting-nav-bar').classList.remove('hidden')
    desktop_header_nav_bar_2.classList.add('bg-[var(--color-gray-5)]')
    document.querySelector('.desktop-sorting-nav-bar').addEventListener('mouseleave', () => {
        document.querySelector('.desktop-sorting-nav-bar').classList.add('hidden')
        desktop_header_nav_bar_2.classList.remove('bg-[var(--color-gray-5)]')
    })
})