export default function Skills() {
  return (
    <div className="w-[1440px] h-[610px] py-[84px]">
      <div className="flex flex-row w-[960px] h-[430px] mx-[239px] bg-white">
        <div className="w-[200px] h-[58px] text-5xl font-bold text-[#4832d3] mt-[30px]">
          <h2>Skills</h2>
        </div>
        <img
          src="/images/skillBoxes1.png"
          alt="skillboxes1"
          className="ml-[50px] w-[290px] h-[430px] object-cover"
        />
        <img
          src="/images/skillBoxes2.png"
          alt="skillboxes2"
          className="ml-[120px] w-[251px] h-[430px] object-cover"
        />
      </div>
    </div>
  );
}
