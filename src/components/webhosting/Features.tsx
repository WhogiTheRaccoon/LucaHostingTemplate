import { ServerIcon, FolderArrowDownIcon, BoltIcon, CpuChipIcon, Cog6ToothIcon, ArrowUpCircleIcon, SparklesIcon, ShieldCheckIcon } from "@heroicons/react/24/solid"

const features: Array<object> = [
    {
        "name": "Advanced Control Panel",
        "description": "A simple and intuitive web-based control panel for server management with tons of features.",
        "Icon": ServerIcon
    },
    {
        "name": "One-Click App installers",
        "description": "Allows easy installation of software like WordPress, Joomla, and more with Softaculous Integration.",
        "Icon": FolderArrowDownIcon
    },
    {
        "name": "Optimized Performance",
        "description": "Optimized for speed and efficiency and minimal resource consumption with features to optimize your use case.",
        "Icon": BoltIcon
    },
    {
        "name": "Latest Hardware",
        "description": "Our Web Hosting runs on high performance Ryzen processors and enterprise hardware.",
        "Icon": CpuChipIcon
    },
    {
        "name": "Easy Configuration",
        "description": "We use DirectAdmin which is a leading web panel for users to easily configure their webhost.",
        "Icon": Cog6ToothIcon
    },
    {
        "name": "Backup & Restore",
        "description": "We offer easy Backup and Restore capabilities of your website at your discretion.",
        "Icon": ArrowUpCircleIcon
    },
    {
        "name": "LiteSpeed Support",
        "description": "We offer LiteSpeed web server optimization for improved performance.",
        "Icon": SparklesIcon
    },
    {
        "name": "Mod Security Integration",
        "description": "Enhances security by blocking malicious web requests",
        "Icon": ShieldCheckIcon
    }
]

export default function Features() {
    return (
        <section id="features" className="py-16">
            <div className="container">
                <div className="flex flex-col">
                    <h1 className="text-white text-5xl text-center">Powerful Features </h1>
                    <h2 className="text-muted text-lg text-center pt-2">Everything you need to manage your website efficiently with our comprehensive hosting solution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 text-white gap-6 pt-5">
                        { features.map((feature: any, index: any) => (
                            <div key={index} className="flex flex-col rounded-md bg-foreground p-5 space-y-2 animate-up">
                                <feature.Icon className="size-18 bg-background/25 rounded-md p-2" />
                                <span className="text-white font-bold text-2xl">{feature.name}</span>
                                <span className="text-muted text-lg">{feature.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}