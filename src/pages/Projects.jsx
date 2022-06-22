const Projects = () => {
  return (
    <div
      className="bg-back bg-cover h-screen w-screen border-t border-b border-blue scrollbar-hide sm:h-auto"
      name="projects"
    >
      <h1 className="text-blue text-9xl font-title sm:text-5xl sm:text-center m-12">
        MY PROJECTS.
      </h1>

      {/* Présentation des projets */}
      <div className=" w-full flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-10 gap-12 scrollbar-hide ">
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 " />
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
          <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue">
            {" "}
            <span className="font-body_bold text-left text-lg mb-4">
              A RESTAURANT BETWEEN LAND AND SEA.
            </span>
            The natural and peaceful atmosphere of the restaurant is aligned
            with this environment between land and sea. We were also
            exceptionally lucky that the architecture and design of the place
            was carried out by India Mahdavi. The restaurant also has a terrace
            outdoor area ideal for sunny days, as well as a vegetated winter
            garden, echoing the land-sea cuisine of our chef.
          </h1>
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
          <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue">
            {" "}
            <span className="font-body_bold text-left text-lg mb-4">
              SPATIAL RECRUITMENT AGENCY.
            </span>
            Xpanse agency has gained worldwide attention for a series of
            historic milestones. It is the only private company capable of
            returning a spacecraft from low-Earth orbit, and in 2012 our Dragon
            spacecraft became the first commercial spacecraft to deliver cargo
            to and from the International Space Station. And in 2020, Xpanse
            agency became the first private company to take humans there as
            well.
          </h1>
        </div>

        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/agibask.png"
          />
          <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue">
            {" "}
            <span className="font-body_bold text-left text-lg mb-4">
              THE GREEN PLATEFORM.
            </span>
            A platform for connecting individuals and associations for
            ecological and collective purposes in the Basque Country. With a
            simple and effective interface in order to carry out more concrete
            and sustainable actions in order to reduce the impact of pollution
            and make the general public aware of the safeguarding of our
            territory.
          </h1>
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
            src="./src/assets/brille.png"
          />
          <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue">
            {" "}
            <span className="font-body_bold text-left text-lg mb-4">
              BRILLE, FASHION AND VEGAN HANDBAGS.
            </span>
            Brille is an eco-responsible and vegan brand of handbags made in
            Spain in a workshop on a human scale, in the heart of the Ubrique
            region. Its soft vegetable materials, imitating leather to
            perfection, are produced in northern Italy, from apple waste. Its
            interior cotton is an eco-responsible material produced in Spain.
            Brille then offers a qualitative product above all, durable,
            ethical, good for the planet, chic, glamorous and in bright colors,
            to shine in all circumstances, wherever you are.
          </h1>
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
