type CardType = {
  type: 'master' | 'visa'
  number: number
  expiry: string
}

export type PaymentMethodType = {
  isPrimary?: boolean
} & CardType

export type TransactionType = {
  reference: string
  status: 'pending' | 'cancelled' | 'paid'
  amount: number
  date: string
} & CardType

export const savedPaymentMethodsData: PaymentMethodType[] = [
  {
    type: "master",
    number: 1569,
    expiry: "12/26",
    isPrimary: true,
  },
  {
    type: "visa",
    number: 5620,
    expiry: "02/35",
  }
]

export const transactionHistoryData: TransactionType[] = [
  {
    reference: "#23458",
    expiry: '02/35',
    number: 4568,
    type: 'master',
    status: "pending",
    amount: 215,
    date: "16/8/2023",
  },
  {
    reference: "#23458",
    expiry: '02/35',
    number: 4585,
    type: 'master',
    status: "cancelled",
    amount: 199,
    date: "21/7/2023",
  },
  {
    reference: "#31558",
    expiry: '12/26',
    number: 5620,
    type: 'visa',
    status: "paid",
    amount: 380,
    date: "5/7/2023",
  }
]