import Link from "next/link";
import Navbar from "../navbar/page";

function About(){
    return(
        <>
        < Navbar />
        <div className="h-full bg-gradient-to-r from-slate-400 to-white pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {/* Car 1 Toyota orolla */}
            <div className="bg-slate-300 rounded-lg shadow-md pt-10 border-2 border-black px-7 ">
                <Link href="./corolla"> 
                    <img src="/Corolla.png" alt="Toyota Corolla" className="w-44 h-32 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </Link>
                <div className="pt-7">
                    <Link href="/corolla">
                        <h3 className="font-semibold text-slate-600 text-center text-lg border-t-slate-900 border-2">
                            Toyota Corolla
                        </h3>
                    </Link>
                    <p className="text-center pt-3 text-lime-600">PKR 59.7 - 75.5 Lacs</p>
                    <p className="text-center text-gray-500">621 Reviews</p>
                    <p className="text-center text-amber-500 pb-4">♥ ♥ ♥</p>
                </div>
            </div>

            {/* car-2  SuzukiAlto */}
            <div className="bg-slate-300 pt-10 rounded-lg shadow-md border-2 border-black px-7 ">
                <Link href="./suzuki"> 
                    <img src="/SuzukiAlto.png" alt="Suzuki Alto" className="w-44 h-32 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </Link>
                <div className="pt-7">
                    <Link href="/suzuki">
                        <h3 className="font-semibold text-slate-600 text-center text-lg border-t-slate-900 border-2">
                            Suzuki Alto
                        </h3>
                    </Link>
                    <p className="text-center pt-3 text-lime-600">PKR 23.3 - 30.5 Lacs</p>
                    <p className="text-center text-gray-500">200 Reviews</p>
                    <p className="text-center text-amber-500 pb-4">♥ ♥ ♥</p>
                </div>
            </div>

            {/* car-3 Fortuner */}
            <div className="bg-slate-300 rounded-lg shadow-md pt-10 border-2 border-black px-7 ">
                <Link href="./fortuner">
                    <img src="/Fortuner.png" alt="Toyota Fortuner" className="w-44 h-32 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </Link>
                <div className="pt-7">
                    <Link href="/fortuner">
                        <h3 className="font-semibold text-slate-600 text-center text-lg border-t-slate-900 border-2">
                            Toyota Fortuner
                        </h3>
                    </Link>
                    <p className=" text-center pt-3 text-lime-600">PKR 59.7 - 75.5 Lacs</p>
                    <p className="text-center text-gray-500">458 Reviews</p>
                    <p className="text-center text-amber-500 pb-4">♥ ♥ ♥</p>
                </div>
            </div>

            {/* Car-4 Honda City */}
            <div className="bg-slate-300 rounded-lg shadow-md pt-10 border-2 border-black px-7 ">
                <Link href="./hondaCity">
                    <img src="/HondaCity.png" alt="Honda City" className="w-44 h-32 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </Link>
                <div className="pt-7">
                    <Link href="/hondaCity">
                        <h3 className="font-semibold text-slate-600 text-center text-lg border-t-slate-900 border-2">
                            Honda City
                        </h3>
                    </Link>
                    <p className="text-center pt-3 text-lime-600">PKR 46.5 - 58.5 Lacs</p>
                    <p className="text-center text-gray-500">42 Reviews</p>
                    <p className="text-center text-amber-500 pb-4">♥ ♥ ♥</p>
                </div>
            </div>
        </div>

        <div className="py-1 bg-black text-center text-white mt-10">
            Footer (HomeWork class-6) <br /> | Maimoona |GIAIC
        </div>
        </div>
       </>
    )
}

export default About;

