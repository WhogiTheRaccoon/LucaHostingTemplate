import { CheckIcon } from '@heroicons/react/20/solid'

const plans: Array<object> = [
    {
        name: "Basic Free",
        price: "Free",
        btnName: "Get Started",
        btnLink: "https://billing.sanoservers.com/order/cart/index/store",
        features: [
            "DirectAdmin Panel",
            "Unmetered Bandwidth",
            "10GB NVMe Storage",
            "Full CGI Access",
            "Unlimited Email Accounts",
            "Unlimited Databases",
            "High End Ryzen CPU's"
        ]
    },
    {
        name: "Need More?",
        price: "???",
        btnName: "Contact Support",
        btnLink: "https://discord.gg/sanoservers",
        features: [
            "DirectAdmin Panel",
            "Unmetered Bandwidth",
            "Up To 50GB NVMe Storage",
            "Full CGI Access",
            "Unlimited Email Accounts",
            "Unlimited Databases",
            "High End Ryzen CPU's"
        ]
    }
]

export default function Prices() {
    return (
        <section id="prices" className="py-16">
            <div className="container">
                <div className="flex flex-col">
                    <h1 className="text-white text-5xl text-center">Simple, Transparent, Truly Free</h1>
                    <h2 className="text-muted text-lg text-center pt-2">Everything you need in one powerful hosting plan with no hidden fees, and no price increases ever.</h2>
                    <div className="flex flex-col md:flex-row w-full md:full lg:w-1/2 mx-auto gap-6">
                        {plans.map((plan: any, index: any) => (
                            <div key={index} className="flex flex-col bg-foreground rounded-md mt-15 text-white border border-borders w-full">
                                <div className="flex flex-col bg-background p-5">
                                    <h1 className="text-4xl font-bold text-center">{plan.name}</h1>
                                    <span className="text-md text-center">Our all In one hosting or free</span>
                                    <span className="text-3xl font-bold text-center text-accent">{plan.price}<span className="text-base text-muted"> /month</span></span>
                                </div>
                                <ul className="text-xl text-left mx-auto p-5 space-y-2">
                                    {plan.features.map((feature: any, index: any) => (
                                        <li key={index}><CheckIcon className="size-6 inline text-accent" /> {feature}</li>
                                    ))}
                                </ul>
                                <a href={plan.btnLink} className="bg-accent hover:bg-accent/50 text-white text-center px-4 py-2 rounded-md w-1/2 m-2 mx-auto">{plan.btnName}</a>
                                <span className=" text-center text-xs text-muted pb-5">Any questions holding you back? Join our <a href="https://discord.gg/sanoservers" className="underline hover:text-accent hover:cursor-pointer">Discord!</a></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}