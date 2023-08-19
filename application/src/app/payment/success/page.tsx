import Image from "next/image"


export default function Info() {
  return (
    <section className="mt-44 lg:mt-72">
       <div className="flex flex-col justify-center items-center mx-4 lg:mx-14 gap-20 my-4 lg:my-16 text-white ">
            <div className="flex flex-col pt-16 pb-14 px-10">
                    <div className="flex flex-col text-center justify-center items-center content-center mb-9">
                        <Image src="/images/check.png" alt="check" className="h-44 w-52" width={300} height={300}/>
                        <p className="font-bold text-4xl mb-7">
                            Payment Success
                        </p>
                        <p className="text-xl font-light max-w-[650px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <button className="py-7 px-0 lg:px-28 font-bold text-xl rounded-md mb-14" id="glowing-border">
                        Proceed To Payment
                    </button>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
                <div
                id="gradient-border" className="pt-16 pb-14 px-4 lg:px-10 flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl mb-7">
                        <span className="text-sm">Lockheed Dreamcatcher</span><br />
                        Earth to Pandora
                        </p>
                        <p className="font-semibold text-sm mb-5">Departure Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-sm mb-5">No. of Passengers: <span className="font-light">7</span></p>
                        <p className="font-semibold text-sm mb-5">Travel Time: <span className="font-light">14 Days</span></p>
                    </div>
                    <div className="flex-flex-col">
                        <Image src="/images/rocket .png" className="w-40 h-40" alt="rocket" width={500} height={500}/>
                    </div>
                </div>
                <div className="flex flex-col content-center justify-center px-7" id="gradient-border">
                    <div className="flex flex-row justify-between items-center mt-10 mb-5">
                        <p className="text-xl font-light">Total</p>
                        <p className="font-bold text-3xl">0.25 USD</p>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )}