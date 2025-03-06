import Image from "next/image";
import Navbar from "@/app/components/pages/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Index from "@/app/components/pages/Home/Index";
export default function Home() {
  return (
    <>
    <Navbar />
    <Index />
      <Footer />
    </>
  );
} 
