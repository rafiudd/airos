import type { IconType } from 'react-icons'
import github from '@/assets/images/elements/github.svg'
import googleDrive from '@/assets/images/elements/google-drive.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import { StaticImageData } from 'next/image'

export type ToolType = {
  icon?: IconType
  image?: StaticImageData
  name?: string
  description?: string
  url: string
  externalLink?: string
}

export const integrations: ToolType[] = [
  {
    name: 'Github',
    description: 'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: github,
    url: '/saas/integration-single',
  },
  {
    name: 'Dropbox',
    description: 'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    image: dropbox,
    url: '/saas/integration-single',
  },
  {
    name: 'Reddit',
    description: 'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.',
    image: reddit,
    url: '/saas/integration-single',
  },
  {
    name: 'Mailchimp',
    description: 'Integrating with data analysis tools allows for deeper segmentation and personalized messaging.  ',
    image: mailchimp,
    url: '/saas/integration-single',
  },
  {
    name: 'Shopify',
    description: 'Shopify employs Git, a distributed version control system, to track changes to code over time. ',
    image: shopify,
    url: '/saas/integration-single',
  },
  {
    name: 'Slack',
    description: 'Integrating Slack with project management tools like Trello, Asana, or Jira enables teams to receive.',
    image: slack,
    url: '/saas/integration-single',
  },
  {
    name: 'Drive',
    description: 'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: googleDrive,
    url: '/saas/integration-single',
  },
  {
    name: 'Webflow',
    description: 'Integrating Webflow with CRM systems like HubSpot or Salesforce enables seamless data synchronization.',
    image: webflow,
    url: '/saas/integration-single',
  },
]
