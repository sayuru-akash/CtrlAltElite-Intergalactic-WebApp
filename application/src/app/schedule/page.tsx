import { faCalendar, faChevronRight, faCircle, faFilter, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Schedule() {
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
        <div className="mx-9 lg:mx-14 flex flex-col">
            <p className="text-white font-extralight text-xl mb-2.5">Search Flights by Departure date and number of passengers</p>
            <div className="flex flex-row justify-between content-center px-4 lg:px-16 py-6 text-white "
            id="glowing-border">
                <div className="flex flex-row justify-between items-center">
                    <FontAwesomeIcon icon={faCalendar} className="text-xl lg:text-3xl px-1  lg:px-3.5"/>
                    <div className="flex flex-col px-3.5">
                        <p className="font-extralight  text-sm lg:text-xl">
                            Departure Date
                        </p>
                        <p className="text-xl lg:text-3xl font-bold">
                        23, Aug
                        </p>
                    </div>
                    </div>
                <div className="flex flex-row justify-between items-center">
                <div className="w-0.5 h-16 bg-gray-500 sm:mx-3.5"></div>
                    <FontAwesomeIcon icon={faUsers} className="text:xl lg:text-3xl px-1 lg:px-3.5"/>
                    <div className="flex flex-col px-3.5">
                        <p className="font-extralight  text-sm lg:text-xl">
                        No. of Passengers
                        </p>
                        <p className="text-xl lg:text-3xl font-bold">
                        7
                        </p>
                    </div>
                </div>
                <div className="w-0.5 h-16 bg-gray-500 sm:mx-3.5"></div>
                <div className="flex flex-row justify-between items-center">
                    <FontAwesomeIcon icon={faSearch} className="text:xl lg:text-3xl px-1 lg:px-3.5"/>
                </div>
            </div>
        </div>
        <div className="mx-9 lg:mx-14 flex flex-col mt-5 pb-11">
            <div className="flex flex-row justify-between content-center">
                <p className="text-white font-extralight text-xl mb-2.5">Search Options</p>
                <button className="text-white text-xl font-medium">
                    Filter
                    <FontAwesomeIcon icon={faFilter} className="text-white ml-3.5"/>
                </button>
            </div>
        </div>
        
        {/* flight list */}
        <div className="mx-9 lg:mx-14 flex flex-col lg:flex-row lg-flex-row gap-4 justify-between text-white">
            <div className="flex flex-row justify-between content-center w-full lg:w-[581px]"
            id="glowing-border"
            >
                <div className="flex flex-col justify-center content-center">
                    <Image src="/images/bluerocket.png" className="h-32 lg:h-48 w-28 lg:w-32 my-6 lg:my-12 mx-5" alt="rocket" width={500} height={500}/>
                </div>
                <div className="flex flex-col justify-between content-center my-16">
                    <p className="font-semibold text-xl mb-3">SpaceX Starship</p>
                    <ul className="mb-6">
                        <li className="text-lg font-light"><FontAwesomeIcon icon={faCircle}/> 14 Days Travel Time</li>
                        <li className="text-lg font-light"><FontAwesomeIcon icon={faCircle}/> Blackhole Watching Included</li>
                    </ul>
                    <p className="text-3xl font-semibold text-white" id="text-gradient">$99.99</p>
                </div>
                <div className="flex flex-col justify-center content-center">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-6"/>
                </div>
            </div>
            <div className="flex flex-row justify-between content-center w-full lg:w-[581px]"
            id="glowing-border"
            >
                <div className="flex flex-col justify-center content-center">
                    <Image src="/images/bluerocket.png" className="h-32 lg:h-48 w-28 lg:w-32 my-6 lf:my-12 mx-5" alt="rocket" width={500} height={500}/>
                </div>
                <div className="flex flex-col justify-between content-center my-16">
                    <p className="font-semibold text-xl mb-3">SpaceX Starship</p>
                    <ul className="mb-6">
                        <li className="text-lg font-light"><FontAwesomeIcon icon={faCircle}/> 14 Days Travel Time</li>
                        <li className="text-lg font-light"><FontAwesomeIcon icon={faCircle}/> Blackhole Watching Included</li>
                    </ul>
                    <p className="text-3xl font-semibold text-white" id="text-gradient">$99.99</p>
                </div>
                <div className="flex flex-col justify-center content-center">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-6"/>
                </div>
            </div>
        </div>
    </section>
  );
}