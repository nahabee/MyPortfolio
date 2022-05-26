import CarouselHome from "../components/CarouselHome";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-grey h-screen w-screen font-title ">
      <div className=" grid grid-cols-3 ">
        <h1 className="title text-8xl ml-3.5">WELCOME</h1>
        <h1 className="title text-6xl flex justify-center mt-20 ">to my</h1>
        <h1 className="title text-8xl mt-40">portfolio .</h1>
      </div>
      <CarouselHome />
    </div>
  );
};

export default Home;
