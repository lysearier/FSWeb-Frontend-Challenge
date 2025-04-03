import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content"; // İçerik dosyasını import ettik

export default function Hero() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const texts = content.hero[language]; // İçerikleri `content.jsx`'ten al

  return (
    <div className={`w-[1440px] h-[671px] ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Header Top */}
      <div className="flex">
        <div className={`w-[1008px] h-[148px] flex items-center px-[239px] relative ${theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"}`}>
          <p className={`text-[#cbf281] font-bold text-[32px]`}>
            {texts.name}
          </p>

          {/* Language Button */}
          <button
            onClick={toggleLanguage}
            className="absolute top-4 right-1 px-4 py-2 font-bold rounded transition"
          >
            {texts.switchLanguage.includes("'") ? (
              <>
                <span className={`${theme === "dark" ? "text-[#C1BAED]" : "text-[#caf181]"}`}>
                  {texts.switchLanguage.split("'")[0]}
                </span>
                <span className={`${theme === "dark" ? "text-[#777777]" : "text-[#d9d9d9]"}`}>
                  {"'" + texts.switchLanguage.split("'")[1]}
                </span>
              </>
            ) : (
              <span className={`${theme === "dark" ? "text-[#C1BAED]" : "text-[#caf181]"}`}>
                {texts.switchLanguage}
              </span>
            )}
          </button>
        </div>

        {/* Sarı Alan (Dark Mode Butonu) */}
        <div className={`${theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"} w-[432px] h-[148px] relative`}>
          {/* Dark Mode Butonu */}
          <div className="absolute top-6 left-4 flex items-center gap-2">
            <label className="relative inline-flex cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-[50px] h-[24px] bg-[#8f88ff] rounded-full peer-checked:bg-gray-800 transition duration-300"></div>
              <div className="absolute w-[18px] h-[18px] bg-[#ffe86e] rounded-full left-1 bottom-1 peer-checked:translate-x-[26px] transition-transform"></div>
            </label>
            <span className={`${theme === "dark" ? "text-white" : "text-[#4731d3]"} font-bold`}>
              {theme === "dark" ? texts.lightMode : texts.darkMode}
            </span>
          </div>
        </div>
      </div>

      {/* Header Mid */}
      <div className={`${theme === "dark" ? "bg-gray-800" : "bg-[#cbf281]"} flex`}>
        <div className={`${theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"} w-[1200px] h-[376px] flex rounded-r-[18px]`}>
          <div className="ml-[239px] w-[528px] flex flex-col justify-center">
            <h1 className={`text-[#cbf281] text-[54px] font-bold leading-[50px] mb-7`}>
              {texts.title}
            </h1>
            <p className="text-[24px] mt-3 text-white mb-4">
              {texts.description}
            </p>
            {/* GitHub ve LinkedIn Butonlarını Yakınlaştırdım */}
            <div className="flex gap-3 mt-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/lysearier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition 
                  ${theme === "dark" 
                    ? "bg-[#252128] text-white border border-white hover:bg-[#37323a]" 
                    : "bg-white text-[#3730a3] border border-gray-300 hover:bg-[#cbf281]"}`}>
                  <FaGithub className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-[#3730a3]"}`} />
                  <span>{texts.github}</span>
                </button>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/eren-gndz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition 
                  ${theme === "dark" 
                    ? "bg-[#252128] text-white border border-white hover:bg-[#37323a]" 
                    : "bg-white text-[#3730a3] border border-gray-300 hover:bg-[#cbf281]"}`}>
                  <FaLinkedin className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-[#3730a3]"}`} />
                  <span>{texts.linkedin}</span>
                </button>
              </a>
            </div>
          </div>
          <img
            src="/images/pp.png"
            className="w-[350px] h-[376px] ml-[83px] rounded-[18px] object-cover"
            alt="Hero"
          />
        </div>
        <div className={`${theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"} w-[240px] h-[376px]`}></div>
      </div>

      {/* Header Bottom */}
      <div className="flex">
        <div className={`${theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"} w-[1008px] h-[147px]`}></div>
        <div className={`${theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"} w-[432px] h-[147px]`}></div>
      </div>
    </div>
  );
}
