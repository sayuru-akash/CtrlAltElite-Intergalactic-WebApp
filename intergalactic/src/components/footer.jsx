import Link from 'next/link'
import React from 'react'

export const footer = () => {
  return (
    <div>
      <Link href="/">logo</Link>
      <div>
      <Link href="/">HOME</Link>
      <Link href="/">BOOKING HISTORY</Link>
      <Link href="/">MY ACCOUNT</Link>
      </div>
    </div>
  )
}

export default footer
