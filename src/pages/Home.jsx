import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="bg-back bg-homeline bg-cover h-screen w-screen sm:bg-none sm:border-b sm:border-blue"
      name="/"
    >
      <div className="flex flex-col h-screen text-blue font-title mx-6 sm:hidden ">
        <div className=" text-9xl sm:text-5xl sm:text-left sm:mt-0">
          <h1>NAWEL</h1>
          <h2>BENAICHA.</h2>
          <div className="text-5xl ml-1 sm:text-2xl sm:text-left uppercase mt-14">
            <div className="flex flex-col">
              <span>Webmarketing </span>
              <span className="flex gap-4">
                communication digitale
                <Link
                  className="cursor-pointer"
                  to="about"
                  smooth={true}
                  duration={900}
                >
                  <button className="w-5 h-5">
                    {" "}
                    <img
                      className="hover:animate-bounce"
                      src="../assets/down-arrow.png"
                    />
                  </button>
                </Link>
              </span>
            </div>
          </div>
          <div className="text-2xl flex gap-4 ml-2 font-body mt-14">
            <Link
              className="cursor-pointer "
              to="about"
              smooth={true}
              duration={600}
            >
              {" "}
              <h1 className="hover:underline cursor-pointer">A propos</h1>
            </Link>
            <Link
              className="cursor-pointer "
              to="projects"
              smooth={true}
              duration={500}
            >
              {" "}
              <h2 className="hover:underline cursor-pointer">Projets</h2>
            </Link>
            <Link
              className="cursor-pointer "
              to="tools"
              smooth={true}
              duration={400}
            >
              <h3 className="hover:underline cursor-pointer">Outils</h3>
            </Link>
            <Link
              className="cursor-pointer"
              to="contact"
              smooth={true}
              duration={300}
            >
              {" "}
              <h4 className="hover:underline cursor-pointer">Contact</h4>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile only */}
      <div className=" flex flex-col text-blue font-mtitle  m:hidden">
        <h1 className="uppercase text-center text-5xl mt-5 sm:mt-3">
          Nawel Benaicha
        </h1>
        <h2 className="text-center text-xl">
          Web marketing <br /> Communication digitale
        </h2>
      </div>
      <div className="flex flex-col items-center text-blue m:hidden">
        <img src="../assets/flower.png" />
        <p className="font-body text-center -mt-6 ">
          {" "}
          <span className="font-mtitle text-3xl">V</span>ersion mobile de ce
          portfolio.
        </p>
      </div>
    </div>
  );
};

export default Home;
