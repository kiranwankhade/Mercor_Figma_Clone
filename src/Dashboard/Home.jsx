import Header from "../Components/Header/Header";
import Cards from "../Components/Cards/Cards";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full border-gray-300">
        <Navbar />
        <hr className="border-t border-gray-300" />
        <div className=" mx-4 md:mx-8 lg:mx-12 mt-5">
          <Header />
          <div className="mt-10">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
