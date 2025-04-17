"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Faq() {
    const [active, setActive] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActive(active === index ? null : index);
        const chevron = document.querySelectorAll('.size-6');
        if (chevron[index]) {
            chevron[index].classList.toggle('rotate-180');
        }
    }

    return (
        <section id="faq" className="py-16">
            <div className="container py-12">
                <div className="flex flex-col space-y-3 text-white">
                    <h1 className="text-4xl text-white text-center">Frequently Asked Questions</h1>
                    <h2 className="text-2xl text-muted text-center pb-4">Can't find what you're looking for?</h2>

                    <div className="border border-borders w-full mt-3">
                        <button className="text-left p-5 font-medium flex justify-between items-center bg-foreground w-full hover:cursor-pointer" onClick={() => toggleFaq(0)}>
                            Where are your servers located? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 0 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">We prioritize American based locations. However, we plan to expand into Europe in the near future!</div>
                        )}
                    </div>

                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(1)}>
                            How much technical knowledge do I need to run a game server? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 1 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">This is a challenging question to answer definitively, but our support team is always available to assist with basic questions. At Sano, we continually strive to simplify the game hosting experience for our users through automation tools like mod pack installers, plugin installers, user management, addon installers, mod installers, and more. Our goal is to make the process as easy and stress-free as possible.</div>
                        )}
                    </div>

                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(2)}>
                            How secure is my information at Sano? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 2 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">At Sano, the security of our users' information is of utmost importance to us. We have implemented multiple layers of protection, including SSL encryption for sensitive data transmission and regular updates to our servers' security patches and firewall configurations. Our system administrators closely monitor the network for any suspicious activity and promptly respond to any security incidents. Strict access control policies limit access to sensitive information to only authorized personnel.</div>
                        )}
                    </div>

                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(3)}>
                            Is it possible for my server to be DDoS attacked? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 3 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">DDoS attacks are a common concern for server security. At Sano, we have implemented advanced DDoS mitigation measures to prevent any potential attackers from disrupting your server. If you suspect that your server is being targeted by a DDoS attack, it's important to contact our support team immediately for assistance.</div>
                        )}
                    </div>
                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(4)}>
                            Can I request a custom service? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 4 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">Depending on your needs, we may be able to offer a custom service plan. If you're interested, please don't hesitate to contact us for more information.</div>
                        )}
                    </div>
                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(5)}>
                            Why is Sano free? <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 5 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">We believe everyone should be able to have access to their own game servers. Whether it be for close friends or for you to start a community to grow long lasting friendships from. We understand the frustration to find good hosting, we have been where you are! So, enjoy everything that Sano Servers has to offer! If you have any concerns, please reach out to us. We would love to talk with you!</div>
                        )}
                    </div>

                    <div className="border border-borders">
                        <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-foreground hover:cursor-pointer" onClick={() => toggleFaq(6)}>
                            My server is on, but I can't connect. <ChevronDownIcon className="size-6"/>
                        </button>
                        {active === 6 && (
                            <div className="p-4 bg-foreground border-t-2 border-borders">If you are struggling to connect to your new server, please let us know. We try our very best to keep everything as locked down  and secure as possible. We may need to configure some ports for security reasons!</div>
                        )}
                    </div>

                    <span className="text-center">Did we miss something? Check out our <a href="https://docs.sanoservers.com" className="underline text-accent">Documentation</a></span>
                </div>
            </div>
        </section>
    )
}