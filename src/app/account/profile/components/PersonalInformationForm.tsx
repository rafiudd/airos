'use client'
import SelectFormInput from '@/components/form/SelectFormInput'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { BsX } from 'react-icons/bs'
import * as yup from 'yup'

import avatar7 from '@/assets/images/avatar/07.jpg'
import { Card, CardBody, CardHeader, Col, Form, Row } from 'react-bootstrap'
import Image from 'next/image'

const PersonalInformationForm = () => {
  const personalInformationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    mobile: yup
      .string()
      .matches(/\d{10}/, { message: 'Mobile number must be of 10 digits only' })
      .required('Mobile is required'),
    address: yup.string().required('Address is required'),
    nationality: yup.string().required('Nationality is required'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(personalInformationSchema),
    defaultValues: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      email: 'hello@gmail.com',
      mobile: '222 555 666',
      nationality: 'Paris',
      address: '2119 N Division Ave, New Hampshire, York, United States',
    },
  })

  return (
    <Form onSubmit={handleSubmit(() => {})}>
      <Card className="bg-transparent p-0">
        <CardHeader className="bg-transparent border-bottom p-0 pb-3">
          <h6 className="mb-0">Personal Information</h6>
        </CardHeader>

        <CardBody className="px-0">
          <Row className="g-4">
            <Col xs={12}>
              <label className="form-label">Profile picture</label>
              <div className="d-flex align-items-center">
                <label className="position-relative me-2" title="Replace this pic">
                  <span className="avatar avatar-xl">
                    <Image alt="" className="avatar-img rounded-circle border border-white border-3 shadow" src={avatar7} />
                  </span>

                  <button className="uploadremove flex-centered">
                    <BsX className="text-white" />
                  </button>
                </label>

                <label className="btn btn-sm btn-dark mb-0">Change</label>
                <input className="form-control d-none" type="file" />
              </div>
            </Col>

            <Col xs={12}>
              <label className="form-label">Full name</label>
              <div className="input-group">
                <TextFormInput type="text" 
                className='form-control'
                defaultValue="Jacqueline" placeholder="First name" name="firstName" control={control} />

                <TextFormInput type="text"
                  className='form-control'
                defaultValue="Miller" placeholder="Last name" name="lastName" control={control} />
              </div>
            </Col>

            <TextFormInput
              name="email"
              containerClass="col-md-6"
              label="Email address"
              defaultValue="hello@gmail.com"
              type="email"
              placeholder="Enter your email id"
              control={control}
            />

            <TextFormInput
              defaultValue="222 555 666"
              containerClass="col-md-6"
              placeholder="Enter your mobile number"
              name="mobile"
              label="Mobile number"
              control={control}
            />

            <SelectFormInput control={control} name="nationality" label="Nationality" containerClass="col-md-6">
              <option>Select your country</option>
              <option>USA</option>
              <option>Paris</option>
              <option>India</option>
              <option>UK</option>
            </SelectFormInput>

            <Col md={6}>
              <label className="form-label">Select Gender</label>
              <div className="input-group">
                <div className="form-control">
                  <div className="form-check radio-bg-light">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                </div>
                <div className="form-control">
                  <div className="form-check radio-bg-light">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-control">
                  <div className="form-check radio-bg-light">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </Col>

            <TextAreaFormInput name="address" containerClass="col-12" label="Address" control={control} spellCheck="false" />

            <Col xs={12} className="text-end">
              <button type="submit" className="btn btn-primary mb-0">
                Save Changes
              </button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Form>
  )
}

export default PersonalInformationForm
