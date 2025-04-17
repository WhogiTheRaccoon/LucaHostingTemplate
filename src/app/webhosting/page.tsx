import Header from "@/components/webhosting/Header";
import Features from "@/components/webhosting/Features";
import Faq from "@/components/Faq";
import GetStarted from "@/components/GetStarted";
import Prices from "@/components/webhosting/Prices";

export const generateMetadata = () => {
  return {
      title: "SanoServers - Web Hosting",
      description: "Explore our web hosting services designed to meet everyone's needs! Enjoy blazing-fast performance with industry standard implementations and uptime.",
      openGraph: {
        title: "SanoServers - Web Hosting",
        description: "Explore our web hosting services designed to meet everyone's needs! Enjoy blazing-fast performance with industry standard implementations and uptime.",
        url: "https://sanoservers/webhosting"
      },
  };
};

export default function WebHosting() {
  return (
    <>
        <Header />
        <Features />
        <Prices />
        <GetStarted />
        <Faq/>
    </>
  );
}