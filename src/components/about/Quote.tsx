import Image from "next/image"

export default function Quote() {
    return (
        <section id="quote" className="bg-foreground py-16">
            <div className="container">
                <div className="flex flex-col text-xl text-white text-center">
                    <h1>"The hosting industry has the potential to be so much more than it is today.<br/> Too often, people pay a premium for servers that are poorly maintained and backed by subpar support.<br/> SanoServers isn’t just another hosting provider, it’s a statement against the industry’s cash-grab mentality.<br/> We’re here for our users, committed to their success, not their wallets. Your growth is our priority, not profit."</h1>
                    <h2 className="text-7xl font-bold pt-5 cursive">Brennan L.</h2>
                    <h3 className="text-2xl text-muted pt-2">Founder</h3>
                </div>
            </div>
        </section>
    )
}