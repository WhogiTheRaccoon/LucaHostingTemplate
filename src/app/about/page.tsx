import PageHeader from "@/components/PageHeader"
import AboutUs from "@/components/about/AboutUs"
import Staff from "@/components/about/Staff"
import Quote from "@/components/about/Quote"

export const generateMetadata = () => {
    return {
        title: "SanoServers - About",
        description: "Learn more about SanoServers, its team, and the people that keep the operation running! Host with Sano Servers today!",
        openGraph: {
          title: "SanoServers - About",
          description: "Learn more about SanoServers, its team, and the people that keep the operation running! Host with Sano Servers today!",
          url: "https://sanoservers/about"
        },
    };
};

export default function About() {
    return (
        <>
        <PageHeader name="About SanoServers" description="Learn more about the company and the people behind it"/>
        <AboutUs />
        <Staff />
        <Quote />
        
        </>
    )
}