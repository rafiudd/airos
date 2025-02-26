import { BsEnvelopeOpen, BsHeadset, BsTicketPerforated } from 'react-icons/bs'
import { IconType } from 'react-icons'

export type SupportLinkType = {
  icon: IconType
  title: string
  content: string
}

export const supportLinks: SupportLinkType[] = [
  {
    icon: BsHeadset,
    title: 'Contact Support',
    content: 'Not finding the help you need?',
  },
  {
    icon: BsTicketPerforated,
    title: 'Submit a Ticket',
    content: 'Prosperous impression had delay',
  },
  {
    icon: BsEnvelopeOpen,
    title: 'Email us',
    content: 'Reach us at example@gmail.com',
  },
]
