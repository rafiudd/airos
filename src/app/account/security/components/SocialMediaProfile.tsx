'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6'
import * as yup from 'yup'

import TextFormInput from '@/components/form/TextFormInput'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const SocialMediaProfile = () => {
  const socialFormSchema = yup.object({
    facebook: yup.string().optional(),
    twitter: yup.string().optional(),
    instagram: yup.string().optional(),
    youtube: yup.string().optional(),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(socialFormSchema),
    defaultValues: {
      facebook: 'JqMiller',
      twitter: 'JqMiller',
      instagram: 'JqMiller',
      youtube: 'https://www.youtube.com/in/Mizzle-05620abc',
    },
  })

  return (
    <Col md={6} lg={12} xl={6} as={'form'} onSubmit={handleSubmit(() => {})}>
      <Card className="bg-transparent rounded-3">
        <CardHeader className="bg-transparent border-bottom px-0">
          <h6 className="card-header-title mb-0">Social media profile</h6>
        </CardHeader>
        <CardBody className="px-0">
          <div className="mb-3">
            <label className="form-label">
              <FaFacebook className="text-facebook me-2" />
              Enter facebook username
            </label>

            <TextFormInput control={control} name="facebook" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <BsTwitter className="text-twitter me-2" />
              Enter twitter username
            </label>

            <TextFormInput control={control} name="twitter" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <FaInstagram className="text-danger me-2" />
              Enter instagram username
            </label>

            <TextFormInput control={control} name="instagram" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <FaYoutube className="text-youtube me-2" />
              Add your youtube profile URL
            </label>

            <TextFormInput control={control} name="youtube" placeholder="Enter username" />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary mb-0">
              Save changes
            </button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SocialMediaProfile
