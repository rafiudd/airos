import mailchimp from '@/assets/images/elements/mailchimp.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import gicon from '@/assets/images/elements/gicon.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-lg-8 pt-xl-9">
      <Container className="pt-4 pt-lg-0">
        <div className="inner-container-small text-center mb-4 mb-lg-6">
          <h1 className="mb-4">Effortless Software Integration</h1>
          <p>Unlock the full potential of your software by seamlessly integrating it with other essential tools and services.</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-4">
          <div className="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block">
            <Image alt="" src={gicon} className="w-20px" />
          </div>
          <div className="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block">
            <Image alt="" src={mailchimp} className="w-30px" />
          </div>
          <div className="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
            <Image alt="" src={slack} className="w-50px" />
          </div>
          <div className="icon-xxl text-center shadow-sm bg-white rounded-circle flex-shrink-0 btn-ripple" style={{ lineHeight: '6.8rem' }}>
            <Image alt="" src={logoIcon} className="w-80px" />
          </div>
          <div className="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
            <Image alt="" src={dropbox} className="w-50px" />
          </div>
          <div className="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block">
            <Image alt="" src={webflow} className="w-30px" />
          </div>
          <div className="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block">
            <Image alt="" src={reddit} className="w-20px" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
