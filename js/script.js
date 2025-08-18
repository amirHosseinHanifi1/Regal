var mobile_header_button = document.querySelector('.mobile-header-button-3')
var search_button_desktop = document.querySelector('.search-button')
var close_desktop_search_button = document.querySelector('.close-search-page-desktop')
var desktop_sorting_navbar_button = document.querySelector('.desktop-sorting-navbar-button')


mobile_header_button.addEventListener('focus', () => {
    document.querySelector('.mobile-header-button-3 > img').setAttribute('src', '../icon/close-icon.svg')
    document.querySelector('.mobile-nav-bar').classList.remove('opacity-0')
    document.querySelector('.mobile-nav-bar').classList.add('opacity-100')

    document.querySelector('.dark-screen').classList.remove('hidden')
    document.querySelector('.dark-screen').classList.remove('opacity-0')
    document.querySelector('.dark-screen').classList.add('opacity-100')

    mobile_header_button.addEventListener('blur', () => {
        document.querySelector('.mobile-header-button-3 > img').setAttribute('src', '../icon/menu.svg')

        document.querySelector('.mobile-nav-bar').classList.remove('opacity-100')
        document.querySelector('.mobile-nav-bar').classList.add('opacity-0')

        document.querySelector('.dark-screen').classList.remove('opacity-100')
        document.querySelector('.dark-screen').classList.add('opacity-0')
        document.querySelector('.dark-screen').classList.add('hidden')
    })
})

search_button_desktop.addEventListener('click', () => {
    document.querySelector('.search-page-desktop').classList.remove('z-0')
    document.querySelector('.search-page-desktop').classList.add('z-50')
    document.querySelector('.search-page-desktop').classList.remove('opacity-0')
    document.querySelector('.search-page-desktop').classList.add('opacity-100')

    document.querySelector('.dark-screen').classList.remove('hidden')
    document.querySelector('.dark-screen').classList.remove('opacity-0')
    document.querySelector('.dark-screen').classList.add('opacity-100')

    document.querySelector('.search-page-desktop').addEventListener('mouseleave', () => {
        document.querySelector('.search-page-desktop').classList.remove('z-50')
        document.querySelector('.search-page-desktop').classList.add('z-0')
        document.querySelector('.search-page-desktop').classList.remove('opacity-100')
        document.querySelector('.search-page-desktop').classList.add('opacity-0')

        document.querySelector('.dark-screen').classList.remove('opacity-100')
        document.querySelector('.dark-screen').classList.add('opacity-0')
        document.querySelector('.dark-screen').classList.add('hidden')
    })
})


desktop_sorting_navbar_button.addEventListener('mouseenter', () => {
    document.querySelector('.desktop-sorting-navbar').classList.remove('opacity-0')
    document.querySelector('.desktop-sorting-navbar').classList.add('opacity-100')

    document.querySelector('.dark-screen').classList.remove('hidden')
    document.querySelector('.dark-screen').classList.remove('opacity-0')
    document.querySelector('.dark-screen').classList.add('opacity-100')

    desktop_sorting_navbar_button.classList.add('bg-[var(--color-gray-5)]')

    desktop_sorting_navbar_button.querySelector ('img').setAttribute('src', '../icon/arrow-up.svg')

    document.querySelector('.desktop-sorting-navbar').addEventListener('mouseleave', () => {
        document.querySelector('.desktop-sorting-navbar').classList.remove('opacity-100')
        document.querySelector('.desktop-sorting-navbar').classList.add('opacity-0')

        document.querySelector('.dark-screen').classList.remove('opacity-100')
        document.querySelector('.dark-screen').classList.add('opacity-0')
        document.querySelector('.dark-screen').classList.add('hidden')

        desktop_sorting_navbar_button.classList.remove('bg-[var(--color-gray-5)]')

        desktop_sorting_navbar_button.querySelector ('img').setAttribute('src', '../icon/arrow-down.svg')
    })
})