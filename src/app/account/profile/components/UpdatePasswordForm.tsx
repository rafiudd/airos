'use client'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardBody, CardHeader, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const UpdatePasswordForm = () => {
  const passwordFormSchema = yup.object({
    currentPassword: yup.string().required('Please enter your password'),
    password: yup.string().required('Please enter your password'),
    newPassword: yup.string().required('Please enter your new password'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(passwordFormSchema),
  })

  return (
    <Form onSubmit={handleSubmit(() => {})}>
      <Card className="bg-transparent p-0">
        <CardHeader className="bg-transparent border-bottom px-0">
          <h6 className="mb-0">Update password</h6>
        </CardHeader>

        <CardBody className="px-0">
          <PasswordFormInput
            control={control}
            name="currentPassword"
            label="Current password"
            containerClass="mb-3"
            placeholder="Enter current password"
          />

          <PasswordFormInput
            control={control}
            name="newPassword"
            label="Enter new password"
            containerClass="mb-3"
            placeholder="Enter your password"
          />

          <PasswordFormInput name="password" placeholder="Enter new password" label="Confirm new password" control={control} />

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary mb-0">
              Change password
            </button>
          </div>
        </CardBody>
      </Card>
    </Form>
  )
}

export default UpdatePasswordForm
