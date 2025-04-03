import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content";

export default function Projects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const projectData = content.projects[language];

  return (
    <section
      className={`min-h-[1039px] flex items-center justify-center flex-col gap-5 transition-all duration-300 ${
        theme === "dark" ? "bg-[#1A210B] text-white" : "bg-[#CBF281] text-white"
      }`}
      aria-labelledby="projects-title"
    >
      <div className="max-w-[960px] w-full flex flex-col gap-5">
        
        {/* Başlık */}
        <header className={`w-full ${theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"}`}>
          <h2 id="projects-title" className="text-5xl font-bold mb-3 self-start">
            {projectData.title}
          </h2>
        </header>

        {/* Projeler Listesi */}
        <ul className="flex flex-col gap-5">
          {projectData.items.map((project) => (
            <li
              key={project.id}
              className={`flex items-center rounded-xl mb-5 gap-5 transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              {/* Proje Görseli */}
              <div className="w-[360px] h-[360px] flex-shrink-0">
                <img
                  src={project.image}
                  alt={`${project.name} Project Preview`}
                  className="w-full h-full object-cover object-left-top rounded-l-xl"
                />
              </div>

              {/* Proje İçeriği */}
              <article className="flex flex-col gap-2 max-w-[500px] ml-8">
                <h3
                  className={`text-4xl font-bold mb-3 self-start ${
                    theme === "dark" ? "text-[#C1BAED]" : "text-[#4832d3]"
                  }`}
                >
                  {project.name}
                </h3>
                <p>{project.description}</p>

                {/* Kullanılan Teknolojiler */}
                <div className="flex justify-start gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white mt-5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Linkler */}
                <div className="flex justify-start gap-16 underline mt-5">
                  <a
                    href={project.siteLink}
                    className={`${theme === "dark" ? "text-[#CBF281]" : "text-black"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} live site`}
                  >
                    {projectData.viewSite}
                  </a>
                  <a
                    href={project.githubLink}
                    className={`${theme === "dark" ? "text-[#CBF281]" : "text-black"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} GitHub repository`}
                  >
                    {projectData.github}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
