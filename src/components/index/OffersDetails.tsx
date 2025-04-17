import { LifebuoyIcon, WifiIcon, BoltIcon, GlobeAltIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'

const offers = [
    {
        "name": "DDos Protection",
        "description": "Our Game Servers are protected behind PATH.Net DDoS protection with configured Game filters to stop heavy attacks.",
        "icon": LifebuoyIcon
    },
    {
        "name": "Internet Speed",
        "description": "All of our services are running on 10 Gb/s networks, providing the fastest possible upload/download speeds.",
        "icon": WifiIcon
    },
    {
        "name": "Powerful Hardware",
        "description": "Both our Game and Web services are running on the latest hardware to provide the fastest performance to our users.",
        "icon": BoltIcon
    },
    {
        "name": "U.S Based Locations",
        "description": "All of our services are currently based in the United States with fast response times!",
        "icon": GlobeAltIcon
    },
    {
        "name": "Dedicated Support",
        "description": "Our support team is dedicated to keeping your time with us enjoyable! We all love gaming just like you!",
        "icon": LifebuoyIcon
    },
    {
        "name": "Always Monitored",
        "description": "We are always monitoring and making improvements to Sano and its infrastructure! When anything happens, we know immediately!",
        "icon": ComputerDesktopIcon
    }
]


export default function OffersDetails() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-16">
            { offers.map((offer, index) => (
                <div key={index} className="flex flex-col text-white bg-foreground p-5 rounded-xl border-2 border-borders animate-up">
                    <div className="flex flex-row items-center">
                        <offer.icon className="size-8 text-accent" />
                        <h1 className="text-xl text-muted pl-1">{offer.name}</h1>
                    </div>
                    <p className="text-lg">{offer.description}</p>
                </div>
            )) }
        </div>
    )
}