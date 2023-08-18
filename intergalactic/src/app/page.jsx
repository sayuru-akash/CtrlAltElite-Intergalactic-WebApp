import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div class="pname">
      <div class="infor">
      <h1>PANDORA</h1>
      <text>Alpha Centauri A system</text>
      </div>
      <div className='tab'>
        <ol>
          <li><a href="">Schedule Your Flight</a></li>
			    <li><a href="">About Pandora</a></li>
        </ol>
      </div>
      <div class="desc">
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="desc1">
        <h2>Culture</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="desc2">
        <h2>Weather</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
      </div>
      <div class="desc3">
      <h2>Gallery</h2>
      <br></br>
      <Image src="/3.png" alt="kkk" width={1040} height={457}/>
      </div>
    </div>
  )
}
