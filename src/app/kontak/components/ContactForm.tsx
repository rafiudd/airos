'use client'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const ContactForm = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('Silakan masukkan nama Anda'),
    email: yup.string().email('Masukkan email yang valid').required('Silakan masukkan email Anda'),
    phoneNo: yup.string().required('Silakan masukkan nomor WhatsApp Anda'),
    company: yup.string().optional(),
    message: yup.string().required('Silakan tulis pesan Anda'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  const onSubmit = (data: any) => {
    const { name, email, phoneNo, company, message } = data
    const companyText = company ? ` dari ${company}` : ''
    
    const text = `Halo, saya ${name}${companyText}. Saya ingin mendiskusikan ${message}. Anda dapat menghubungi saya melalui WhatsApp di ${phoneNo} atau melalui email di ${email}. Saya menantikan tanggapan Anda. Terima kasih.`

    const whatsappURL = `https://wa.me/6285741892603?text=${encodeURIComponent(text)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <Row as={Form} className="g-4" onSubmit={handleSubmit(onSubmit)}>
      <TextFormInput
        name="name"
        label="Nama Lengkap *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Masukkan nama lengkap Anda"
      />
      <TextFormInput
        name="email"
        type="email"
        label="Email *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="nama@contoh.com"
      />
      <TextFormInput
        name="phoneNo"
        label="Nomor WhatsApp *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Masukkan nomor WhatsApp Anda"
      />
      <TextFormInput
        name="company"
        label="Nama Perusahaan"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Masukkan nama perusahaan (jika ada)"
      />

      <TextAreaFormInput
        name="message"
        label="Pesan *"
        labelClass="heading-color"
        control={control}
        containerClass="col-12"
        style={{ height: 150 }}
        placeholder="Tulis pesan Anda di sini..."
      />

      <button className="btn btn-lg btn-primary mb-0" type="submit">
        Kirim Pesan
      </button>
    </Row>
  )
}

export default ContactForm
