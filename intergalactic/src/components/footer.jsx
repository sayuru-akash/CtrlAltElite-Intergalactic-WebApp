import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export const footer = () => {
  return (
    <div class="container1">
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

export default footer
