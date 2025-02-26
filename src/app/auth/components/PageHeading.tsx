import type { ReactNode } from 'react'
import LogoBox from '@/components/LogoBox'
import Link from 'next/link'

type PageHeadingProps = {
  heading: string
  subHeading?: string | ReactNode
}

const PageHeading = ({ heading, subHeading }: PageHeadingProps) => {
  return (
    <>
      <Link href="">
        <LogoBox className="h-50px mb-4" smallIcon />
      </Link>
      <h2 className="mb-0">{heading}</h2>
      <p className="mb-0">{subHeading}</p>
    </>
  )
}

export default PageHeading
