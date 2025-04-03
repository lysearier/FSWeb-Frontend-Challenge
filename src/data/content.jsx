export const content = {
  hero: {
    en: {
      name: "Eren",
      title: "I am a Frontend Developer...",
      description: "...who likes to craft solid and scalable frontend products with great user experiences.",
      github: "GitHub",
      linkedin: "LinkedIn",
      switchLanguage: "Türkçe'ye Geç",
      switchTheme: "Dark Mode",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    tr: {
      name: "Eren",
      title: "Ben bir Frontend Geliştiricisiyim...",
      description: "...sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven bir geliştiriciyim.",
      github: "GitHub",
      linkedin: "LinkedIn",
      switchLanguage: "Switch to English",
      switchTheme: "Aydınlık Mod",
      lightMode: "Aydınlık Mod",
      darkMode: "Karanlık Mod",
    },
  },

  skills: [
    { name: "JAVASCRIPT", img: "/images/Js.jpg" },
    { name: "REACT", img: "/images/React.png" },
    { name: "REDUX", img: "/images/Redux.png" },
    { name: "NODE", img: "/images/Node.jpg" },
    { name: "VS CODE", img: "/images/VSCode.png" },
    { name: "FIGMA", img: "/images/Figma.jpg" },
  ],

  profile: {
    en: {
      title: "Profile",
      basicInfo: "Basic Information",
      details: [
        { label: "Date of Birth:", value: "24.03.1996" },
        { label: "City of Residence:", value: "Ankara" },
        { label: "Education:", value: "Hacettepe University, BSc in Biology, 2016" },
        { label: "Preferred Role:", value: "Frontend, UI" },
      ],
      aboutMe: "About Me",
      aboutText:
        "My determination to step into the world of software development, which has been my childhood dream, became a reality when I graduated in 2024. Throughout my education, I worked on Windows applications and various projects, enhancing my technical skills. Driven by my desire to gain experience in different fields, I completed the Workintech Full-Stack Development program.",
    },
    tr: {
      title: "Profil",
      basicInfo: "Temel Bilgiler",
      details: [
        { label: "Doğum Tarihi:", value: "24.03.1996" },
        { label: "İkametgah Şehri:", value: "Ankara" },
        { label: "Eğitim:", value: "Hacettepe Üniversitesi, Biyoloji Lisans, 2016" },
        { label: "Tercih Ettiği Rol:", value: "Frontend, UI" },
      ],
      aboutMe: "Hakkımda",
      aboutText:
        "Çocukluk hayalim olan yazılım geliştirme dünyasına adım atma kararlılığım, 2024 yılında mezun olduğumda gerçeğe dönüştü. Eğitimim boyunca Windows uygulamaları ve çeşitli projeler üzerinde çalışarak teknik becerilerimi geliştirdim. Farklı alanlarda deneyim kazanma isteğim doğrultusunda Workintech Full-Stack Development programını tamamladım.",
    },
  },

  projects: {
    en: {
      title: "Projects",
      viewSite: "View Site",
      github: "GitHub",
      items: [
        {
          id: 1,
          name: "Workintech",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          technologies: ["react", "redux", "vercel"],
          image: "/images/project1.png",
          siteLink: "https://www.example.com",
          githubLink: "https://github.com/example", 
        },
        {
          id: 2,
          name: "Journey",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          technologies: ["react", "redux", "firebase"],
          image: "/images/project2.png",
          siteLink: "https://www.example.com",
          githubLink: "https://github.com/example",
        },
      ],
    },
    tr: {
      title: "Projeler",
      viewSite: "Siteyi Görüntüle",
      github: "GitHub",
      items: [
        {
          id: 1,
          name: "Workintech",
          description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcut ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılıyor.",
          technologies: ["react", "redux", "vercel"],
          image: "/images/project1.png",
          siteLink: "https://www.example.com",
          githubLink: "https://github.com/example",
        },
        {
          id: 2,
          name: "Journey",
          description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcut ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılıyor.",
          technologies: ["react", "redux", "firebase"],
          image: "/images/project2.png",
          siteLink: "https://www.example.com",
          githubLink: "https://github.com/example",
        },
      ],
    },
  },
  footer: {
    en: {
      sendMessage: "Send me a message!",
      gotAQuestion: "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "erengndz57@outlook.com",
      socialLinks: {
        twitter: "https://x.com/erenamauzgun_",
        codepen: "https://codepen.io",
        email: "mailto:erengndz57@outlook.com",
        instagram: "https://instagram.com",
      },
    },
    tr: {
      sendMessage: "Bana bir mesaj gönder!",
      gotAQuestion: "Bir sorunuz veya teklifiniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Çekinmeyin.",
      email: "erengndz57@outlook.com",
      socialLinks: {
        twitter: "https://x.com/erenamauzgun_",
        codepen: "https://codepen.io",
        email: "mailto:erengndz57@outlook.com",
        instagram: "https://instagram.com",
      },
    },
  }

};

export default content;
