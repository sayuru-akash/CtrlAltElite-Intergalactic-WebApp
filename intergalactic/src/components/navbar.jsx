import React from 'react'
import footer from './footer'
import Link from 'next/link'

export const navbar = () => {
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

export default navbar