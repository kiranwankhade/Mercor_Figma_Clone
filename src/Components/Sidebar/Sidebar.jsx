import SidebarImage from "../Sidebar/Sidebaritems/SidebarImages";
import HomeIcon from "../../Assets/Icons/home.svg";
import MessageIcon from "../../Assets/Icons/message.svg";
import TaskIcon from "../../Assets/Icons/task.svg";
import Logo from "../../Assets/Icons/logo.svg";
import Arrow from "../../Assets/Icons/arrow.svg";
import SettingIcon from "../../Assets/Icons/setting.svg";
import GroupIcon from "../../Assets/Icons/group.svg";
import AddIcon from "../../Assets/Icons/add.svg";
import SidebarColorDots from "../Sidebar/Sidebaritems/SidebarColorDots";

const Sidebar = () => {
  return (
    <div className="flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white w-[50px] sm:min-w-[250px] xl:min-w-[280px]">
      <header className="h-20 flex justify-between items-center px-[13px] sm:px-[22px]">
        <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
          <img src={Logo} alt="Project M." />
          <span className="opacity-0 md:opacity-100">Project M.</span>
        </span>
        <img src={Arrow} alt="arrow" className="mr-3 hidden sm:block" />
      </header>

      <hr className="border-t border-gray-300" />

      <ul className="my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1">
        <SidebarImage icon={HomeIcon} text="Home" />
        <SidebarImage icon={MessageIcon} text="Messages" />
        <SidebarImage icon={TaskIcon} text="Tasks" />
        <SidebarImage icon={GroupIcon} text="Members" />
        <SidebarImage icon={SettingIcon} text="Settings" />
      </ul>

      <header className="hidden sm:flex justify-between items-center mt-[30px] mb-5 mx-[22px]">
        <span className="text-xs text-[#787486] font-bold">MY PROJECTS</span>
        <img src={AddIcon} alt="add" />
      </header>

      {/* SidebarContent */}
      <ul className="hidden sm:flex flex-col gap-[10px]">
      <SidebarColorDots color="bg-green-500" text="Mobile App" />
      <SidebarColorDots color="bg-orange-500" text="Website Redesign" />
      <SidebarColorDots color="bg-purple-200" text="Design System" />
      <SidebarColorDots color="bg-blue-400" text="Wireframes" />
    </ul>

      {/* SidebarCard  */}
      <div className="hidden sm:block w-[206px] h-[200px] rounded-2xl mx-auto mt-[85px] p-4 bg-gray-100 relative">
      <div className="w-[66px] h-[66px] rounded-full bg-gray-100 absolute top-[-33px] left-[66px] ">
        <div className="top-[-16.5px] left-[-16.5px] absolute">
          <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* For Glow circle */}
            <g filter="url(#filter0_f_0_1)">
              <circle
                cx="50.5"
                cy="50.5"
                r="16.5"
                fill="#fbc912"
                fillOpacity="0.7"
              />
            </g>
            {/* bulb egg shape */}
            <path
              d="M58.21 45.36C57.17 43.26 55.16 41.71 52.83 41.2C50.39 40.66 47.89 41.24 45.98 42.78C44.06 44.31 42.97 46.6 42.97 49.05C42.97 51.64 44.52 54.35 46.86 55.92V56.75C46.85 57.03 46.84 57.46 47.18 57.81C47.53 58.17 48.05 58.21 48.46 58.21H53.59C54.13 58.21 54.54 58.06 54.82 57.78C55.2 57.39 55.19 56.89 55.18 56.62V55.92C58.28 53.83 60.23 49.42 58.21 45.36Z"
              fill="#FBCB18"
            />
            {/* bulb underline */}
            <path
              d="M54.26 61C54.2 61 54.13 60.99 54.07 60.97C52.06 60.4 49.95 60.4 47.94 60.97C47.57 61.07 47.18 60.86 47.08 60.49C46.97 60.12 47.19 59.73 47.56 59.63C49.82 58.99 52.2 58.99 54.46 59.63C54.83 59.74 55.05 60.12 54.94 60.49C54.84 60.8 54.56 61 54.26 61Z"
              fill="#FBCB18"
            />
            <defs>
              <filter
                id="filter0_f_0_1"
                x="0"
                y="0"
                width="101"
                height="101"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="17"
                  result="effect1_foregroundBlur_0_1"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <span className="text-sm text-center font-medium text-black">
          Thoughts Time
        </span>
        <p className="text-xs text-center font-normal text-gray-500 w-[166px] mt-3">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <input
          type="text"
          placeholder="Write a message"
          className="w-[166px] h-[40px] rounded outline-none bg-white p-3 mt-3 placeholder:text-center placeholder-black placeholder:text-sm placeholder:font-medium"
        />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
