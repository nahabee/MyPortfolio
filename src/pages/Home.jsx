import CarouselHome from "../components/CarouselHome";

const Home = () => {
  return (
    <>
      <div className="bg-back h-screen w-screen name=/">
        <div className="flex flex-col text-blue font-title mx-8 sm:text-4xl sm:text-center">
          <h1 className=" text-7xl"> NAWEL BENAICHA </h1>
          <h2 className="text-5xl"> WEB DEVELOPER </h2>
        </div>
        <CarouselHome />
      </div>
    </>
  );
};

export default Home;
