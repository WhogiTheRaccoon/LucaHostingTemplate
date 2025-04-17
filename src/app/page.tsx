import Image from "next/image";
import Header from "@/components/index/Header";
import Offers from "@/components/index/Offers";
import Faq from "@/components/Faq";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <>
      <Header />
      <Offers/>
      <GetStarted />
      <Faq/>
    </>
  );
}