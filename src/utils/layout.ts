'use client'
import { type ElementType } from 'react'

type ToggleDocumentAttributeType = (attribute: string, value: string, tag?: ElementType, remove?: boolean) => void

export const toggleDocumentAttribute: ToggleDocumentAttributeType = (attribute, value, tag = 'html', remove): void => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0] 

    const hasAttribute = element.getAttribute(attribute)
    if(remove && hasAttribute) element.removeAttribute(attribute)
      else element.setAttribute(attribute,value)
  }
}
