import { CheckIcon } from '@heroicons/react/20/solid'

export default function Getstarted() {
    return (
        <section id="getstarted" className="header-bg py-16" style={{ backgroundImage: "url('/images/getstarted.webp')" }}>
            <div className="container">
                <div className="flex flex-col w-full md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white">Ready to get started with your service?</h1>
                    <h2 className="text-lg text-muted pt-2">So are you ready to get started? Greatness is just a few clicks away!</h2>
                    <ul className="space-y-2 text-white pt-5">
                        <li><CheckIcon className="size-6 inline" /> 3-Day money back Guarantee</li>
                        <li><CheckIcon className="size-6 inline" /> Instant setup</li>
                        <li><CheckIcon className="size-6 inline" /> 24/7 Support</li>
                    </ul>
                    <div className="flex flex-col md:flex-row gap-4 pt-5 text-xl text-white mx-auto">
                        <a href="https://discord.gg/sanoservers" className="px-4 py-2 bg-accent rounded-md">Contact Support</a>
                        <a href="https://discord.gg/sanoservers" className="px-4 py-2 border-2 border-borders rounded-md">Join Our Discord</a>
                    </div>
                </div>
            </div>
        </section>
    )
}