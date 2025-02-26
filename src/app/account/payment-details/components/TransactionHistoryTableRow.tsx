import { currency } from '@/states/constants'
import type { TransactionType } from '../data'
import { toSentenceCase } from '@/utils/change-casing'
import masterCard from '@/assets/images/elements/mastercard.svg'
import visaCard from '@/assets/images/elements/visa.svg'
import { BsDownload } from 'react-icons/bs'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

type StatusType = {
  className: string
  statusText: string
}

const getStatusInfo = (status: TransactionType['status']): StatusType => {
  const statusInfo: StatusType = {
    className: 'bg-danger text-danger',
    statusText: toSentenceCase(status)
  }
  if (status === 'paid') statusInfo.className = 'bg-success text-success'
  else if (status === 'pending') statusInfo.className = 'text-warning bg-warning'
  return statusInfo
}

const TransactionHistoryTableRow = ({ amount, date, reference, status, number, type }: TransactionType) => {
  const isVisa = type === 'visa'
  const { className, statusText } = getStatusInfo(status)
  return (
    <tr>
      <td>
        <Link href="">{reference}</Link>
      </td>
      <td>
        <Image src={isVisa ? visaCard : masterCard} className="h-20px" alt='' width={31} />
        <span className="ms-2">
          ****{number}
        </span>
      </td>
      <td><div className={`badge bg-opacity-15 ${className}`}>{statusText}</div></td>
      <td>{currency}{amount}</td>
      <td>{date}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip>Download</Tooltip>} placement='top'>
          <Link href='' className="btn btn-light border btn-round me-1 mb-1 mb-md-0 flex-centered" data-bs-toggle="tooltip">
            <BsDownload />

          </Link>
        </OverlayTrigger>
      </td>
    </tr>
  )
}

export default TransactionHistoryTableRow