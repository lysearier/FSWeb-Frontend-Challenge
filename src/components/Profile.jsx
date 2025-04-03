import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"; // ThemeContext'i ekledik
import content from "../data/content";

export default function Profile() {
  const { language } = useLanguage();
  const { theme } = useTheme(); // Dark mode'u almak için
  const profileContent = content.profile[language];

  return (
    <div className={`min-h-[560px] flex items-center justify-center p-8 transition-all duration-300 ${theme === "dark" ? "bg-[#171043] text-white" : "bg-[#4731D3] text-white"}`}>
      <div className="flex flex-col w-auto max-w-[960px] justify-center">
        {/* Profile Başlığı - Sola Hizalı */}
        <h2 className={`text-5xl font-bold mb-8 self-start text-[#CBF281]`}>
          {profileContent.title}
        </h2>

        {/* İçeriği Ortalayan Bölüm */}
        <div className="flex gap-[30px] items-start justify-center">
          {/* Sol Bilgiler */}
          <div className="w-[300px] text-left">
            <h3 className="font-semibold text-2xl self-start mb-5">
              {profileContent.basicInfo}
            </h3>
            {/* Doğum Tarihi, Şehir, Eğitim ve Rol */}
            <div className="space-y-6"> 
              {profileContent.details.map((detail, index) => (
                <p key={index}>
                  <strong className="text-[#CBF281]">{detail.label}</strong> {detail.value}
                </p>
              ))}
            </div>
          </div>

          {/* Profil Resmi */}
          <div className="w-[300px] flex justify-center items-center">
            <img
              src="/images/pp2.png"
              alt="Profile"
              className="w-[300px] h-[290px] object-cover rounded-md"
            />
          </div>

          {/* Sağ Taraf Hakkımda */}
          <div className="w-[300px] text-left">
            <h3 className="font-semibold text-2xl self-start mb-5">
              {profileContent.aboutMe}
            </h3>
            <p>{profileContent.aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
