type MobileNavbarTogglerProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MobileNavbarToggler = ({ isMenuOpen, toggleMenu }: MobileNavbarTogglerProps) => {
  return (
    <button
      className="navbar-toggler ms-3 p-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-label="Toggle navigation"
      aria-expanded={isMenuOpen}
      onClick={toggleMenu}>
      <span className="navbar-toggler-animation">
        <span />
        <span />
        <span />
      </span>
    </button>
  )
}

export default MobileNavbarToggler
