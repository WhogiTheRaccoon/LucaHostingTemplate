import PageHeader from "@/components/PageHeader";
import gameData from "@/data/gameProducts.json";
import GameList from '@/components/gamehosting/GameList'
import Panel from '@/components/gamehosting/Panel'
import Faq from "@/components/Faq";
import GetStarted from "@/components/GetStarted";
import Features from "@/components/gamehosting/Features";

export const generateMetadata = () => {
  return {
      title: "SanoServers - Game Servers",
      description: "Discover the wide variety of game types available at Sano Servers! Browse our directory to find the perfect server for your gaming needs.",
      openGraph: {
        title: "SanoServers - Game Servers",
        description: "Discover the wide variety of game types available at Sano Servers! Browse our directory to find the perfect server for your gaming needs.",
        url: "https://sanoservers/gameservers"
      },
  };
};

export default function GameServers() {
  return (
    <>
      <PageHeader name="Powerful Game Hardware for Every Project" description="Choose the plan that best fits your project requirements">
        <GameList data={gameData} />
      </PageHeader>
      
      <Features />
      <Panel />
      <GetStarted />
      <Faq/>
    </>
  );
}