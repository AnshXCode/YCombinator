import React from 'react'
import Hello from "../../components/Hello"

async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); 
  return (
    <div>
      <div>Page</div>
      <Hello />
    </div>
  )
}

export default Page