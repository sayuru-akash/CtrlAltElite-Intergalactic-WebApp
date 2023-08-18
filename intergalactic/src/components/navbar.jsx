import React from 'react'
import footer from './footer'
import Link from 'next/link'
import { ImageError } from 'next/dist/server/image-optimizer'
import Image from 'next/image'

export const navbar = () => {
  return (
    <div class="container">
      <div id="img"><Image src="/1.png" alt="kkk" width={190} height={25}/></div>
      <div id="links">
      <ul>
        <li><a class="link" href="">HOME</a></li>
			  <li><a class="link" href="">BOOKING HISTORY</a></li>
			  <li><a class="link" href="">MY ACCOUNT</a></li>
		</ul>
    </div>
    </div>
  )
}

export default navbar