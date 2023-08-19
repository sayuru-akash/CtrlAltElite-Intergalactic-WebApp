import Image from "next/image"


export default function Info() {
  return (
    <section>
      <div className="relative flex flex-col content-end justify-end h-[700px] px-4 lg:px-14" style={{ backgroundImage: `url(/images/pandora.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="flex flex-row justify-start content-start text-white mb-24 lg:-mb-8">
            <Image src="/images/profile.png" className="rounded-full h-32 lg:h-40 w-32 lg:w-40 ml-2 lg:ml-14" alt="profile" height={300} width={300}/>
            <div className="flex flex-col justify-center px-4 lg:px-7">
                <p className="text-md lg:text-xl font-light">Welcome to Intergalactic</p>
                <p className="font-bold text-2xl lg:text-4xl">Dhananjaya Pasan</p>
            </div>
        </div>
       </div>
       <div className="flex flex-col lg:flex-row mx-4 lg:mx-14 gap-20 my-6 lg:my-16 text-white">
            <div className="flex flex-col lg:flex-row justify-between content-center gap-8 w-full lg:w-1/2">
                <div
                id="gradient-border" className="flex flex-col py-14 pl-5 justify-center content-center h-48 w-full">
                    <p className="font-semibold text-lg mb-14.8">
                        Distance Travelled
                    </p>
                    <p className="font-semibold text-5xl">
                        2698 LY
                    </p>
                </div>
                <div
                id="gradient-border" className="flex flex-col py-14 pl-5 h-48 justify-center content-center w-full">
                    <p className="font-semibold text-lg mb-3.5">
                       Points Collected
                    </p>
                    <p className="font-semibold text-5xl">
                        3.59Mn
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between content-center gap-8 w-full lg:w-1/2">
                <div
                id="gradient-border" className="flex flex-col py-6 px-4 lg:px-9 justify-center content-center h-16 w-full">
                    <p className="font-semibold text-base">
                        Distance Travelled
                    </p>
                </div>
                <div
                 className="flex flex-col h-16 justify-center content-center w-full border border-red-700 py-6 px-4 lg:px-9">
                    <p className="font-semibold text-base text-red-700">
                       Points Collected
                    </p>
                </div>
            </div>
       </div>
    </section>
  )}