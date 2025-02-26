import { bellIcon, fileIcon, locationIcon, messageIcon, peopleIcon, rocketIcon } from '@/assets/data/icons'
import { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
export type FeatureType = {
  icon: ReactNode
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}
export const features: FeatureType[] = [
  {
    title: 'Assignment & roles',
    description: 'Assign owners to conversations, and delegate to team members to follow every update.',
    icon: peopleIcon,
  },
  {
    title: 'Internal-only messages',
    description: 'Ask a quick six seven offer see among. Handsome met debating sir dwelling age material.',
    icon: messageIcon,
  },
  {
    title: 'File previews',
    description: 'Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness.',
    icon: fileIcon,
  },
  {
    title: 'Large attachments',
    description: 'Affronting imprudence does everything. Sex lasted dinner wanted indeed wished outlaw.',
    icon: rocketIcon,
  },
  {
    title: 'Reminders',
    description: 'Such on help ye some door if in. Laughter proposal laughing any son law consider.',
    icon: bellIcon,
  },
  {
    title: 'Location tracking',
    description: 'State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.',
    icon: locationIcon,
  },
]
