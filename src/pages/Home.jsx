import CarouselHome from "../components/CarouselHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-back bg-homeline bg-cover h-screen w-screen sm:h-auto name=/">
      <div className="flex flex-col text-blue font-title mx-8">
        <h1 className=" text-7xl sm:text-5xl sm:text-center mt-6">
          {" "}
          NAWEL BENAICHA{" "}
        </h1>
        <h2 className="text-5xl sm:text-2xl sm:text-center"> WEB DEVELOPER </h2>
      </div>
      <CarouselHome />
      <Footer />
    </div>
  );
};

export default Home;
