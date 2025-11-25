import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";

export default function ConnectWithUs({ className, property1 = "Youtube" }) {
  const icons = {
    youtube: <FaYoutube size={24} className="text-[#7E7577] group-hover:text-white" />,
    facebook: <AiFillFacebook size={24} className="text-[#7E7577] group-hover:text-white" />,
    instagram: <PiInstagramLogoLight size={24} className="text-[#7E7577] group-hover:text-white" />,
  };

  const key = property1.toLowerCase();

  // Text-only items
  if (
    property1 === "Pre-Publication" ||
    property1 === "Feedback" ||
    property1 === "Bulletin" ||
    property1 === "Return & Refund Policy" ||
    property1 === "Archives" ||
    property1 === "Privacy Policy" ||
    property1 === "Catalogue" ||
    property1 === "Terms & Conditions"
  ) {
    return (
      <div className={className}>
        <p className="font-['Inter'] text-[14px] text-[#7e7577] hover:text-white cursor-pointer leading-6">
          {property1}
        </p>
      </div>
    );
  }

  return (
    <div className={`${className} group cursor-pointer`}>
      <div className="flex gap-2 items-center">

        {/* Icon with hover */}
        {icons[key] && (
          <div className="shrink-0">
            {icons[key]}
          </div>
        )}

        {/* Text with hover */}
        <p className="font-['Inter'] text-[14px] text-[#7e7577] group-hover:text-white leading-6">
          {property1}
        </p>
      </div>
    </div>
  );
}
