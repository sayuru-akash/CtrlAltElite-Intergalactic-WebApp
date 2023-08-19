import Image from "next/image"


export default function Info() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-end h-[700px] px-9 lg:px-14" style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12 ">Complete Booking</h1>
       </div>
       <div className="flex flex-col lg:flex-row mx-4 lg:mx-14 gap-20 my-4 lg:my-16 text-white ">
            <div id="gradient-border" className="p-4 lg:p-16  px-4 lg:px-28 flex flex-row justify-between lg:hidden">
                    <div className="flex-flex-col">
                        <Image src="/images/rocket .png" className="w-48 h-48" alt="rocket" width={500} height={500}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xl  mb-7">
                        <span className="text-sm">Lockheed Dreamcatcher</span><br />
                        Earth to Pandora
                        </p>
                        <p className="font-semibold text-sm mb-5">Departure Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-sm mb-5">No. of Passengers: <span className="font-light">7</span></p>
                        <p className="font-semibold text-sm mb-5">Travel Time: <span className="font-light">14 Days</span></p>
                    </div>
                </div>
            <div className="flex flex-col w-full lg:w-1/2">
                <p className="mb-7 font-bold text-2xl">Persanol Information</p>
                <form action="">
                    <input type="text" placeholder="Name on The Card" className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"/>
                    <input type="text" placeholder="Card Number" className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"/>
                    <input type="text" placeholder="Email Address" className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"/>
                    <input type="text" placeholder="Exp. Date" className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"/>
                    <input type="text" placeholder="CVV Number" className=" bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"/>
                </form>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 sm :hidden">
                <div
                id="gradient-border" className="pt-16 pb-14 px-10 flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl  mb-7">
                        <span className="text-xl">Lockheed Dreamcatcher</span><br />
                        Earth to Pandora
                        </p>
                        <p className="font-semibold text-base mb-5">Departure Date: <span className="font-light">25th Aug, 3158</span></p>
                        <p className="font-semibold text-base mb-5">No. of Passengers: <span className="font-light">7</span></p>
                        <p className="font-semibold text-base mb-5">Travel Time: <span className="font-light">14 Days</span></p>
                    </div>
                    <div className="flex-flex-col">
                        <Image src="/images/rocket .png" className="w-56 h-56" alt="rocket" width={500} height={500}/>
                    </div>
                </div>
                <div className="flex flex-col content-center justify-center px-7" id="gradient-border">
                    <div className="flex flex-row justify-between items-center mt-10 mb-5">
                        <p className="text-xl font-light">Total</p>
                        <p className="font-bold text-3xl">0.25 USD</p>
                    </div>
                    <button className="py-7 px-28 font-bold text-xl rounded-md mb-14" id="gradient-button">
                        Complete Payment
                    </button>
                </div>
            </div>
       </div>
    </section>
  )}