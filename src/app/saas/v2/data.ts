import mailchimp from '@/assets/images/elements/mailchimp.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import microsoft from '@/assets/images/elements/microsoft.svg'
import bootstrap from '@/assets/images/elements/bootstrap.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import gicon from '@/assets/images/elements/gicon.svg'
import github from '@/assets/images/elements/github.svg'
import googleDrive from '@/assets/images/elements/google-drive.svg'

import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client7 from '@/assets/images/client/07.svg'

import { BsPatchCheckFill } from 'react-icons/bs'

import { ToolType, PricingType, TestimonialType, ClientType } from './types'

export const integrations: ToolType[] = [
  {
    image: mailchimp,
  },
  {
    image: slack,
  },
  {
    image: webflow,
  },
  {
    image: shopify,
  },
  {
    image: reddit,
  },
  {
    image: microsoft,
  },
  {
    image: bootstrap,
  },
  {
    image: dropbox,
  },
  {
    image: gicon,
  },
  {
    image: github,
  },
  {
    image: googleDrive,
  },
]

export const pricingData1: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'Customization',
        description: 'Our essential plan is self-service solution for businesses to handle website messaging and personalization',
        price: 20,
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'Customization',
        description: 'Our essential plan is self-service solution for businesses to handle website messaging and personalization',
        price: 25,
      },
    ],
  },
]

export const pricingData2: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'Boss mode',
        description: 'In no impression, assistance contrasted Manners she wishing justice.',
        price: 250,
        features: [
          { icon: BsPatchCheckFill, title: 'Unlimited monthly visitors' },
          { icon: BsPatchCheckFill, title: 'Dedicated SEO strategists' },
          { icon: BsPatchCheckFill, title: 'Google Docs style editors' },
          { icon: BsPatchCheckFill, title: 'Basic chat and email support' },
          { icon: BsPatchCheckFill, title: 'AI powered product recommendation engine' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'Boss mode',
        description: 'In no impression, assistance contrasted Manners she wishing justice.',
        price: 299,
        features: [
          { icon: BsPatchCheckFill, title: 'Unlimited monthly visitors' },
          { icon: BsPatchCheckFill, title: 'Dedicated SEO strategists' },
          { icon: BsPatchCheckFill, title: 'Google Docs style editors' },
          { icon: BsPatchCheckFill, title: 'Basic chat and email support' },
          { icon: BsPatchCheckFill, title: 'AI powered product recommendation engine' },
        ],
      },
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    title: 'Mizzle is essential tool for me and my team',
    comment: "The chatbot can be personalized to match the brand voice and tone, making the company's customer support team.",
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      role: 'Head of marketing',
      avatar: team3,
    },
    rating: 4.5,
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      "I can't say enough about the impact this platform has had on my agency. The automation tools, project management features, and seamless collaboration have transformed the way we work. ",
    user: {
      firstName: 'Allen',
      lastName: 'Smith',
      role: 'Digital Marketing Agency Owner',
      avatar: team2,
    },
    rating: 4.5,
  },
]

export const clients: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client7 },
]
