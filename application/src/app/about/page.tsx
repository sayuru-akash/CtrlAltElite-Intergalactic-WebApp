import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <div className="relative flex flex-col items-start justify-end h-[700px] px-9 lg:px-14" style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2.5">PANDORA</h1>
            <p className="text-xl font-normal text-white mb-16">Making intergalactic Travel Lorem<br/>Ipsum Doler Sit Amet</p>
       </div>
       <div className="flex flex-col lg:flex-row justify-center gap-4 items-center font-bold text-2xl text-white -mt-8 mx-9 mb-16 lg:mb-14">
            <Link href="/schedule/pandora" className="relative bg-black opacity-75 backdrop-blur-2 w-full lg:w-96 h-32 lg:h-16 flex items-center justify-center" id="glowing-border">
                Schedule Your Flight
            </Link>

            <Link href="/about/pandora" className="relative bg-black opacity-75 backdrop-blur-2 w-full lg:w-96 h-16 flex items-center justify-center mx-9" id="glowing-border">
                About Pandora
            </Link>
        </div>
       <div className="px-9 lg:px-36 text-white">
            <p className="font-bold text-2xl mb-6">Description</p>
            <p className="font-normal text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="font-bold text-2xl mb-6">Culture</p>
            <p className="font-normal text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="font-bold text-2xl mb-6">Weather</p>
            <p className="font-normal text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="font-bold text-2xl mb-6">Gallery</p>
            <Image src="/images/pandora.png" alt="pandora"width={1500} height={800}
            className="w-full  mb-12"
            />
       </div>
    </section>
  );
}