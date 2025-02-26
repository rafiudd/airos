import { Button, Container, Form, FormControl } from 'react-bootstrap'

const CTA = () => {
  return (
    <section>
      <Container>
        <div className="inner-container-small text-center">
          <figure className="mb-4">
            <svg width="223.6px" height="87.2px" viewBox="0 0 223.6 87.2">
              <path
                className="fill-mode"
                d="M222.9,53.8c-13.2-3-28-3-41,0.9c-5.5,1.7-11,4.3-14.9,8.7c-1.3-0.1-2.6-0.2-3.8-0.1 c-5.8,0.1-11.6,1.5-16.9,3.7c-2.9,1.2-5.7,2.9-8.5,4.4c-3.7,1.9-7.4,3.8-11.3,5.3c-7.3,2.9-16,5-23.5,1.7c-1.5-0.6-2.9-1.5-4.1-2.6 c6.5-2.6,12.2-7.9,13.2-15c0.8-6.6-5.1-12.1-11.6-11.4c-5,0.6-7.5,5.6-8.3,10.1c-0.9,4.9-0.3,10.8,2.7,14.9 c0.2,0.2,0.4,0.5,0.5,0.7c-0.4,0.1-0.8,0.2-1.3,0.3c-6.6,1.5-14.3,0.3-20.3-2.9c-6.1-3.3-10.3-9.1-12.3-15.6 c-0.2-0.7-1.2-0.4-1,0.3c2.1,7.3,6.7,13.4,13.4,17.1c6.8,3.7,15.4,4.5,22.7,2.4c0,0,0.1,0,0.1,0c4.5,4.4,11.2,5.9,17.3,5.4 c8-0.6,15.6-4.1,22.7-7.7c5.6-2.9,10.8-6,17-7.6c3.8-0.9,7.8-1.5,11.8-1.3c-3.3,4.8-4.6,11.1-2.3,16.5c2.8,6.4,11.3,6.7,16.3,2.8 c5.1-4,2.8-12.4-1-16.4c-2.4-2.5-5.7-3.9-9.1-4.5c0.2-0.2,0.3-0.3,0.5-0.4c4.3-4,10.2-6.2,15.9-7.5c11.8-2.8,24.9-2.7,36.7,0 C223.6,56,224.1,54,222.9,53.8z M95.5,71.6c-1.2-2.4-1.7-5.1-1.8-7.8c-0.1-4.5,1.1-11.2,6.1-12.6c2.4-0.7,5.2,0.4,7.2,1.7 c2.9,1.9,3.5,5.5,2.9,8.7c-1.2,6.2-6.8,10.5-12.6,12.6C96.7,73.4,96,72.5,95.5,71.6z M171.5,66.3c5.7,1.8,10.3,7.8,8.5,14 c-1.1,3.9-6.1,5.2-9.6,4.8c-3.5-0.4-5.5-3.4-6.2-6.5c-1.1-4.7,0.6-9.5,3.5-13.1C169,65.7,170.2,65.9,171.5,66.3z"
              />
              <polygon className="fill-primary" points="65.3,39 61,56.8 0.7,0.7" />
              <path
                className="fill-mode"
                d="M60.6,57.3L0.2,1.1C0,0.9-0.1,0.5,0.1,0.3C0.3,0,0.7-0.1,1,0.1l64.7,38.3c0.2,0.1,0.4,0.4,0.3,0.7l-4.3,17.8 c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1,0-0.1,0-0.2,0C60.9,57.4,60.7,57.4,60.6,57.3z M5.6,4.3l55.1,51.2l3.9-16.3L5.6,4.3z"
              />
              <polygon className="fill-primary" points="56.5,42.4 61,56.8 0.7,0.8" />
              <path
                className="fill-mode"
                d="M60.6,57.3L0.2,1.3C0,1.1-0.1,0.7,0.2,0.4c0.2-0.3,0.6-0.3,0.9-0.1l55.8,41.5c0.1,0.1,0.2,0.2,0.2,0.3 l4.6,14.4c0.1,0.3,0,0.6-0.3,0.8c-0.1,0.1-0.2,0.1-0.4,0.1C60.9,57.4,60.7,57.4,60.6,57.3z M10.1,8.7l49.6,45.9l-3.8-11.8 L10.1,8.7z"
              />
              <polygon className="fill-primary" points="0.7,0.7 91.5,28.5 65.2,38.8 			" />
              <path
                className="fill-mode"
                d="M64.9,39.4L0.3,1.2C0,1.1-0.1,0.7,0.1,0.4C0.2,0.1,0.5-0.1,0.9,0l90.9,27.8c0.3,0.1,0.5,0.3,0.5,0.6 c0,0.3-0.2,0.5-0.4,0.6L65.4,39.4c-0.1,0-0.2,0-0.2,0C65.1,39.4,65,39.4,64.9,39.4z M5.8,2.9l59.5,35.2l24.3-9.5L5.8,2.9z"
              />
              <polygon className="fill-primary" points="56.3,42.4 26.5,57.6 0.7,0.7 			" />
              <path
                className="fill-mode"
                d="M26.3,58.3c-0.2-0.1-0.3-0.2-0.4-0.3L0.1,0.9c-0.1-0.3,0-0.6,0.2-0.8C0.5,0,0.8,0,1.1,0.1l55.7,41.8 c0.2,0.1,0.3,0.4,0.3,0.6c0,0.2-0.2,0.4-0.4,0.5L26.8,58.2c-0.1,0-0.2,0.1-0.3,0.1C26.5,58.3,26.4,58.3,26.3,58.3z M2.3,2.7 l24.5,54l28.2-14.4L2.3,2.7z"
              />
            </svg>
          </figure>

          <h2>Let&apos;s stay in touch</h2>
          <p>Receive news, stay updated, and special offers</p>

          <div className="position-relative mt-5">
            <figure className="position-absolute top-100 start-100 translate-middle d-none d-lg-block">
              <svg className="opacity-1" width="148" height="140" viewBox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-primary"
                  d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="131.41" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="113.61" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="95.81" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="24.62" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                <circle className="fill-primary" cx="25.86" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="6.82" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
              </svg>
            </figure>

            <div className="bg-light border rounded-2 position-relative z-index-2 p-2 mb-2">
              <Form className="input-group">
                <FormControl size="lg" className="focus-shadow-none bg-light border-0 me-1" type="email" placeholder="Enter your email address" />
                <Button size="lg" variant="dark" type="button" className="rounded-2 mb-0">
                  Subscribe now!
                </Button>
              </Form>
            </div>
          </div>
          <p className="small mb-0 px-4">
            Subscribe now and receive weekly newsletter with educational materials, new courses, interesting posts, popular books, and much more!
          </p>
        </div>
      </Container>
    </section>
  )
}

export default CTA
