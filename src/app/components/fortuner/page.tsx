import Link from "next/link";
import Navbar from "../navbar/page";

function Fortuner() {
    return (
        <>
            <Navbar />
            <center>
                <div className="h-screen pt-8">
                    <h1 className="text-slate-700 pb-10 font-semibold text-3xl text-center px-4">
                        Fortuner 2024 Price in Pakistan, Images, Reviews & Specs
                    </h1>
                    
                    {/* Image Section */}
                    <div className="border-2 w-full max-w-md mx-auto border-black">
                        <img
                            src="/Fortuner.png"
                            alt="Home Image"
                            className="w-full h-80 transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                    <br /> <br />

                    {/* Buttons Section */}
                    <div className="flex flex-wrap justify-center gap-4 px-4">
                        <button className="border-2 border-slate-600 px-6 py-4">Book a test Drive</button>
                        <button className="border-2 border-slate-600 px-6 py-4">Request Bank Finance</button>
                        <button className="border-2 border-slate-600 px-6 py-4">Visit Place</button>
                        <button className="border-2 bg-black font-semibold text-white border-slate-600 px-6 py-4">Car Inspection</button>
                    </div>
                    <br />

                    <h1 className="text-3xl text-center">Vehicle Description</h1>
                    <br />

                    {/* Vehicle Description */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-24">
                        <p><b>• Number Of Doors:</b> 4</p>
                        <p><b>• Engine:</b> 1800 CC</p>
                        <p><b>• Condition:</b> 8.5 / 10</p>
                        <p><b>• Driven:</b> 9,500 KM</p>
                    </div>
                    <br />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-24">
                        <p><b>• Suspension Type:</b> Soft Suspension</p>
                        <p><b>• AVG:</b> 13 Km per ltr</p>
                        <p><b>• Transmission:</b> Automatic</p>
                        <p><b>• Fuel Type:</b> High Octane</p>
                    </div>
                    <br />

                    <h3 className="font-semibold text-emerald-600 text-center text-xl pb-10">PKR 50,00,000</h3>
                    <Link href="./contact">
                        <div>
                            <button className="border-2 bg-black font-semibold text-white border-slate-600 px-6 py-4">
                                Make Payment
                            </button>
                        </div>
                    </Link>
                    <br /><br />

                    <div className="py-1 bg-black text-white text-center">
                        Footer (HomeWork class-6) <br />
                        | Maimoona |GIAIC 
                    </div>
                </div>
            </center>
        </>
    );
}

export default Fortuner;