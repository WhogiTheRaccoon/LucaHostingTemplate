"use client"
import { useState } from 'react'
import Image from 'next/image'
import OffersDetails from '@/components/index/OffersDetails'
import { CheckIcon } from '@heroicons/react/24/solid'

const offers = [
    {
        name: "Game Hosting",
        description: "At Sano Servers, we are committed to making sure our users feel well taken care of, even with our completely free hosting services. We aim to provide an enjoyable, stress-free experience where you have full control over your server. Whether you're just starting out or have years of experience, we offer the tools and support you need to manage and customize your server without any hidden fees or limitations.",
        link: '/gameservers',
        image: '/images/offers/gamePanel.webp',
        price: 0,
        features: [
            "SFTP Access",
            "Player/Sub User Management",
            "Easy Minecraft configuration",
            "Version Changer",
            "Plugins Installer",
            "Mod Installer",
            "Modpack Installer",
            "Schedules"
        ]   
    },
    {
        name: "Web Hosting",
        description: "At Sano, we are dedicated to providing you with a seamless hosting experience through DirectAdmin, all at no cost. Our goal is to ensure you feel fully supported, whether you're a beginner or an experienced user. With full control over your hosting environment, you can easily manage your domains, emails, databases, and more—without any hidden fees or restrictions.",
        link: '/webhosting',
        image: '/images/offers/webPanel.webp',
        price: 0,
        features: [
            "SFTP Access",
            "User/Account Management",
            "Full DNS Management",
            "Email Account Management",
            "Integrated File Manager",
            "Database Management",
            "Backup & Restore",
            "SSL Certificate Management"
        ]  
    },
    {
        name: "Cloud Hosting",
        description: "Coming Soon",
        link: '/cloud',
        image: '/images/offers/cloudPanel.webp',
        price: 10.00,
    },
    {
        name: "Bot Hosting",
        description: "At Sano Servers, we are dedicated to offering completely free Discord bot hosting, ensuring you have a smooth and hassle-free experience. Powered by Pterodactyl, our platform gives you full control over your bot with an intuitive and user-friendly panel. Whether you're new to bot development or an experienced coder, we provide the tools and resources you need to deploy, manage, and scale your bot—without hidden fees or limitations.",
        link: '/gameservers',
        image: '/images/offers/botPanel.webp',
        price: 0,
        features: [
            "SFTP Access",
            "NPM Package Manager",
            "Discord.js & Discord.py Support",
            "Git Integration",
            "Web Console",
            "Logs & Metrics",
            "Environment Variables",
            "Schedules"
        ]   
    }
]


export default function Offers() {
    const [active, setActive] = useState(0)

    return (
        <section id="offers" className="py-16">
            <div className="flex flex-col container text-white relative">
                <h1 className="text-5xl text-center">Solutions for any use-case</h1>
                <h2 className="text-lg text-muted text-center pt-2">Sano offers free, reliable game server hosting with instant deployment and full control through an easy-to-use control panels.</h2>

                <div className="flex flex-col md:flex-row md:bg-foreground rounded-full p-2 text-xl mt-5 space-y-3 md:space-y-0">
                    {offers.map((option, index) => (
                        <button key={index} className={`hover:bg-accent/75 p-5 md:bg-none rounded-full w-full md:w-1/4 ${active === index ? "bg-accent" : "bg-foreground"}`} onClick={() => setActive(index)}>{option.name}</button>
                    ))}
                </div>

                {/* This is possibly my least favorite page i've ever coded */}
                <div className="flex flex-col md:flex-row pt-15">
                    <div className="flex flex-col w-full md:w-full lg:w-1/2 px-10" style={{ backgroundImage: "url('/images/greeb.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                        
                        {/* Name And Price */}
                        <div className="text-4xl flex place-content-between">
                            <span>{offers[active].name}</span>
                            { offers[active].price === 0 ? (
                                <span className="text-2xl text-accent">Free Service</span>
                            ) : (
                                <h3 className="text-2xl text-muted">Starting at <span className="text-accent text-3xl">${offers[active].price}</span>/month</h3>
                            )}
                        </div>
                        
                        {/* Description */}
                        <h2 className="text-normal text-muted pt-2">{offers[active].description}</h2>

                        {/* Features */}
                        { offers[active].features && (
                            <>
                                <p className="pt-5 pb-2 text-2xl">Whats Included:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 text-xl text-muted space-y-3">
                                    {offers[active].features?.map((feature, index) => (
                                        <li key={index}><CheckIcon className="size-6 inline" /> {feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Game Server Game List */}
                        { active === 0 && (
                            <p className="text-muted">Interested in what games we support? Check out our <a href="https://docs.sanoservers.com/controlPanel/supportedGames" className="text-accent">Supported Games</a>.</p>
                        )}

                        {/* CTA Buttons */}
                        { offers[active].features && (
                            <div className="flex flex-col md:flex-row gap-4 pt-5">
                                <a href={offers[active].link} className="bg-accent hover:bg-accent/50 text-white py-2 px-5 rounded-full flex text-xl items-center w-full md:w-fit">Get Started</a>
                                <a href={offers[active].link} className="bg-foreground hover:bg-accent/50 text-white py-2 px-5 rounded-full flex text-xl items-center w-full md:w-fit">Learn More</a>
                            </div>
                        )}
                    </div>
                    {/* Image */}
                    <div className="hidden md:hidden lg:block w-1/2">
                        <Image src={offers[active].image} alt={offers[active].name} width="956" height="492" className="mx-auto h-[492] max-h-[492] glow-outwards animate-[float_5s_ease-in-out_infinite]" />
                    </div>
                </div>

                {/* Offer Cards Details */}
                <OffersDetails />
            </div>
        </section>
    )
}