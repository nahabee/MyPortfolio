import CarouselHome from "../components/CarouselHome";
import "./Styles.css";

const Home = () => {
  return (
    <div className="bg-grey h-screen w-screen " name="/">
      <div className="grid grid-cols-3 sm:grid-cols-1">
        <h1 className="title text-8xl ml-3.5 sm:text-6xl ">WELCOME</h1>
        <h1 className="title text-6xl flex justify-center ml-3.5 mt-10 sm:text-4xl ">
          to my
        </h1>
        <h1 className="title text-8xl mt-12 sm:text-7xl sm:ml-3.5">
          portfolio .
        </h1>
      </div>
      <CarouselHome />
      <div className="body flex flex-col bg-brown">
        <h2 className="text-4xl ml-3.5 flex justify-center font-thin tracking-widest text-white p-10 sm:text-2xl sm:p-5 sm:text-center ">
          {" "}
          Nawël, junior web developer.
        </h2>
      </div>
    </div>
  );
};

export default Home;
