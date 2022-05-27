import CarouselHome from "../components/CarouselHome";
import "./Styles.css";

const Home = () => {
  return (
    <div className="bg-grey h-full w-full ">
      <div className="grid grid-cols-3 font-title sm:grid-cols-1">
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
      <div className="">
        <div className="grid gap-20 grid-cols-3 ml-14 mr-20 lg:grid-cols-1 lg:gap-10">
          <div className="cards flex flex-col mt-8 ">
            <div className="text-justify pt-5 pb-10">
              <h1 className="text-5xl text-white ml-8 font-title tracking-widest">
                Hello,
              </h1>
            </div>
            <h4 className="text-white text-xl font-thin tracking-widest ml-8 mr-8">
              My name is Nawël i'm 26 and i'm web developer. Welcome to my
              portfolio where you can find some informations about who i am,
              what i love and my universe. You gonna discover more about my
              school projects and about my evolution as a young web developer.
              If you need more informations, you can just contact me directly.
              Hope you're gonna enjoy your visit.
            </h4>
          </div>

          {/* bloc 2 */}
          <div className="cards flex flex-col mt-36 ">
            <div className="text-justify pt-5 pb-10">
              <h1 className="text-5xl text-white ml-8 font-title tracking-widest">
                <button>Hello,</button>
              </h1>
            </div>
            <h4 className="text-white text-xl font-thin tracking-widest ml-8 mr-8"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
