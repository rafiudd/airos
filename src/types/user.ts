import { StaticImageData } from 'next/image'

export type UserType = {
  id?: string
  avatar?: StaticImageData
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}
