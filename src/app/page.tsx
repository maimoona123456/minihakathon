import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/page";
import HeroPage from "./components/home/page";
import Contact from "./components/contact/page";
import About from "./components/about/page";
import Thankyoupage from "./components/thankyoupage/page";



export default function Home() {
  return (
    <>
    <Navbar />
    <HeroPage />
    <Contact />
    <About />
    <Thankyoupage />
    
    
    
  
    </>
  );
}