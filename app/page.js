import Image from "next/image";
import Hero from "@/components/Hero";
import TechTalksCourses from "@/components/Courses";
import WhatsAppStickyButton from "@/components/Whatsapp";
import ReferralModal from "@/components/ReferralModal";
export default function Home() {
  return (
    <>
    <ReferralModal/>
    <Hero />
  
    <TechTalksCourses/>
   </>
  );
}
