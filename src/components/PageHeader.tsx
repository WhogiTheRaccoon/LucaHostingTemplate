"use client";

interface PageHeaderProps {
    name: string;
    description: string;
    children?: React.ReactNode;
}

export default function PageHeader({ name, description, children }: PageHeaderProps) {
    return (
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/about/background.webp')"}}>
            <div className="container pt-[15vh] pb-16">
                <div className="flex flex-col text-center space-y-6">
                    <h3 className="text-5xl text-white font-bold">{name}</h3>
                    <h1 className="text-2xl text-muted">{description}</h1>
                    <div>
                        {children}
                    </div>
                </div>
            </div> 
        </section>
    )
}