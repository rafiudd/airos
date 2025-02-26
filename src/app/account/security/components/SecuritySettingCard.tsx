type SecuritySettingCardProps = {
  title: string
  description: string
}

const SecuritySettingCard = ({ description, title }: SecuritySettingCardProps) => {
  return (
    <div className="bg-light border rounded-3 d-md-flex justify-content-between align-items-center p-4 mb-3">
      <div>
        <h6>{title}</h6>
        <p className="mb-1 mb-md-0">{description}</p>
      </div>
      <div className="form-check form-switch form-check-md mb-0">
        <input className="form-check-input" type="checkbox" id="checkPrivacy1" />
      </div>
    </div>
  )
}

export default SecuritySettingCard
