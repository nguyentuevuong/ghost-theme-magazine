import "./index.scss";

(() => {
  const THEME_FUNC = () => {
    const DATA_KEY = 'data-theme'
    const THEME_KEY = '__dark_theme__'
    const CLASS_KEY = '.dark-light'
    const DARK_KEY = 'dark'
    const LIGHT_KEY = 'light'

    const theme = localStorage.getItem(THEME_KEY);
    const rootEl = document.querySelector('html');

    if (rootEl) {
      rootEl.classList.add(theme || DARK_KEY)
    }

    document.addEventListener('DOMContentLoaded', () => {
      const toggleTheme = document.querySelector(CLASS_KEY)

      if (toggleTheme) {
        toggleTheme.addEventListener('click', () => {
          const isDark = rootEl.classList.contains('dark')

          if (isDark) {
            rootEl.classList.add(LIGHT_KEY)
            rootEl.classList.remove(DARK_KEY)
            localStorage.setItem(THEME_KEY, LIGHT_KEY)
          } else {
            rootEl.classList.add(DARK_KEY)
            rootEl.classList.remove(LIGHT_KEY)
            localStorage.setItem(THEME_KEY, DARK_KEY)
          }
        })
      }
    })
  }

  THEME_FUNC()

  const MENU_FUNC = () => {
    const CLASS_KEY = '.bar-icon'

    document.addEventListener('DOMContentLoaded', () => {
      const toggleMenu = document.querySelector(CLASS_KEY)

      if (toggleMenu) {
        toggleMenu.addEventListener('click', () => {
          const sliceMenu = document.querySelector('.slicknav_nav.slicknav_hidden')

          if ([...toggleMenu.classList].includes('active-bar')) {
            toggleMenu.classList.remove('active-bar')

            sliceMenu.style.display = 'none'
          } else {
            toggleMenu.classList.add('active-bar')

            sliceMenu.style.display = ''
          }
        })
      }
    })
  }

  MENU_FUNC()
})()
