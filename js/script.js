var mobile_header_button = document.querySelector('.mobile-header-button-3')
var desktop_header_nav_bar_2 = document.querySelector('.desktop-header-nav-bar-2')


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


desktop_header_nav_bar_2.addEventListener('mouseenter', () => {
    document.querySelector('.desktop-sorting-nav-bar').classList.remove('opacity-0')
    document.querySelector('.desktop-sorting-nav-bar').classList.add('opacity-100')

    document.querySelector('.dark-screen').classList.remove('hidden')
    document.querySelector('.dark-screen').classList.remove('opacity-0')
    document.querySelector('.dark-screen').classList.add('opacity-100')

    desktop_header_nav_bar_2.classList.add('bg-[var(--color-gray-5)]')

    desktop_header_nav_bar_2.querySelector ('img').setAttribute('src', '../icon/arrow-up.svg')

    desktop_header_nav_bar_2.addEventListener('mouseleave', () => {
        document.querySelector('.desktop-sorting-nav-bar').classList.remove('opacity-100')
        document.querySelector('.desktop-sorting-nav-bar').classList.add('opacity-0')

        document.querySelector('.dark-screen').classList.remove('opacity-100')
        document.querySelector('.dark-screen').classList.add('opacity-0')
        document.querySelector('.dark-screen').classList.add('hidden')

        desktop_header_nav_bar_2.classList.remove('bg-[var(--color-gray-5)]')

        desktop_header_nav_bar_2.querySelector ('img').setAttribute('src', '../icon/arrow-down.svg')
    })
})