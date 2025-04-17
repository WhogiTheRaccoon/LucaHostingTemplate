"use client";
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid'

export default function Panel() {
    return (
        <section id="panel" className="py-16">
            <div className="container">
                <div className="flex flex-col">
                    <h1 className="text-white text-5xl text-center">Finally a Perfected Panel Experience </h1>
                    <h2 className="text-muted text-lg text-center pt-2">Finally a top of the line experience with everything you could want right out of the box. <br className="hidden md:block" /> Manage your players, mods, plugins, and even versions in one click.</h2>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row pt-10 items-center gap-4">
                            <div className="w-1/2 hidden md:block">
                                <Image src="/images/games/gamePanel1.png" alt="Servers View" width="860" height="860" className="glow-outwards mx-auto rounded-md" />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <h1 className="text-3xl text-white">Server List</h1>
                                <h2 className="text-xl text-muted">View a quick overview of all of your servers in one place. Fully integrated Resource statistics, Player Counters, as well as status and uptime metrics.
                                </h2>
                                <ul className="flex flex-col md:flex-row pt-5 text-muted text-xl gap-6">
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Uptime Monitoring</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Resource Usages</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Live Player Count</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Status Indicators</ul>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex flex-col w-full md:w-1/2">
                                <h1 className="text-3xl text-white">Console Viewer</h1>
                                <h2 className="text-xl text-muted">Easily monitor your server console, execute commands, and track your server's performance! All of these features were designed and configured with user efficiency in mind.</h2>
                                <ul className="flex flex-col md:flex-row pt-5 text-muted text-xl gap-6">
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Network Graph</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Performance Monitoring</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Player Count</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Console Viewer</ul>
                                </ul>
                            </div>
                            <div className="w-1/2 hidden md:block">
                                <Image src="/images/games/gamePanel2.png" alt="Console View" width="860" height="860" className=" glow-outwards mx-auto rounded-md" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="w-1/2 hidden md:block">
                                <Image src="/images/games/gamePanel3.png" alt="File Manager" width="860" height="860" className="glow-outwards mx-auto rounded-md" />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                            <h1 className="text-3xl text-white">File Manager</h1>
                                <h2 className="text-xl text-muted">Easily edit, manage, and configure your server's files with a full suite of essential tools. Enjoy secure FTP access, providing safe, reliable, and flexible control over your server's contents.</h2>
                                <ul className="flex flex-col md:flex-row pt-5 text-muted text-xl gap-6">
                                    <ul><CheckIcon className="size-6 inline text-accent" /> SFTP Access</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Remote Web UI</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Sub User Management</ul>
                                    <ul><CheckIcon className="size-6 inline text-accent" /> Fast Transfer Speeds</ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}