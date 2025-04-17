import Image from 'next/image'
export default function Features() {
    return (
        <section id="features" className="bg-foreground/35 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row place-content-evenly py-16 space-y-3 md:space-y-0">
                    <div className="flex flex-col">
                        <Image src="/images/games/features/mods.webp" width={300} height={300} alt="Plugin Installer" className="size-24 mx-auto" />
                        <h1 className="text-white font-bold text-2xl pt-1 text-center md:text-left">Plugin Installer</h1>
                    </div>

                    <div className="flex flex-col">
                        <Image src="/images/games/features/players.webp" width={300} height={300} alt="Plugin Installer" className="size-24 mx-auto" />
                        <h1 className="text-white font-bold text-2xl pt-1 text-center md:text-left">Player Manager</h1>
                    </div>

                    <div className="flex flex-col">
                        <Image src="/images/games/features/plugin.webp" width={300} height={300} alt="Plugin Installer" className="size-24 mx-auto" />
                        <h1 className="text-white font-bold text-2xl pt-1 text-center md:text-left">Modpack Installer</h1>
                    </div>

                    <div className="flex flex-col">
                        <Image src="/images/games/features/file.webp" width={300} height={300} alt="Plugin Installer" className="size-24 mx-auto" />
                        <h1 className="text-white font-bold text-2xl pt-1 text-center md:text-left">Version Control</h1>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full overflow-x-clip">
                <div className="w-128 h-1 bg-accent animate-[slide_5s_linear_infinite] glow-outwards"></div>
            </div> 
            <div className="absolute bottom-0 left-0 w-full overflow-x-clip">
                <div className="w-128 h-1 bg-accent animate-[slide_5s_linear_infinite] glow-outwards"></div>
            </div> 
        </section>
    )
}