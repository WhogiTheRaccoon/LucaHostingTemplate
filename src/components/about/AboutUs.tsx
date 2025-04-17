import Image from "next/image"

export default function AbotuUs() {
    return (
        <>
        <section id="mission" className="pb-16 pt-5 md:pt-0">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-6 items-center pt-5">
                        <Image src="/images/about/logoCube.webp" width={600} height={1080} alt="Past Companies" className="w-1/5 hidden lg:block animate-[float_5s_ease-in-out_infinite] scale-x-[-1]"/>

                        <div className="flex flex-col w-full">
                            <h1 className="text-white text-5xl text-left">Our Story Since 2018</h1>
                            <div className="text-muted text-lg pt-3 space-y-4">
                                <p>Sano Servers is more than just a hosting provider—it’s a passionate community that began in 2017 when Brennan and Evan met through Garry’s Mod. Brennan started hosting servers for friends, experimenting with Open Game Panel. In 2018, they joined FroHost, which was later acquired by Versatile Node in 2019.</p>
                                <p>This experience deepened their understanding of the hosting market and client frustrations. They later founded Ascienth (Mithix), which was acquired by Advin Servers before closing in 2021. During this time, Brennan continued private hosting, while Evan focused on system administration and web design.</p>
                                <p>Now, in 2025, Brennan has revived his passion with Sano Servers, dedicated to providing top-tier, free hosting. The team is excited about the future and committed to delivering the best possible experience without cost. Sano Servers isn’t just about hosting—it’s about community, innovation, and making high-quality hosting accessible to all.</p>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-6">
                        <div className="flex flex-col p-5 bg-foreground rounded-md text-white text-center glow-outwards animate-up">
                            <span className="text-4xl">250</span>
                            <span className="text-muted text-xl">Clients Served Globally</span>
                        </div>
                        <div className="flex flex-col p-5 bg-foreground rounded-md text-white text-center glow-outwards animate-up">
                            <span className="text-4xl">122</span>
                            <span className="text-muted text-xl">Servers Deployed</span>
                        </div>
                        <div className="flex flex-col p-5 bg-foreground rounded-md text-white text-center glow-outwards animate-up">
                            <span className="text-4xl">4Tbit</span>
                            <span className="text-muted text-xl">Network Capacity</span>
                        </div>
                        <div className="flex flex-col p-5 bg-foreground rounded-md text-white text-center glow-outwards animate-up">
                            <span className="text-4xl">1</span>
                            <span className="text-muted text-xl">Location</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}