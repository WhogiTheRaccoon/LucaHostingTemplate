import { BriefcaseIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const staffTeam = [
    {
        "name": "Brennan (Brummy)",
        "role": "Chief Executive Officer",
        "team": "Management",
        "bio": "Brennan has a passion for providing the best hosting experience for free",
        "image": "/images/team/brennan.svg",
        "flag": "/images/team/flags/unitedStates.svg"
    },
    {
        "name": "Evan (Whogi)",
        "role": "Chief Technology Officer",
        "team": "Management",
        "bio": "Evan is a talented developer and system administrator, Loves Raccoons",
        "image": "/images/team/whogi.gif",
        "flag": "/images/team/flags/unitedStates.svg"
    },
    {
        "name": "Adrian (Wave)",
        "role": "Support Specialist",
        "team": "Management",
        "bio": "Tech-savvy gamer passionate about computers, coding, and Minecraft.",
        "image": "/images/team/wave.svg",
        "flag": "/images/team/flags/denmark.svg"
    },
    {
        "name": "Josh (Gunter)",
        "role": "Support Specialist",
        "team": "Management",
        "bio": "Driven by a passion for helping people, with a love for tech & Minecraft ",
        "image": "/images/team/josh.svg",
        "flag": "/images/team/flags/unitedStates.svg"
    },
    {
        "name": "Greeb",
        "role": "Mascot",
        "team": "Management",
        "bio": "Greeb is the mascot of SanoServers, hes a slime dragon that loves to help",
        "image": "/images/team/greeb.svg",
        "flag": "/images/logo.png"
    }
]

export default function Staff() {

    // Filter the staff team by their team if we decide to sort them
    const management = staffTeam.filter(staff => staff.team === "Management")
    const support = staffTeam.filter(staff => staff.team === "Support Team")

    return (
        <section id="staff" className="py-16">
        <div className="container">
            <div className="flex flex-col text-white">
                <h1 className="text-white text-5xl text-center">Meet The Team </h1>
                <h2 className="text-muted text-lg text-center pt-2">Meet our dedicated team of professionally trying to change hosting forever</h2>
                
                <div className="flex flex-col md:flex-row gap-5 pt-5">
                    {staffTeam.map((staff, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative">
                                {/* Don't do this I'm the only one with an animated gif so it's fine, for some reason gifs have to be loaded unoptimized through nexts image component */}
                                {staff.image === "/images/team/whogi.gif" ? (
                                    <Image src={staff.image} alt={staff.name} width="600" height="600" unoptimized className="max-h-[257px] shadow-lg bg-foreground/50 rounded-t-md"/>
                                ) : (
                                    <Image src={staff.image} alt={staff.name} width="600" height="600" className="max-h-[257px] shadow-lg bg-foreground/50 rounded-t-md"/>
                                )}
                                <Image src={staff.flag} alt="Flag" width="64" height="64" className="size-10 absolute top-0 right-1"/>                                
                            </div>
                            <div className="bg-foreground rounded-b-md">
                                <h1 className="text-center text-xl font-bold pt-2 text-white">{staff.name}</h1>
                                <h2 className="text-center">{staff.role}</h2>
                                <p className="text-center text-muted p-2">{staff.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}