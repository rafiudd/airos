import { StaticImageData } from 'next/image'
import type { HTMLAttributeAnchorTarget } from 'react'
import type { IconType } from 'react-icons'

export type MenuItemType = {
  key: string
  label: string
  url?: string
  parentKey?: string
  isTitle?: boolean
  badge?: string
  target?: HTMLAttributeAnchorTarget
  icon?: IconType
  children?: MenuItemType[]
}

export type MegaMenuType = {
  usefulLinks: string[]
  company: {
    icon: IconType
    title: string
    badge?: string
    description: string
  }[]
  integration: {
    logo: string
    name: string
  }[]
  recentBlogs: {
    image: StaticImageData
    title: string
    link: string
  }[]
}

export type ResourceMenuType = {
  usefulLinks: {
    icon: IconType
    name: string
  }[]
  keyFeatures: {
    icon: IconType
    title: string
    description: string
  }[]
  featureResource: {
    image: StaticImageData
    title: string
    description: string
  }
}

export type FooterItemType = {
  title: string
  children: {
    label: string
    badge?: string
    url?: string
  }[]
}

export type SocialMediaItemType = {
  icon: IconType
  name: string
  url?: string
}
