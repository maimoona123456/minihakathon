import Link from "next/link";
import Navbar from "../navbar/page";

function Contact(){
    return(
        <>
        <Navbar />
        
        <div className="flex items-center pt-5 justify-center min-h-screen">
      <div className=" bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter Your Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
          </div>

          <div className="mb-4">
            <label htmlFor="card" className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input type="text" id="card" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your card number"/>
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea id="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your address"/>
          </div>

          <Link href="./thankyoupage"><button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-black transition-colors">
            Place Your Order
          </button></Link>
        </form>
      </div>
    </div>
    <div className="py-1 text-center bg-black text-white">Footer (HomeWork class-6) <br />
                | Maimoona |GIAIC
                </div>
        </>
    )
}

export default Contact;