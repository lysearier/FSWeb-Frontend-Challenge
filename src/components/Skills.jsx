import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"; // ThemeContext'i ekledik

export default function Skills() {
  const { language } = useLanguage();
  const { theme } = useTheme(); // Dark mode'u almak için

  return (
    <div className={`w-full max-w-[1440px] mx-auto flex justify-center items-center min-h-[610px] py-8 ${theme === "dark" ? "bg-[#252128] text-white" : "bg-white text-black"}`}>
      <div className={`w-[960px] h-[430px] flex rounded-md ${theme === "dark" ? "bg-[#252128]" : "bg-white"}`}>
        <div className="w-1/3 flex items-start">
          <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-[#CBF281]" : "text-[#4832d3]"}`}>
            {language === "en" ? "Skills" : "Yetenekler"}
          </h2>
        </div>
        <div className="w-1/3 flex flex-col justify-between space-y-6">
          {content.skills.slice(0, 3).map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={skill.img} alt={skill.name} className="w-28 h-28 rounded-md shadow-md" />
              <span className={`text-lg font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="w-1/3 flex flex-col justify-between space-y-6">
          {content.skills.slice(3, 6).map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={skill.img} alt={skill.name} className="w-28 h-28 rounded-md shadow-md" />
              <span className={`text-lg font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
