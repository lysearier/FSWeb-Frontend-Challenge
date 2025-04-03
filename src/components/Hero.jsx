import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content";

export default function Hero() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const texts = content.hero[language];

  return (
    <section
      className={`w-[1440px] h-[671px] ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      role="banner"
    >
      {/* Üst Kısım */}
      <header className="flex">
        <div
          className={`w-[1008px] h-[148px] flex items-center px-[239px] relative ${
            theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"
          }`}
        >
          <h1 className="text-[#cbf281] font-bold text-[32px]">{texts.name}</h1>

          {/* Dil Değiştirme Butonu */}
          <button
            onClick={toggleLanguage}
            className="absolute top-4 right-1 px-4 py-2 font-bold rounded transition"
            aria-label="Change language"
          >
            {texts.switchLanguage.includes("'") ? (
              <>
                <span
                  className={`${
                    theme === "dark" ? "text-[#C1BAED]" : "text-[#caf181]"
                  }`}
                >
                  {texts.switchLanguage.split("'")[0]}
                </span>
                <span
                  className={`${
                    theme === "dark" ? "text-[#777777]" : "text-[#d9d9d9]"
                  }`}
                >
                  {"'" + texts.switchLanguage.split("'")[1]}
                </span>
              </>
            ) : (
              <span
                className={`${
                  theme === "dark" ? "text-[#C1BAED]" : "text-[#caf181]"
                }`}
              >
                {texts.switchLanguage}
              </span>
            )}
          </button>
        </div>

        {/* Tema Değiştirme Alanı */}
        <div
          className={`${
            theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"
          } w-[432px] h-[148px] relative`}
        >
          <div className="absolute top-6 left-4 flex items-center gap-2">
            <label className="relative inline-flex cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <div className="w-[50px] h-[24px] bg-[#8f88ff] rounded-full peer-checked:bg-gray-800 transition duration-300"></div>
              <div className="absolute w-[18px] h-[18px] bg-[#ffe86e] rounded-full left-1 bottom-1 peer-checked:translate-x-[26px] transition-transform"></div>
            </label>
            <span
              className={`${
                theme === "dark" ? "text-white" : "text-[#4731d3]"
              } font-bold`}
            >
              {theme === "dark" ? texts.lightMode : texts.darkMode}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Bölümü */}
      <section
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-[#cbf281]"
        } flex`}
      >
        <div
          className={`${
            theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"
          } w-[1200px] h-[376px] flex rounded-r-[18px]`}
        >
          <div className="ml-[239px] w-[528px] flex flex-col justify-center">
            <h2 className="text-[#cbf281] text-[54px] font-bold leading-[50px] mb-7">
              {texts.title}
            </h2>
            <p className="text-[24px] mt-3 text-white mb-4">{texts.description}</p>

            {/* Sosyal Medya Butonları */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/lysearier"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition ${
                    theme === "dark"
                      ? "bg-[#252128] text-white border border-white"
                      : "bg-white text-[#3730a3] border border-gray-300"
                  }`}
                >
                  <FaGithub
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-white" : "text-[#3730a3]"
                    }`}
                  />
                  <span>{texts.github}</span>
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/eren-gndz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition ${
                    theme === "dark"
                      ? "bg-[#252128] text-white border border-white"
                      : "bg-white text-[#3730a3] border border-gray-300"
                  }`}
                >
                  <FaLinkedin
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-white" : "text-[#3730a3]"
                    }`}
                  />
                  <span>{texts.linkedin}</span>
                </button>
              </a>
            </div>
          </div>

          {/* Profil Resmi */}
          <img
            src="/images/pp.png"
            className="w-[350px] h-[376px] ml-[83px] rounded-[18px] object-cover"
            alt="Profile Picture"
          />
        </div>
        <div
          className={`${
            theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"
          } w-[240px] h-[376px]`}
        ></div>
      </section>

      {/* Alt Kısım */}
      <footer className="flex">
        <div
          className={`${
            theme === "dark" ? "bg-[#171043]" : "bg-[#4731d3]"
          } w-[1008px] h-[147px]`}
        ></div>
        <div
          className={`${
            theme === "dark" ? "bg-[#211F0B]" : "bg-[#cbf281]"
          } w-[432px] h-[147px]`}
        ></div>
      </footer>
    </section>
  );
}
