import Image from "next/image";
import Navbar from "@/app/pages/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Index from "@/app/components/pages/Home/Index";
import ContactForm from "@/app/components/pages/Contact/ContactForm";
export default function Home() {
  return (
    <>
    <Navbar />
    <ContactForm />
    {/* <Index /> */}
      <Footer />
    </>
  );
} 
