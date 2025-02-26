import { FaSlidersH } from 'react-icons/fa'
import { OutletContextType } from '../types'

type PageHeadingProps = {
  heading: string
} & OutletContextType

const PageHeading = ({ heading, toggleOffcanvas }: PageHeadingProps) => {
  console.log(toggleOffcanvas)
  return (
    <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
      <h1 className="h3 mb-0">{heading}</h1>
      <button onClick={toggleOffcanvas} className="btn btn-primary d-lg-none flex-shrink-0 ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
        <FaSlidersH className="fas fa-sliders-h" /> Menu
      </button>
    </div>
  )
}

export default PageHeading