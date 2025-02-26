import Link from 'next/link'
import { Col, Form, FormControl, Row } from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'
import { FaSearch, FaSlidersH } from 'react-icons/fa'
import ProjectTableRow from './components/ProjectTableRow'
import { projectsData } from './data'

const Projects = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">My projects</h1>

        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas " /> Menu
        </button>
      </div>

      <Row className="g-3 align-items-center mb-5">
        <Col xl={5}>
          <Form className="rounded position-relative">
            <FormControl className="pe-5" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="button">
              <FaSearch size={20} className="mb-1" />
            </button>
          </Form>
        </Col>

        <Col sm={6} xl={3} className="ms-auto">
          <Form>
            <select className="form-select js-choice" aria-label=".form-select-sm">
              <option>Sort by</option>
              <option>Published</option>
              <option>Free</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </Form>
        </Col>

        <Col sm={6} xl={3}>
          <Link href="" className="btn btn-primary mb-0 icons-center">
            <BsPlusLg className="me-2" />
            Add new project
          </Link>
        </Col>
      </Row>

      <div className="table-responsive border-0">
        <table className="table align-middle p-4 mb-0 table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="border-0 text-white rounded-start">
                Image
              </th>
              <th scope="col" className="border-0 text-white">
                Title
              </th>
              <th scope="col" className="border-0 text-white">
                Status
              </th>
              <th scope="col" className="border-0 text-white">
                Category
              </th>
              <th scope="col" className="border-0 text-white rounded-end">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {projectsData.map((project, idx) => (
              <ProjectTableRow {...project} key={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Projects
