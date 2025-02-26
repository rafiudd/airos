import { FaCircle } from 'react-icons/fa6'
import type { ProjectType } from '../data'
import { BsPencilSquare, BsPower, BsTrash } from 'react-icons/bs'
import Image from 'next/image'

const ProjectTableRow = ({ image, title, status, category }: ProjectType) => {
  return (
    <tr>
      <td>
        <Image src={image} className="img-fluid w-80px rounded" alt="project-img" />
      </td>
      <td>{title}</td>
      <td>
        <span className='icons-center'>
          <FaCircle size={10} className={`me-2 ${status === 'Published' ? 'text-success' : 'text-danger '}`} />{status}
        </span>
      </td>
      <td>{category}</td>
      <td>
        <button className="btn btn-sm btn-dark me-2 mb-1 mb-md-0"><BsPencilSquare className='mb-1' /></button>
        <button className="btn btn-sm btn-light border me-2 mb-1 mb-md-0"><BsPower className='mb-1' /></button>
        <button className="btn btn-sm btn-danger me-2 mb-1 mb-md-0"><BsTrash className='mb-1' /></button>
      </td>
    </tr>
  )
}

export default ProjectTableRow