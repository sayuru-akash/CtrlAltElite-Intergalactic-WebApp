import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEarthAmericas, faSearch} from "@fortawesome/free-solid-svg-icons";

function Flights() {
  return (
    <div className="flex flex-col lg:flex-row lg-flex-row gap-4 px-14 py-32 text-xl font-normal text-white">
    <div className="w-1/2 relative rounded-md"
    id="#gradient-border">
        <select className="w-full px-6 py-5 bg-transparent rounded-md">
            <option value="earth19996">From: Earth 19996</option>
            <option value="mars">From: Mars</option>
        </select>
        <div className="absolute top-1/2 right-4">
            <FontAwesomeIcon icon={faEarthAmericas} />
        </div>
    </div>
    <div className="w-1/2 relative  rounded-md"
    id="#gradient-border">
        <input type="text" className="w-full px-6 py-5 bg-transparent rounded-md" placeholder="Search"/>
        <div className="absolute top-1/2 right-4">
            <FontAwesomeIcon icon={faSearch} />
        </div>
    </div>
</div>


  );
}

export default Flights;