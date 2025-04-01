export default function Profile() {
  return (
    <div className="h-[560px] flex items-center justify-center bg-[#4731D3] text-white p-8">
      <div className="flex flex-col w-[960px] h-[560px] justify-center">
        {/* Profile Başlığı - Sola Hizalı */}
        <h2 className="text-2xl font-bold mb-4 self-start">Profile</h2>

        {/* İçeriği Ortalayan Bölüm */}
        <div className="flex gap-[30px] items-center justify-center h-[290px]">
          <div className="w-[300px] h-full text-left">
            <h3 className="font-semibold">Basic Information</h3>
            <p>Doğum Tarihi: 24.03.1996</p>
            <p>İkametgah Şehri: Ankara</p>
            <p>Eğitim Durumu: Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            <p>Tercih Ettiği Rol: Front, UI</p>
          </div>

          <div className="w-[300px] h-full flex justify-center items-center">
            <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-auto" />
          </div>

          <div className="w-[300px] h-full text-left">
            <h3 className="font-semibold">About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>Morbi euismod urna eget felis aliquet, eget tempor lacus bibendum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
