/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import Users from "../../Util/Users";
import Moodboard1 from "../../Assets/Cards_Images/Moodboard-1.png";
import MobileAppDesign from "../../Assets/Cards_Images/mobile-app.png";
import MenuIcon from "../../Assets/Icons/menu.svg";
import CommentsIcon from "../../Assets/Icons/comments.svg";
import FilesIcon from "../../Assets/Icons/files.svg";
import Moodboard2 from "../../Assets/Cards_Images/Moodboard-2.png";
import Onboarding from "../../Assets/Cards_Images/OnboardingCover.png";

const CardItem = ({ todo, index }) => {
  const pictures = { MobileAppDesign, Moodboard1, Moodboard2, Onboarding };

  return (
    <Draggable draggableId={todo.id.toString()} key={todo.id} index={index}>
      {(provided) => (
        <div className="rounded-2xl bg-purple-100">
          <div
            className="p-5 rounded-2xl bg-white"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <header className="flex justify-between items-center mb-1">
              <span
                className={`text-xs font-medium capitalize py-1 px-[6px] rounded-[4px] ${
                  todo.status === "completed"
                    ? "bg-[#83C29D] bg-opacity-20 text-[#68B266]"
                    : todo.priority === "low"
                    ? "bg-[#DFA874] bg-opacity-20 text-[#D58D49]"
                    : "bg-[#D8727D] bg-opacity-20 text-[#D8727D]"
                }`}
              >
                {todo.status === "completed" ? todo.status : todo.priority}
              </span>
              <img src={MenuIcon} alt="MenuIcon" />
            </header>
            <div className="flex flex-col gap-[6px] mb-7">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              {todo.description && (
                <p className="text-xs font-normal text-[#787486]">
                  {todo.description}
                </p>
              )}
              {todo?.image.length !== 0 && (
                <div className="flex flex-wrap justify-center md:justify-around items-center">
                  {todo?.image?.map((picture) => (
                    <img
                      src={pictures[picture]}
                      alt={picture}
                      key={picture}
                      className="w-full md:w-auto max-w-full md:max-w-none mb-2 md:mb-0 mr-2"
                    />
                  ))}
                </div>
              )}
            </div>
            <footer className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:items-center">
              <Users
                users={todo.users}
                width="24px"
                height="24px"
                offset="4"
                overlap="right"
              />
              <section className="flex flex-col gap-[14px] sm:flex-row sm:items-center">
                <span className="flex gap-[5px] items-center text-xs font-medium text-[#787486]">
                  <img src={CommentsIcon} alt="CommentsIcon" />
                  {todo.comments + " comments"}
                </span>
                <span className="flex gap-[5px] items-center text-xs font-medium text-[#787486]">
                  <img src={FilesIcon} alt="FilesIcon" />
                  {todo.files + " files"}
                </span>
              </section>
            </footer>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
