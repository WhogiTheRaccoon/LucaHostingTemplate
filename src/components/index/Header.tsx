import { ChevronRightIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image";

export default function Header() {
    return (
        <section id="halo" className="relative header-bg shadow-lg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/background.png')" }}> 
            <div className="container px-5 py-50">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col space-y-6 text-white w-full sm:w-full  md:w-full xl:w-1/2 mx-auto text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold">Your goto host <br/> with pure performance</h1>
                        <p className="text-xl text-muted">Welcome to your ultimate destination for instantly deployable game servers. Experience fast, secure, and reliable hosting designed to make server management effortless and enjoyable.</p>
                        <div className="flex flex-col md:flex-row items-center">
                            <a href="https://billing.sanoservers.com" className="bg-accent hover:bg-accent/50 text-white py-2 px-4 rounded-full flex text-xl items-center">Let's Get Started <ArrowRightCircleIcon className="size-10 pl-2" /> </a>
                            <a href="/about" className="bg-transparent hover:text-accent text-white py-2 px-4 rounded-xl ml-4 flex text-xl">About Us <ChevronRightIcon className="size-7 pl-2" /></a>
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto hidden md:hidden lg:hidden xl:block">
                        <Image src="/images/magicMan.png" alt="SanoServers" width="620" height="180" className="absolute top-[8rem] right-[30rem] animate-[float_3s_ease-in-out_infinite]" />    
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 pt-20 relative">
                    <div className="p-5 bg-foreground rounded-lg w-full md:w-1/5 animate-up">
                        <h1 className="text-white text-xl">Free Game Servers</h1>
                        <h2 className="text-muted text-md">Sano's Game Servers provides completely free game servers with no strings attached--just reliable hosting.</h2>
                    </div>
                    <div className="p-5 bg-foreground rounded-lg w-full md:w-1/5 animate-up">
                        <h1 className="text-white text-xl">Free Included Web Hosting</h1>
                        <h2 className="text-muted text-md">We provide Direct Admin web hosting for your communities and web needs with industry leading services</h2>
                    </div>
                    <div className="p-5 bg-foreground rounded-lg w-full md:w-1/5 animate-up">
                        <h1 className="text-white text-xl">DDoS Protection</h1>
                        <h2 className="text-muted text-md">All of our servers are protected behind 4+ TB PATH.Net protection with game filtering.</h2>
                    </div>
                    <div className="p-5 bg-foreground rounded-lg w-full md:w-1/5 animate-up">
                        <h1 className="text-white text-xl">Ryzen 7950x Processors</h1>
                        <h2 className="text-muted text-md">Sano's Game Servers run at extremely fast processing speeds with top of the line hardware.</h2>
                    </div>
                    <div className="p-5 bg-foreground rounded-lg w-full md:w-1/5 animate-up">
                        <h1 className="text-white text-xl">Industry Standard Systems</h1>
                        <h2 className="text-muted text-md">Sano's runs with the leading systems that many other PAID hosts use, without breaking the bank.</h2>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-x-clip">
                    <div className="w-128 h-1 bg-accent animate-[slide_5s_linear_infinite] glow-outwards"></div>
                </div>
            </div>
        </section>
    )

}
