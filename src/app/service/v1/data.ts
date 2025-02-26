import { businessIcon2, designIcon, layersIcon, robotIcon2, speakerIcon, strategicIcon } from '@/assets/data/icons'
import type { FeatureType, ServiceType } from './types'
import { BsBell, BsBroadcastPin, BsChatLeftDots, BsDisplay, BsHeadset, BsLightningCharge } from 'react-icons/bs'

export const services: ServiceType[] = [
  {
    title: 'Digital marketing',
    description: 'Digital marketing is the art and science of reaching, engaging, and influencing your target audience through online channels.',
    icon: speakerIcon,
  },
  {
    title: 'Web design',
    description:
      "A well-designed website not only captivates visitors but also conveys a brand's identity, ultimately driving engagement and conversions.",
    icon: designIcon,
  },
  {
    title: 'Strategic planning',
    description: "Strategic planning is the deliberate process of defining an organization's goals and objectives",
    icon: strategicIcon,
  },
  {
    title: 'Brand design',
    description: 'Brand design is the creative process of crafting a visual and emotional identity that represents your business',
    icon: robotIcon2,
  },
  {
    title: 'Database analysis',
    description: 'Database analysis involves the systematic examination of structured data sets to extract valuable insights, patterns, and trends.',
    icon: layersIcon,
  },
  {
    title: 'Business consulting',
    description:
      'Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.',
    icon: businessIcon2,
  },
]

export const features: FeatureType[] = [
  {
    icon: BsChatLeftDots,
    title: 'Multilingual support',
    description: 'The implementation of multilingual support involves.',
  },
  {
    icon: BsBell,
    title: 'Easy-to-use interface',
    description: 'It focuses on creating an intuitive and efficient design.',
  },
  {
    icon: BsHeadset,
    title: '24/7 availability',
    description: 'It ensures that users can access critical assistance whenever they need it.',
  },
  {
    icon: BsBroadcastPin,
    title: 'Advanced functionalities',
    description: 'These advanced functionalities are designed to provide users.',
  },
  {
    icon: BsDisplay,
    title: 'Free host & domain included',
    description: 'It means that when you sign up for their services, you not only get the hosting.',
  },
  {
    icon: BsLightningCharge,
    title: 'High Performance',
    description: 'Achieving high performance involves various factors and considerations.',
  },
]
