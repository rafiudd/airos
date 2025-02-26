import { IconType } from 'react-icons'

export type HelpType = {
  icon: IconType
  title: string
  content: string[]
  url?: string
}

export type FaqType = {
  question: string
  answer: string
}

export type SupportLinkType = {
  icon: IconType
  title: string
  content: string
}
