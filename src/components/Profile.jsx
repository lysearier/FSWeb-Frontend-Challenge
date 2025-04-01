export default function Profile() {
  return (
    <div className="min-h-[560px] flex items-center justify-center bg-[#4731D3] text-white p-8">
      <div className="flex flex-col w-auto max-w-[960px] justify-center">
        {/* Profile Başlığı - Sola Hizalı */}
        <h2 className="text-5xl font-bold mb-8 self-start text-[#CBF281]">Profile</h2>

        {/* İçeriği Ortalayan Bölüm */}
        <div className="flex gap-[30px] items-start justify-center">
          <div className="w-[300px] text-left">
            <h3 className="font-semibold self-start mb-2">Basic Information</h3>
            <p>Doğum Tarihi: 24.03.1996</p>
            <p>İkametgah Şehri: Ankara</p>
            <p>Eğitim Durumu: Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            <p>Tercih Ettiği Rol: Front, UI</p>
          </div>

          <div className="w-[300px] flex justify-center items-center">
            <img src="/images/pp2.png" alt="Profile" className="w-[300px] h-[290px] object-cover rounded-md" />
          </div>

          <div className="w-[300px] text-left">
            <h3 className="font-semibold self-start mb-2">About Me</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.

Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
          </div>
        </div>
      </div>
    </div>
  );
}
