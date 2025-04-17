import Image from 'next/image'
import Script from 'next/script';

export default function Footer() {
    return (
        <footer className="border-t-2 border-borders">
        <div className="container">
            <div className="flex flex-col md:flex-row place-content-between pt-24 pb-12 space-y-6 md:space-y-0">
                {/* About */}
                <div className="flex flex-col w-full md:w-1/4 space-y-4 text-muted">
                    <h1 className="text-3xl text-white">SanoServers</h1>
                    <p>High-performance cloud hosting for an affordable price, featuring lightning fast processors.</p>
                </div>
                {/* Solutions */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Solutions</h1>
                    <a href="/cloud">Cloud Services</a>
                    <a href="/webhosting">Web Hosting</a>
                    <a href="/gamehosting">Game Hosting</a>
                </div>
                {/* Support */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Support</h1>
                    <a href="https://discord.gg/sanoservers">Contact</a>
                    <a href="https://docs.sanoservers.com/">Documentation</a>
                    <a href="https://status.sanoservers.com/">Service Status</a>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Quick Links</h1>
                    <a href="https://panel.sanoservers.com/">Game Panel</a>
                    <a href="https://vps.sanoservers.com/">VPS Panel</a>
                    <a href="https://lv-shared04.dapanel.net:2222/evo/login">Web Panel</a>
                    <a href="https://billing.sanoservers.com/">Billing Panel</a>
                </div>
                {/* Legal */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Legal</h1>
                    <a href="https://docs.sanoservers.com/policies/tos">Terms of Service</a>
                    <a href="https://docs.sanoservers.com/policies/pp">Privacy Policy</a>
                    <a href="https://docs.sanoservers.com/policies/sla">Service Level Agreement</a>
                    <a href="https://docs.sanoservers.com/policies/rp">Refund Policy</a>
                </div>
            </div>
            <div className="flex flex-col text-white">
                <hr className="border border-borders w-full" />
                <div className="flex py-5 items-center">
                    <span className="flex flex-col md:flex-row gap-2">© 2025 SanoServers, LLC. All rights reserved. | <p className="font-bold">Made by <a href="https://chit.sh/" className="text-accent font-bold underline">Whogi</a></p>
                    </span>
                    <div className="ml-auto space-x-2 items-center">
                        <a href="https://discord.gg/sanoservers"><Image src="/images/discord.png" width={32} height={32} alt="Discord" className="hover:cursor-pointer p-0 m-0" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/63e97bccc2f1ac1e2032e34b/1inkbi3ik';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
          `,
        }}
      />
      </footer>
    )
}