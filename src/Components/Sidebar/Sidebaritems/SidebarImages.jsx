/* eslint-disable react/prop-types */


const SidebarImages = ({ icon, text }) => {
  return (
    <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
      <img src={icon} alt={text} />
      <span className="hidden sm:block">{text}</span>
    </li>
  );
};


export default SidebarImages;
