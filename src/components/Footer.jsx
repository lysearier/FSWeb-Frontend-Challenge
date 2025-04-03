import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content";

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const footerContent = content.footer[language];

  return (
    <footer
      className={`min-h-[454px] flex flex-col items-center justify-center p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-[#252128] text-white" : "bg-[#F9F9F9] text-black"
      }`}
      aria-labelledby="footer-title"
    >
      {/* Başlık */}
      <h1
        id="footer-title"
        className="text-5xl font-bold mb-3"
        style={{ color: theme === "dark" ? "#8F88FF" : "#4832d3" }}
      >
        {footerContent.sendMessage}
      </h1>

      {/* Açıklama Metni */}
      <p className="mb-2 text-center w-full">{footerContent.gotAQuestion}</p>

      {/* E-posta Adresi */}
      <p className="mb-4">
        <a
          href={`mailto:${footerContent.email}`}
          className="underline decoration-1"
          style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
        >
          {footerContent.email}
        </a>
      </p>

      {/* Sosyal Medya Linkleri */}
      <nav aria-label="Social media links">
        <ul className="flex gap-6">
          <li>
            <a
              href={footerContent.socialLinks.twitter}
              aria-label="Twitter"
              className="hover:opacity-75"
              style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
            >
              <FaTwitter size={32} />
            </a>
          </li>
          <li>
            <a
              href={footerContent.socialLinks.codepen}
              aria-label="CodePen"
              className="hover:opacity-75"
              style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
            >
              <FaCodepen size={32} />
            </a>
          </li>
          <li>
            <a
              href={footerContent.socialLinks.email}
              aria-label="Send an email"
              className="hover:opacity-75"
              style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
            >
              <FaAt size={32} />
            </a>
          </li>
          <li>
            <a
              href={footerContent.socialLinks.instagram}
              aria-label="Instagram"
              className="hover:opacity-75"
              style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
            >
              <FaInstagram size={32} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
