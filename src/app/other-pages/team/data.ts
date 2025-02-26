import type { MemberType } from './types'

import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'
import team5 from '@/assets/images/team/05.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

export const teamMembers: MemberType[] = [
  {
    socialMedia: [
      {
        icon: FaInstagram,
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      avatar: team1,
      role: 'Founder',
    },
  },
  {
    socialMedia: [
      {
        icon: FaFacebookF,
        variant: 'facebook',
      },
    ],
    user: {
      firstName: 'Allen',
      lastName: 'Smith',
      avatar: team2,
      role: 'UI/UX designer',
    },
  },
  {
    socialMedia: [
      {
        icon: FaTwitter,
        variant: 'twitter',
      },
      {
        icon: FaLinkedinIn,
        variant: 'linkedin',
      },
    ],
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      avatar: team3,
      role: 'Human Resource',
    },
  },
  {
    socialMedia: [
      {
        icon: FaFacebookF,
        variant: 'facebook',
      },
      {
        icon: FaInstagram,
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      avatar: team4,
      role: 'Web Developer',
    },
  },
  {
    socialMedia: [
      {
        icon: FaInstagram,
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Frances',
      lastName: 'Guerrero',
      avatar: team5,
      role: 'Software Developer',
    },
  },
  {
    socialMedia: [
      {
        icon: FaFacebookF,
        variant: 'facebook',
      },
      {
        icon: FaInstagram,
        variant: 'instagram-gradient',
      },
    ],
    user: {
      firstName: 'Lori',
      lastName: 'Stevens',
      avatar: team6,
      role: 'Graphic designer',
    },
  },
  {
    socialMedia: [
      {
        icon: FaTwitter,
        variant: 'twitter',
      },
    ],
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      avatar: team7,
      role: 'Product designer',
    },
  },
  {
    socialMedia: [
      {
        icon: FaInstagram,
        variant: 'instagram-gradient',
      },
      {
        icon: FaTwitter,
        variant: 'twitter',
      },
    ],
    user: {
      firstName: 'Amanda',
      lastName: 'Reed',
      avatar: team8,
      role: 'Content writer',
    },
  },
]
