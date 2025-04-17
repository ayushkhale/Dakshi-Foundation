import React from 'react'
import Policycomponent from '../components/Privacy/Policycomponent'
import Terms from '../components/Privacy/Terms'
import CancellationRefund from '../components/Privacy/CancellationRefund'
const Privacy = () => {
  return (
    <div>
        <Policycomponent />
        <CancellationRefund />
        <Terms />
    </div>
  )
}

export default Privacy