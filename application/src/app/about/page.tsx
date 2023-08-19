import { faCalendar, faChevronRight, faCircle, faFilter, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <FontAwesomeIcon icon={faSearch} className="text-3xl px-3.5"/>
                </div>
            </div>
        </div>
    </section>
  );
}