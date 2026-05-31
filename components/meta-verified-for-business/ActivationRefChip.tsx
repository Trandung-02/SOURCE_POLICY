'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'
import { getOrCreateActivationRef } from '@/utils/metaVerifiedActivation'

type ActivationRefChipProps = {
  className?: string
}

export default function ActivationRefChip({ className = '' }: ActivationRefChipProps) {
  const t = useAppStrings()
  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    setTicketId(getOrCreateActivationRef().ticketId)
  }, [])

  return (
    <p className={`mv-ref-chip mv-ref-chip-modal ${className}`.trim()}>
      {t.main.caseId} #{ticketId || '…'}
    </p>
  )
}
