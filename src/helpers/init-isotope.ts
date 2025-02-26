import ImageLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'

export const initIsotope = () => {
  const isGridItem = document.querySelector('.grid-item')
  if (isGridItem) {
    // Code only for normal Grid
    const onlyGrid = document.querySelector('[data-isotope]')
    if (onlyGrid) {
      const allGrid = document.querySelectorAll("[data-isotope]")
      allGrid.forEach(gridItem => {
        if (gridItem instanceof HTMLElement) {
          const gridItemData = gridItem.getAttribute('data-isotope')
          if (gridItemData) {
            const gridItemDataObj = JSON.parse(gridItemData)
            const iso = new Isotope(gridItem, {
              itemSelector: '.grid-item',
              layoutMode: gridItemDataObj.layoutMode
            })
            ImageLoaded(gridItem).on('progress', () => {
              iso.layout()
            })
          }
        }
      })
    }
    // Code only for normal Grid
    const onlyGridFilter = document.querySelector('.grid-menu')
    if (onlyGridFilter) {
      const filterMenu = document.querySelectorAll('.grid-menu')
      filterMenu.forEach(menu => {
        if (menu instanceof HTMLElement) {
          const filterContainer = menu.getAttribute('data-target')
          const a = menu.dataset.target
          if (a && filterContainer) {
            const b = document.querySelector(a)
            if (b) {
              const filterContainerItemData = b.getAttribute('data-isotope')
              if (filterContainerItemData) {
                const filterContainerItemDataObj = JSON.parse(filterContainerItemData)
                const filter = new Isotope(filterContainer, {
                  itemSelector: '.grid-item',
                  transitionDuration: '0.7s',
                  layoutMode: filterContainerItemDataObj.layoutMode
                })
                const menuItems = menu.querySelectorAll('li a')
                menuItems.forEach(menuItem => {
                  menuItem.addEventListener('click', () => {
                    const filterValue = menuItem.getAttribute('data-filter')
                    if (filterValue) {
                      filter.arrange({ filter: filterValue })
                      menuItems.forEach((control) => control.classList.remove('active')),
                        menuItem.classList.add('active')
                    }
                  })
                })
                ImageLoaded(filterContainer).on('progress', () => {
                  filter.layout()
                })
              }
            }
          }
        }
      })
    }
  }
}