import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'

import { bellIcon, fileIcon, locationIcon, messageIcon, peopleIcon, rocketIcon } from '@/assets/data/icons'
import { ClientType, FeatureType, StatisticType } from './types'

export const clients: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
]

export const statData: StatisticType[] = [
  {
    title: 'Total Project in year',
    stat: 150,
    suffix: '+',
  },
  {
    title: 'Total hour spent',
    stat: 120,
    suffix: '+',
  },
  {
    title: 'Positive user reviews',
    stat: 10,
    suffix: 'M+',
  },
  {
    title: 'Happy customers',
    stat: 600,
    suffix: '+',
  },
]

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
