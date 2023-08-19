import Link from "next/link";


export default function History() {
  return (
    <section className="">
        <div className="relative flex flex-col items-center justify-end h-[700px] px-9 " style={{ backgroundImage: `url(/images/hero.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">Booking History</p>
        </div>
        <div className="flex flex-col lg:flex-row lg-flex-row justify-between gap-8  text-xl font-normal text-white mt-16 mx-4 lg:mx-14">
            <div 
            className="flex flex-col justify-start items-start text-left gradient-border rounded-md py-9 px-5 h-96 w-full"
            id="glowing-border"
            style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="h-1/2 flex flex-row">
                    <p className="font-semibold text-base text-yellow-200">UPCOMING</p>
                </div>
                <div className="h-1/2 flex flex-row w-full gap-20">
                    <div className="w-full lg:w-1/2">
                        <p className="font-light text-base">From</p>
                        <p className="font-bold text-2xl mb-5">COOPER’S PLANET</p>
                        <p className="font-semibold text-base mb-1">Departure Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-base mb-1">Arrival Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-base mb-1">Shuttle: <span className="font-light">SpaceX Starchip</span></p>
                    </div>
                    <div className="w-full lg:w-1/2 items">
                        <p className="font-light text-base">To</p>
                        <p className="font-bold text-2xl mb-5">PANDORA</p>
                    </div>
                </div>
            </div>
            <div 
            className="flex flex-col justify-start items-start text-left gradient-border rounded-md py-9 px-5 h-96 w-full"
            id="glowing-border"
            style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="h-1/2 flex flex-row">
                    <p className="font-semibold text-base text-green-400">COMPLETED</p>
                </div>
                <div className="h-1/2 flex flex-row w-full">
                    <div className="w-1/2">
                        <p className="font-light text-base">From</p>
                        <p className="font-bold text-2xl mb-5">COOPER’S PLANET</p>
                        <p className="font-semibold text-base mb-1">Departure Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-base mb-1">Arrival Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-base mb-1">Shuttle: <span className="font-light">SpaceX Starchip</span></p>
                    </div>
                    <div className="w-1/2">
                        <p className="font-light text-base">To</p>
                        <p className="font-bold text-2xl mb-5">PANDORA</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
