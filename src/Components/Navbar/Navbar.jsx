import CalendarIcon from "../../Assets/Icons/calendar.svg";
import SearchIcon from "../../Assets/Icons/search.svg";
import NotificationIcon from "../../Assets/Icons/notification.svg";
import QuestionIcon from "../../Assets/Icons/question.svg";
import ProfileIcon from "../../Assets/Icons/profile.svg";
import DownArrowIcon from "../../Assets/Icons/downArrow.svg";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center text-gray-500">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="hidden md:flex items-center rounded-md bg-gray-100 px-4 py-2 ml-8">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[471px] h-[11px] hidden md:block outline-none bg-gray-100 p-3 ml-3"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-6">
            <img src={CalendarIcon} alt="" />
          </div>
          <div className="flex items-center justify-center mr-6">
            <img src={QuestionIcon} alt="" />
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={NotificationIcon} alt="" />
          </div>

          <div className="flex items-center gap-3 mr-8">
            <div className="hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end">
              <span className="text-base font-normal text-black">
                Anima Agrawal
              </span>
              <span className="text-sm font-normal text-grey">U.P, India</span>
            </div>
            <img
              src={ProfileIcon}
              alt="Anima Agrawal"
              className="rounded-full"
            />
            <img src={DownArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
