import { FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  return (
    <li className="nav-item flex-nowrap align-items-center ms-3 d-none d-md-block">
      <div className="position-relative">
        <FormControl className="pe-5 bg-light" type="search" placeholder="Search" aria-label="Search" />
        <button
          className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset icons-center"
          type="button">
          <FaSearch />
        </button>
      </div>
    </li>
  )
}

export default SearchInput
