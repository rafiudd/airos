import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import LoggedInDeviceCard from './LoggedInDeviceCard'

const LoggedInDevices = () => {
  return (
    <Col md={6} lg={12} xl={6} as={'form'}>
      <Card className="bg-transparent rounded-3">
        <CardHeader className="bg-transparent border-bottom d-flex justify-content-between align-items-center px-0">
          <h6 className="card-header-title mb-0">Devices</h6>
          <button className="btn btn-sm btn-danger-soft mb-0" type="button">
            Sign out from all devices
          </button>
        </CardHeader>
        <CardBody className="px-0">
          <LoggedInDeviceCard
            device={{
              name: 'Iphone 12pro',
              type: 'phone',
            }}
            location="London, UK"
            lastActiveAt="Oct 23 at 1:15PM"
          />

          <LoggedInDeviceCard
            device={{
              name: 'Iphone SE',
              type: 'phone',
            }}
            location="London, UK"
            lastActiveAt="Oct 13 at 4:15PM"
          />

          <LoggedInDeviceCard
            device={{
              name: 'Macbook pro',
              type: 'laptop',
            }}
            location="California, USA"
            lastActiveAt="Oct 20 at 5:15PM"
          />

          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-dark mb-0">
              Need help?
            </button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LoggedInDevices
