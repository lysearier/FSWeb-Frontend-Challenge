import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="min-h-[454px] bg-[#F9F9F9] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-3 text-[#4832d3]">Send me a message!</h1>
      <p className="text-black mb-2 text-center">
        Got a question or proposal, or just want to <br />
        say hello? Go ahead.
      </p>
      <p className="text-[#4731D3] underline decoration-1 mb-4">erengndz57@outlook.com</p>
      <div className="flex gap-6 text-[#4731D3]">
        <a href="https://x.com/erenamauzgun_" className="hover:text-[#3023a1]">
          <FaTwitter size={32} style={{ fill: "none", stroke: "currentColor", strokeWidth: 30 }} />
        </a>
        <a href="https://codepen.io" className="hover:text-[#3023a1]">
          <FaCodepen size={32} />
        </a>
        <a href="mailto:erengndz57@outlook.com" className="hover:text-[#3023a1]">
          <FaAt size={32} />
        </a>
        <a href="https://instagram.com" className="hover:text-[#3023a1]">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
}