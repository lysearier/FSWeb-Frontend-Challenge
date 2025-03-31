export default function Projects() {
  return (
    <div className="min-h-[1039px] bg-[#CBF281] text-white flex items-center justify-center flex-col gap-5">
      <div className="text-[#4731D3]">
        <h2>Projects</h2>
      </div>

      <div className="flex justify-between bg-white rounded-xl">
        <div>
          <p className="text-black"></p>
          <img src="" alt="" />
        </div>
        <div>
          <div className="text-[#4731D3]"> <h3>Workintech</h3> </div>
          <div className="text-black"> <p> proje açıklama</p></div>
          <div className="flex justify-start gap-2 ">
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              <p className="">react</p>
            </div>
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              redux
            </div>
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              vercel
            </div>
          </div>
          <div className="flex justify-start gap-16 text-black underline">
            <div className="">
              <p>View Site</p>
            </div>
            <div className=""> 
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-white rounded-xl">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div className="text-[#4731D3]"> <h3>Journey</h3> </div>
          <div className="text-black"> <p> proje açıklama</p></div>
          <div className="flex justify-start gap-2 ">
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              <p className="">react</p>
            </div>
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              redux
            </div>
            <div className="bg-[#4731D3] rounded-3xl p-1 px-5 ">
              vercel
            </div>
          </div>
          <div className="flex justify-start gap-16 text-black underline">
            <div className="">
              <p>View Site</p>
            </div>
            <div className=""> 
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}