
import Headers from "@/components/pages/Headers";
import bg from "./bg.jpg";
import Link from "next/link";
export default function TechnologiesPage() {
    return (
        <>
        <Headers />
        <div
        className="relative bg-cover bg-center h-48 text-white flex items-center w-full"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex items-center justify-between xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">Capability Matrix</h1>
            <p className="text-gray-300 text-sm">We Truly IMPROVE Your organizations PERFORMANCE</p>
          </div>
          {/* Breadcrumbs */}
          <div className="text-xs">
            <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link>
            <span className="text-red-500 mx-2">/</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">COMPANY</span>
            <span className="text-red-500 mx-2">/</span>
            <Link href="/ContactForm" className="text-red-400 font-semibold">CONTACT US</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        <p className="mb-8 text-lg text-gray-700">
          Critical Touch offers a wide range of capabilities in delivering mission-critical, client-server, web-commerce, data warehouse, and online transaction processing systems to medium-sized companies. Critical Touch is able to implement these solutions using the latest, most flexible and scalable applications, platforms, and languages available in the market.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-2">RAD Tools</h3>
            <ul className="space-y-1">
              <li>⇒ Dreamweaver MX</li>
              <li>⇒ MS VisualStudio.NET</li>
              <li>⇒ Borland C++ Builder</li>
              <li>⇒ MyEclipse</li>
              <li>⇒ Edit Plus</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Application Servers</h3>
            <ul className="space-y-1">
              <li>⇒ Tomcat 6</li>
              <li>⇒ IIS & MTS</li>
              <li>⇒ IBM WebSphere</li>
              <li>⇒ Cold Fusion 5/6/MX/8</li>
              <li>⇒ Blue Dragon 6/7</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Operating Systems</h3>
            <ul className="space-y-1">
              <li>⇒ Windows 2000 / XP / 2003</li>
              <li>⇒ LINUX (flavors)</li>
              <li>⇒ Palm OS</li>
              <li>⇒ Win CE</li>
              <li>⇒ Macintosh</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Languages/Frameworks</h3>
            <ul className="space-y-1">
              <li>⇒ Java / J2EE</li>
              <li>⇒ C/C++</li>
              <li>⇒ C#.Net / VB.Net</li>
              <li>⇒ PERL</li>
              <li>⇒ COBOL</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Middleware</h3>
            <ul className="space-y-1">
              <li>⇒ XML</li>
              <li>⇒ MS COM/DCOM</li>
              <li>⇒ EJB</li>
              <li>⇒ CORBA</li>
              <li>⇒ Web Services</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Database Applications</h3>
            <ul className="space-y-1">
              <li>⇒ Oracle 8i, 9i, Oracle Lite</li>
              <li>⇒ MS SQL Server 2000 / 2005</li>
              <li>⇒ MySQL 4 / 5</li>
              <li>⇒ Postgre SQL</li>
              <li>⇒ MS Access</li>
              <li>⇒ DB2</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Mobile Technologies</h3>
            <ul className="space-y-1">
              <li>⇒ J2ME</li>
              <li>⇒ Code Warrior</li>
              <li>⇒ App Forge</li>
              <li>⇒ Satellite Forms</li>
              <li>⇒ WML</li>
              <li>⇒ eVB, eVC++</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Web - (Servers, Technologies & Tools)</h3>
            <ul className="space-y-1">
              <li>⇒ JSP</li>
              <li>⇒ ASP</li>
              <li>⇒ PHP</li>
              <li>⇒ AJAX / Java Script</li>
              <li>⇒ Cold Fusion</li>
              <li>⇒ ASP.NET</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-2">Frameworks</h3>
            <ul className="space-y-1">
              <li>⇒ DotNet Nuke</li>
              <li>⇒ DRUPAL</li>
              <li>⇒ JOOMLA</li>
              <li>⇒ OS Commerce</li>
              <li>⇒ PHP NUKE</li>
              <li>⇒ SugarCRM</li>
              <li>⇒ Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    );
  }
  