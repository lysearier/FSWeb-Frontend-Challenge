import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const title = language === "en" ? "Skills" : "Yetenekler";

  return (
    <section
      className={`w-full max-w-[1440px] mx-auto flex justify-center items-center min-h-[610px] py-12 transition-all ${
        theme === "dark" ? "bg-[#252128] text-white" : "bg-white text-black"
      }`}
      aria-labelledby="skills-title"
    >
      <div
        className={`w-[960px] h-auto flex rounded-md${
          theme === "dark" ? "bg-[#252128]" : "bg-white"
        }`}
      >
        {/* Başlık */}
        <header className="w-1/3 flex items-start">
          <h2
            id="skills-title"
            className={`text-5xl font-bold ${
              theme === "dark" ? "text-[#CBF281]" : "text-[#4832d3]"
            }`}
          >
            {title}
          </h2>
        </header>

        {/* İlk 3 Yetenek */}
        <article className="w-1/3 flex flex-col space-y-8">
          <ul className="space-y-8">
            {content.skills.slice(0, 3).map((skill, index) => (
              <li key={index} className="flex items-center space-x-6">
                <img
                  src={skill.img}
                  alt={`${skill.name} Logo`}
                  className="w-28 h-28 rounded-md shadow-md"
                />
                <span
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </article>

        {/* Son 3 Yetenek */}
        <article className="w-1/3 flex flex-col space-y-8">
          <ul className="space-y-8">
            {content.skills.slice(3, 6).map((skill, index) => (
              <li key={index} className="flex items-center space-x-6">
                <img
                  src={skill.img}
                  alt={`${skill.name} Logo`}
                  className="w-28 h-28 rounded-md shadow-md"
                />
                <span
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
