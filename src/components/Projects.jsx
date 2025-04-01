export default function Projects() {
  return (
    <div className="min-h-[1039px] bg-[#CBF281] text-white flex items-center justify-center flex-col gap-5">
      
      {/* Profil ve Projeleri Saran Ana Container */}
      <div className="max-w-[960px] w-full flex flex-col gap-5">

        {/* Projects Başlığı */}
        <div className="text-[#4731D3] w-full">
          <h2 className="text-5xl font-bold mb-3 self-start text-[#4832d3]">Projects</h2>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-5">
          {/* Workintech Project */}
          <div className="flex bg-white rounded-xl p-5 gap-5">
  {/* Resim Alanı */}
  <div className="w-[360px] h-[360px] flex-shrink-0">
    <img src="/images/project1.png" alt="Workintech" className="w-full h-full object-cover object-left-top"/>
  </div>

  {/* Metin Alanı */}
  <div className="flex flex-col gap-2 max-w-[500px]">
    <h3 className="text-4xl font-bold mb-3 self-start text-[#4832d3]">Workintech</h3>
    <p className="text-black">
      A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
      This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes 
      any type of customization to code and themes possible.
    </p>
    <div className="flex justify-start gap-2">
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">react</div>
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">redux</div>
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">vercel</div>
    </div>
    <div className="flex justify-start gap-16 text-black underline">
      <p>View Site</p>
      <p>Github</p>
    </div>
  </div>
</div>
          {/* Journey Project */}
<div className="flex bg-white rounded-xl p-5 gap-5">
  {/* Resim Alanı */}
  <div className="w-[360px] h-[360px] flex-shrink-0">
    <img src="/images/project2.png" alt="Journey" className="w-full h-full object-cover object-left-top"/>
  </div>

  {/* Metin Alanı */}
  <div className="flex flex-col gap-2 max-w-[500px]">
    <h3 className="text-4xl font-bold mb-3 self-start text-[#4832d3]">Journey</h3>
    <p className="text-black">
      A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
      This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes 
      any type of customization to code and themes possible.
    </p>
    <div className="flex justify-start gap-2">
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">react</div>
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">redux</div>
      <div className="bg-[#4731D3] rounded-3xl p-1 px-5 text-white">vercel</div>
    </div>
    <div className="flex justify-start gap-16 text-black underline">
      <p>View Site</p>
      <p>Github</p>
    </div>
  </div>
</div>        
        </div>
        
      </div>
    </div>
  );
}
