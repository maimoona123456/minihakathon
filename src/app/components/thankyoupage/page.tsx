import Link from "next/link";

function ThankyouPage(){
    return(
        <>
        <center>
        <div className="bg-slate-600 h-screen">
            <h1 className="pt-32 text-white font-bold text-7xl">Thank you for shopping!!!</h1>
            <p className="text-white pt-3  line-through">Aty jaty rahiyega</p>
            <p className="text-white text-xl pt-7 pb-8 font-semibold">Your order will be delivered in 3 Business days</p>
            <Link href="/"><button className="bg-white text-black px-4 py-2 rounded-lg text-lg">Go Back</button></Link>
        </div>
        </center>
        </>
    )
}

export default ThankyouPage;