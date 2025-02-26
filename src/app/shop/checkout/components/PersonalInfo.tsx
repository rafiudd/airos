'use client'
import SelectFormInput from '@/components/form/SelectFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { Button, Card, CardBody, CardHeader, Col, Form, FormCheck, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsPlusLg } from 'react-icons/bs'
import visa from '@/assets/images/elements/visa.svg'
import mastercard from '@/assets/images/elements/mastercard.svg'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'

const PersonalInfo = () => {
  const personalInfoFormSchema = yup.object({
    fName: yup.string().required('Please enter your first name'),
    lName: yup.string().required('Please enter your last name'),
    email: yup.string().email('please enter valid email').required('Please enter your email '),
    mobileNo: yup.number().required('Please enter your mobile number'),
    address: yup.string().required('Please enter your address'),
    address2: yup.string().optional(),
    country: yup.string().required('Please select your country'),
    state: yup.string().required('Please select your state'),
    zip: yup.number().required('Please enter your zip code'),
  })

  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(personalInfoFormSchema),
    defaultValues: {
      fName: 'Jacqueline',
      lName: 'Miller',
      email: 'example@gmail.com',
      mobileNo: 9154857896,
      address: '1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.',
      address2: '',
      country: '',
      state: '',
      zip: 444555,
    },
  })
  return (
    <Card className="bg-transparent mb-6">
      <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center px-0">
        <h5>Personal info</h5>
        <button className="btn btn-sm btn-light border mb-0 icons-center">
          <BsPlusLg className="me-1" />
          Add new
        </button>
      </CardHeader>
      <CardBody className="px-0 pb-0">
        <CardBody className="p-0">
          <Row
            as={Form}
            className="g-3"
            onSubmit={handleSubmit(() => {
              reset()
            })}>
            <TextFormInput name="fName" label="First name" containerClass="col-md-6" control={control} />
            <TextFormInput name="lName" label="Last name" containerClass="col-md-6" control={control} />
            <TextFormInput name="email" type="email" label="Email" containerClass="col-md-6" control={control} />
            <TextFormInput name="mobileNo" label="Mobile number" containerClass="col-md-6" control={control} />
            <TextFormInput name="address" label="Address" containerClass="col-12" control={control} />
            <TextFormInput name="address2" label="Address 2 (Optional)" containerClass="col-12" control={control} />

            <SelectFormInput name="country" label="Country" containerClass="col-md-4" control={control}>
              <option value={1}>UK</option>
              <option value={2}>USA</option>
              <option value={3}>India</option>
            </SelectFormInput>

            <SelectFormInput name="state" label="State" containerClass="col-md-4" control={control}>
              <option value={1}>New York</option>
              <option value={2}>California</option>
              <option value={3}>Mumbai</option>
              <option value={3}>Peru</option>
            </SelectFormInput>
            <TextFormInput name="zip" label="Zip" containerClass="col-md-4" control={control} />
            <Col md={12}>
              <FormCheck label="The shipping address is the same as my billing address" id="first-checkbox" />
              <FormCheck label="Save this information for next time" id="second-checkbox" />
            </Col>
            <Col xs={12}>
              <label className="form-label me-2">Your saved cards</label>
              <Link href="">
                <Image alt="" src={visa} className="w-40px me-2" />
              </Link>
              <Link href="">
                <Image alt="" src={mastercard} className="w-40px me-2" />
              </Link>
            </Col>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Save Info
              </Button>
            </div>
          </Row>
        </CardBody>
      </CardBody>
    </Card>
  )
}

export default PersonalInfo
