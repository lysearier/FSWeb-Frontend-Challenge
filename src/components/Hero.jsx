import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <div className="w-[1440px] h-[671px]">
      {/* Header Top */}
      <div className="flex">
        <div className="bg-[#4731d3] w-[1008px] h-[148px] flex items-center px-[239px] relative">
          <p className="text-[#cbf281] font-bold text-[32px]">Eren</p>

          {/* Language (Dil Değiştirme) Butonu Sağ Üste Sabitlendi */}
          <button
            onClick={toggleLanguage}
            className="absolute top-4 right-1 px-4 py-2 text-[#cbf281] font-bold rounded transition"
          >
            {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
          </button>
        </div>

        {/* Sarı Alan (Dark Mode Butonu Burada) */}
        <div className="w-[432px] h-[148px] bg-[#cbf281] relative">
          {/* Dark Mode Butonu Sol Üste Sabitlendi */}
          <div className="absolute top-6 left-4 flex items-center gap-2">
            <label className="relative inline-flex cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={handleToggle}
              />
              <div className="w-[50px] h-[24px] bg-[#8f88ff] rounded-full peer-checked:bg-gray-800 transition duration-300"></div>
              <div className="absolute w-[18px] h-[18px] bg-[#ffe86e] rounded-full left-1 bottom-1 peer-checked:translate-x-[26px] transition-transform"></div>
            </label>
            <span className="text-[#4731d3] font-bold">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </div>

      {/* Header Mid */}
      <div className="flex bg-[#cbf281]">
        <div className="bg-[#4731d3] w-[1200px] h-[376px] flex rounded-r-[18px]">
          <div className="ml-[239px] w-[528px] flex flex-col justify-center">
            <h1 className="text-[#cbf281] text-[54px] font-bold leading-[50px]">
              {language === "en"
                ? "I am a Frontend Developer..."
                : "Ben bir Frontend Geliştiricisiyim..."}
            </h1>
            <p className="text-white text-[24px] mt-6 mb-[77px]">
              {language === "en"
                ? "...who likes to craft solid and scalable frontend products with great user experiences."
                : "...sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven bir geliştiriciyim."}
            </p>
            <div className="flex gap-3 mt-9">
              {/* GitHub Button */}
              <a
                href="https://github.com/lysearier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#3730a3] font-medium rounded-md hover:bg-yellow-400 transition">
                  <FaGithub className="w-6 h-6" />
                  <span>GitHub</span>
                </button>
              </a>
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/eren-gndz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#3730a3] font-medium rounded-md hover:bg-yellow-400 transition">
                  <FaLinkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </button>
              </a>
            </div>
          </div>
          <img
            src="/images/pp.png"
            className="w-[350px] h-[376px] ml-[83px] bg-[#cbf281] rounded-[18px] object-cover"
            alt="Hero"
          />
        </div>
        <div className="w-[240px] h-[376px] bg-[#cbf281]"></div>
      </div>

      {/* Header Bottom */}
      <div className="flex">
        <div className="bg-[#4731d3] w-[1008px] h-[147px]"></div>
        <div className="bg-[#cbf281] w-[432px] h-[147px]"></div>
      </div>
    </div>
  );
}
