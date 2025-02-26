import { translationLanguages } from '@/assets/data/footer-items'
import Image from 'next/image'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { FaChevronUp, FaGlobe } from 'react-icons/fa6'

const LanguageDropdown = () => {
  return (
    <Dropdown className="text-center text-md-end mt-3 mt-md-0" drop="up" align={'end'}>
      <DropdownToggle
        className="btn btn-sm btn-light mb-0 arrow-none icons-center"
        id="languageSwitcher"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <FaGlobe className="me-2" />
        Language
        <FaChevronUp className="ms-2" size={12} />
      </DropdownToggle>
      <DropdownMenu className="min-w-auto" aria-labelledby="languageSwitcher">
        {translationLanguages.map((lang, idx) => (
          <li key={lang.name + idx}>
            <DropdownItem className="me-4">
              <Image className="fa-fw me-2" src={lang.flag} alt={lang.name + '-flag'} style={{ width: 18 }} />
              {lang.name}
            </DropdownItem>
          </li>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageDropdown
