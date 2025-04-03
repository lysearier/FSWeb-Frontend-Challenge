import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../data/content";

export default function Profile() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const profileContent = content.profile[language];

  return (
    <section 
      className={`min-h-[560px] flex items-center justify-center p-8 transition-all duration-300 ${
        theme === "dark" ? "bg-[#171043] text-white" : "bg-[#4731D3] text-white"
      }`}
      aria-labelledby="profile-title"
    >
      <div className="flex flex-col w-auto max-w-[960px] justify-center">
        
        {/* Başlık */}
        <header>
          <h2 
            id="profile-title" 
            className="text-5xl font-bold mb-8 self-start text-[#CBF281]"
          >
            {profileContent.title}
          </h2>
        </header>

        <div className="flex gap-[30px] items-start justify-center">
          
          {/* Temel Bilgiler */}
          <article className="w-[300px] text-left">
            <h3 className="font-semibold text-2xl self-start mb-5">
              {profileContent.basicInfo}
            </h3>

            <ul className="space-y-6">
              {profileContent.details.map((detail, index) => (
                <li key={index}>
                  <strong className="text-[#CBF281]">{detail.label}</strong> {detail.value}
                </li>
              ))}
            </ul>
          </article>

          {/* Profil Resmi */}
          <figure className="w-[300px] flex justify-center items-center">
            <img
              src="/images/pp2.png"
              alt={`${profileContent.title} - Profile Picture`}
              className="w-[300px] h-[290px] object-cover rounded-md"
            />
          </figure>

          {/* Hakkımda */}
          <article className="w-[300px] text-left">
            <h3 className="font-semibold text-2xl self-start mb-5">
              {profileContent.aboutMe}
            </h3>
            <p>{profileContent.aboutText}</p>
          </article>

        </div>
      </div>
    </section>
  );
}
