import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content"; // İçerik dosyasını içe aktardık

export default function Projects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const projectData = content.projects[language]; // Dinamik içerik al

  return (
    <div
      className={`min-h-[1039px] flex items-center justify-center flex-col gap-5 transition-all duration-300 ${
        theme === "dark" ? "bg-[#1A210B] text-white" : "bg-[#CBF281] text-white"
      }`}
    >
      {/* Ana Container */}
      <div className="max-w-[960px] w-full flex flex-col gap-5">
        {/* Başlık */}
        <div className={`${theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"} w-full`}>
          <h2 className="text-5xl font-bold mb-3 self-start">{projectData.title}</h2>
        </div>

        {/* Proje Kartları */}
        <div className="flex flex-col gap-5">
          {projectData.items.map((project) => (
            <div
              key={project.id}
              className={`flex items-center rounded-xl mb-5 gap-5 transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              {/* Resim Alanı */}
              <div className="w-[360px] h-[360px] flex-shrink-0 ">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover object-left-top rounded-l-xl" />
              </div>

              {/* Metin Alanı */}
              <div className="flex flex-col gap-2 max-w-[500px] ml-8">
                <h3
                  className={`text-4xl font-bold mb-3 self-start ${
                    theme === "dark" ? "text-[#C1BAED]" : "text-[#4832d3]"
                  }`}
                >
                  {project.name}
                </h3>
                <p>{project.description}</p>
                <div className="flex justify-start gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white mt-5">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex justify-start gap-16 underline mt-5">
                  <a
                    href={project.siteLink}
                    className={`${theme === "dark" ? "text-[#CBF281]" : "text-black"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData.viewSite}
                  </a>
                  <a
                    href={project.githubLink}
                    className={`${theme === "dark" ? "text-[#CBF281]" : "text-black"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
