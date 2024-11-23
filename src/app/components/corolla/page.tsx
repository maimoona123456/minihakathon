import Link from "next/link";
import Navbar from "../navbar/page";

function Corolla() {
    return (
        <>
            <Navbar />
            <center>
                <div className="h-full pt-8">
                    <h1 className="text-slate-700 pb-10 font-semibold text-3xl text-center px-4">
                        Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
                    </h1>

                    {/* Image section */}
                    <div className="border-2 w-full max-w-md mx-auto border-black">
                        <img
                            src="/Corolla.png"
                            alt="Toyota Corolla"
                            className="w-full h-80 p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                    <br /><br />

                    {/* Buttons section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-24">
                        <button className="border-2 bg-black font-semibold text-white border-slate-600 px-6 py-4">
                            Book a test Drive
                        </button>
                        <button className="border-2 border-slate-600 px-6 py-4">
                            Request Bank Finance
                        </button>
                        <button className="border-2 border-slate-600 px-6 py-4">
                            Visit Place
                        </button>
                        <button className="border-2 border-slate-600 px-6 py-4">
                            Car Inspection
                        </button>
                    </div>
                    <br />

                    {/* Vehicle Description */}
                    <h1 className="text-3xl text-center">Vehicle Description</h1>
                    <br />

                    {/* Car details section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-24">
                        <p><b>•  Number Of Doors:</b> 4</p>
                        <p><b>•  Engine:</b> 1800 CC</p>
                        <p><b>•  Condition:</b> 8.5 / 10</p>
                        <p><b>•  Driven:</b> 9,500 KM</p>
                    </div>
                    <br />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-24">
                        <p><b>•  Suspension Type:</b> Soft Suspension</p>
                        <p><b>•  AVG:</b> 13 Km per ltr</p>
                        <p><b>•  Transmission:</b> Automatic</p>
                        <p><b>•  Fuel Type:</b> High Octane</p>
                    </div>
                    <br />

                    {/* Price and Payment button */}
                    <h3 className="font-semibold text-emerald-600 text-center text-xl pb-10">PKR 50,00,000</h3>
                    <Link href="./contact">
                        <button className="border-2 bg-black font-semibold text-white border-slate-600 px-6 py-4">
                            Make Payment
                        </button>
                    </Link>
                    <br /><br />

                    {/* Footer */}
                    <div className="py-1 bg-black text-white text-center">
                        Footer (HomeWork class-6) <br />
                        |  Maimoona |GIAIC 
                    </div>
                </div>
            </center>
        </>
    )
}

export default Corolla;