import { BsThreeDots } from 'react-icons/bs'

import { Form } from 'react-bootstrap'
import NotificationToggleSwitch from './components/NotificationToggleSwitch'
import { FaSlidersH } from 'react-icons/fa'

const Notifications = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">Notification</h1>

        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas" /> Menu
          </button>
      </div>

      <form>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
          <h6 className="rounded-0 mb-0">Email notification</h6>
          <button className="btn btn-sm btn-white border" type="button">
            Toggle all
          </button>
        </div>

        <NotificationToggleSwitch title="News and updates" description="News about product and feature updates" defaultChecked />

        <NotificationToggleSwitch title="Tips and tutorials" description="Tips on getting more out of unlimited" defaultChecked />

        <NotificationToggleSwitch title="User research" description="Tips on getting more out of unlimited" />

        <NotificationToggleSwitch title="Comments" description="Comments on your post and replies to comments" />

        <NotificationToggleSwitch title="Reminders" description="I would like to receive booking assistance reminders" />
      </form>

      <div className="text-center my-5">
        <BsThreeDots />
      </div>

      <Form>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
          <h6 className="rounded-0 mb-0">General Permission</h6>
          <button className="btn btn-sm btn-white border" type="button">
            Toggle all
          </button>
        </div>

        <NotificationToggleSwitch
          title="Notify on updates and activity"
          description="You'll be notified when anyone shares a report or invite you to a projects"
          defaultChecked
        />

        <NotificationToggleSwitch title="Send weekly digest" description="A weekly update on changes in theme statement and more" defaultChecked />

        <NotificationToggleSwitch title="Collaborators" description="I would like to receive booking assistance reminders" />
      </Form>
    </>
  )
}

export default Notifications
