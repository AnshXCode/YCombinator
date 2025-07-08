
//keep in mind here file name must be layout itself for next to recognize that it has a specific layout system
import React from 'react'

function dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>dashboard</div>
      {children}
    </div>
  )
}

export default dashboard