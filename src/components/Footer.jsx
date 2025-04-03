import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content";

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const footerContent = content.footer[language]; // Dinamik içerik

  return (
    <div className={`min-h-[454px] flex flex-col items-center justify-center p-6 transition-all duration-300 ${
      theme === "dark" ? "bg-[#252128] text-white" : "bg-[#F9F9F9] text-black"
    }`}>
      <h1 className={`text-5xl font-bold mb-3 ${theme === "dark" ? "text-[#8F88FF]" : "text-[#4832d3]"}`}>
        {footerContent.sendMessage}
      </h1>
      <p className="mb-2 text-center w-full whitespace-pre-line">
        {footerContent.gotAQuestion}
      </p>
      <p className={`underline decoration-1 mb-4 ${theme === "dark" ? "text-[#8F88FF]" : "text-[#4731D3]"}`}>
        {footerContent.email}
      </p>
      <div className={`flex gap-6 ${theme === "dark" ? "text-[#8F88FF]" : "text-[#4731D3]"}`}>
        <a href={footerContent.socialLinks.twitter} className="hover:opacity-75">
          <FaTwitter size={32} />
        </a>
        <a href={footerContent.socialLinks.codepen} className="hover:opacity-75">
          <FaCodepen size={32} />
        </a>
        <a href={footerContent.socialLinks.email} className="hover:opacity-75">
          <FaAt size={32} />
        </a>
        <a href={footerContent.socialLinks.instagram} className="hover:opacity-75">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
}
