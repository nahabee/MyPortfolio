import CarouselHome from "../components/CarouselHome";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="bg-back bg-homeline bg-cover h-screen w-screen  name=/">
        <div className="flex flex-col text-blue font-title mx-8">
          <h1 className=" text-7xl sm:text-5xl sm:text-center">
            {" "}
            NAWEL BENAICHA{" "}
          </h1>
          <h2 className="text-5xl sm:text-2xl sm:text-center">
            {" "}
            WEB DEVELOPER{" "}
          </h2>
        </div>
        <CarouselHome />
        <h3 className="text-blue font-body mx-8 absolute inset-x-0 bottom-2 tracking-xl sm:text-left sm:text-sm sm:flex sm:flex-col">
          {" "}
          <Link to="about">
            <span className="hover:uppercase cursor-pointer font-body_bold text-xl sm:text-left  ">
              {" "}
              Discover{" "}
            </span>
          </Link>
          - Created with love by Nawël - <span> nawelbenaicha@gmail.com</span>
        </h3>
      </div>
    </>
  );
};

export default Home;
