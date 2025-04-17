import Image from 'next/image';

export default function Header() {
    return (
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/webBackground.png')"}}>
            <div className="container px-5 lg:px-0 pt-64 pb-32">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-1/3 mx-auto space-y-3 text-center md:text-left">
                        <h1 className="text-5xl text-white font-bold">Premium Web Hosting With Our Control Panel</h1>
                        <h2 className="text-2xl text-muted">Experience lightning-fast servers, unbeatable uptime, and our intuitive control panel for complete web hosting management.</h2>
                        <div className="flex flex-row gap-6 pt-3 mx-auto md:mx-0">
                            <a href="https://billing.sanoservers.com" className="px-4 py-2 text-2xl text-white bg-accent hover:bg-accent/50 rounded-xl">Get Started</a>
                            <a href="https://billing.sanoservers.com" className="px-4 py-2 text-2xl text-white bg-background hover:bg-foreground border border-borders rounded-xl">Learn More</a>
                        </div>
                        <div className="flex flex-row text-white pt-5 place-content-between">
                            <div className="flex flex-col text-center">
                                <span className="text-4xl font-bold">98%</span>
                                <span className="text-base">Uptime Guarantee</span>
                            </div>
                            <div className="flex flex-col text-center">
                                <span className="text-4xl font-bold">24/7</span>
                                <span className="text-base">Technical Support</span>
                            </div>
                            <div className="flex flex-col text-center">
                                <span className="text-4xl font-bold">5x</span>
                                <span className="text-base">Faster Loading</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 hidden sm:hidden md:hidden lg:block animate-float">
                        <Image src="/images/webPanel.png" width={800} height={800} alt="Web Hosting" className="rounded-md glow-outwards animate-[float_5s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>
            <div className="relative bottom-0 left-0 w-full overflow-x-clip">
                <div className="w-128 h-1 bg-accent animate-[slide_5s_linear_infinite] glow-outwards"></div>
            </div> 
        </section>
    )
}