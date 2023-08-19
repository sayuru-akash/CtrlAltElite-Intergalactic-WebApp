import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faEarthAmericas, faSearch} from "@fortawesome/free-solid-svg-icons";

function Flights() {
  return (
    <section className="px-14 py-32">
        <div className="flex flex-col lg:flex-row lg-flex-row gap-4 text-xl font-normal mb-7">
            <div className="flex w-full lg:w-1/2  items-center"
            id="gradient-border">
                <select className="w-full px-6 py-5 bg-black rounded-md text-white">
                    <option value="earth19996">From: Earth 19996</option>
                    <option value="mars">From: Mars</option>
                </select>
                <div className="relative right-4">
                    <FontAwesomeIcon icon={faEarthAmericas} className="text-white"/>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 relative items-center"
            id="gradient-border">
                <input type="text" className="w-full px-6 py-5 bg-transparent rounded-md text-white focus:outline-none bg-black" placeholder="Search"/>
                <div className="relative right-4">
                    <FontAwesomeIcon icon={faSearch} className="text-white"/>
                </div>
            </div>
        </div>

    {/* flights list */}
    
        <div className="flex flex-col lg:flex-row lg-flex-row justify-between gap-4  text-xl font-normal text-white">
            <div 
            className="flex flex-col justify-end content-center text-left gradient-border rounded-md py-9 px-5 h-96 w-full"
            id="glowing-border"
            style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <p className="font-bold text-2xl mb-3.5">COOPER’S PLANET</p>
                <p className="font-thin text-xl mb-5">Change Departure Planet</p>
                <Link href="#" className="text-yellow-200 font-bold">VIEW FLIGHTS <FontAwesomeIcon icon={faAngleDoubleRight}/></Link>
            </div>
            <div 
            className="flex flex-col justify-end content-center text-left gradient-border rounded-md py-9 px-5 h-96 w-full"
            id="glowing-border"
            style={{ backgroundImage: `url(/images/hero.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <p className="font-bold text-2xl mb-3.5">COOPER’S PLANET</p>
                <p className="font-thin text-xl mb-5">Change Departure Planet</p>
                <Link href="#" className="text-yellow-200 font-bold">VIEW FLIGHTS <FontAwesomeIcon icon={faAngleDoubleRight}/></Link>
            </div>
        </div>
    </section>

  );
}

export default Flights;