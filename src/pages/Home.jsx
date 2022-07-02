const Home = () => {
  return (
    <div className="bg-back bg-homeline bg-cover h-screen w-screen sm:bg-none sm:border-b sm:border-blue name=/">
      <div className="flex flex-col text-blue font-title mx-8 sm:hidden ">
        <div className=" text-9xl sm:text-5xl sm:text-left mt-6 sm:mt-0">
          <h1>NAWEL</h1>
          <h2>BENAICHA.</h2>
          <h3 className="text-5xl sm:text-2xl sm:text-left"> WEB DEVELOPER </h3>
        </div>
        <div className="inset-y-0 left-0">
          <a href="https://www.linkedin.com/in/nawelbch/" target="_blank">
            <img
              className="w-56 h-48 cursor-pointer "
              src="../assets/linkdin.png"
            />
          </a>
        </div>
      </div>
      {/* mobile only */}
      <div className=" flex flex-col text-blue font-mtitle  m:hidden">
        <h1 className="uppercase text-center text-5xl mt-5 sm:mt-3">
          Nawel Benaicha
        </h1>
        <h2 className="text-center text-xl">Web developer</h2>
      </div>
      <div className="flex flex-col items-center text-blue m:hidden">
        <img src="../assets/flower.png" />
        <p className="font-body text-center ">
          {" "}
          <span className="font-mtitle text-3xl">M</span>obile version of this
          portfolio.
        </p>
      </div>
    </div>
  );
};

export default Home;
