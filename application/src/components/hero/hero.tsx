import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Hero(){
    return (
        <div className="relative flex flex-col items-center justify-end h-[700px] " style={{ backgroundImage: `url(/images/hero.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Image src="/logo.png"className="mb-3.5 w-64 h-9"  width={400} height={100} alt="Logo"/>
            <h1 className="text-5xl font-bold text-white text-center mb-9">Making intergalactic Travel Lorem<br/>Ipsum Doler Sit Amet</h1>
            <Link href="/booking" passHref className="flex flex-col items-center text-xl text-white gap-4 font-normal mb-8">
                View Destinations
                <FontAwesomeIcon icon={faChevronDown}/>
            </Link>
        </div>
    );
};

export default Hero;
