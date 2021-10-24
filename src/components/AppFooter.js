import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span>DRK TEXTNOW</span>
        <span className="ms-1">&copy; 2021 team</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <span>DRK TEXTNOW</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
