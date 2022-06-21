const Projects = () => {
  return (
    <div className="bg-back bg-cover h-screen w-screen " name="projects">
      <h1 className="text-blue text-7xl font-title sm:text-5xl sm:text-center border-t border-blue ">
        MY PROJECTS
      </h1>

      {/* Présentation des projets */}
      <div className=" w-full flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-10 gap-12 ">
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48" />
        </div>
        <div className="snap-center shrink-0">
          <a
            href="https://jacquespoulin.github.io/Cenitz/index.html"
            className=""
            target="_blank"
          >
            <img
              className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
              src="./src/assets/cenitz.png"
            />
          </a>
        </div>

        <div className="snap-center shrink-0">
          <a
            href="https://xpanse-agency.vercel.app/"
            className=""
            target="_blank"
          >
            <img
              className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
              src="./src/assets/xpanse.png"
            />
          </a>
        </div>

        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/agibask.png"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/brille.png"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/comingsoon.png"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/comingsoon.png"
          />
        </div>
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
