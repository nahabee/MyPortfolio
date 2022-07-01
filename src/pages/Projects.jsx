import dataProjects from "../dataProjects";

const Projects = () => {
  return (
    <div
      className="bg-back bg-cover h-screen w-screen border-t border-b border-blue scrollbar-hide sm:auto"
      name="projects"
    >
      <h1 className="text-blue text-9xl font-title sm:hidden mx-8 m:text-7xl">
        MY PROJECTS.
      </h1>

      {/* Présentation des projets */}
      <div className=" w-full flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-10 gap-12 scrollbar-hide sm:hidden">
        <div className="snap-center shrink-0 " />
        {dataProjects &&
          dataProjects.map(({ url, img, title, desc }, index) => (
            <div className="snap-center shrink-0 ">
              <a href={url} key={index} target="_blank">
                <img
                  className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
                  src={img}
                  key={index}
                />
              </a>
              <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue ">
                {" "}
                <span className="font-body_bold text-left text-lg mb-4">
                  {title}
                </span>
                {desc}
              </h1>
            </div>
          ))}
      </div>
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5"> PROJECTS </h1>
        {/* projects */}
        <div className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-10 gap-8 scrollbar-hide">
          {dataProjects &&
            dataProjects.map(({ url, img, title, desc }, index) => (
              <div className="snap-center shrink-0 ">
                <a href={url} key={index} target="_blank">
                  <img
                    className="shrink-0 w-80 h-52 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
                    src={img}
                    key={index}
                  />
                </a>
                <h1 className="flex flex-col w-80 mt-8 text-justify font-body text-blue ">
                  {" "}
                  <span className="font-body_bold text-left text-base mb-4">
                    {title}
                  </span>
                  {desc}
                </h1>
              </div>
            ))}
        </div>
      </div>

      {/* mobile version stop */}
      <a className="md:hidden text-blue font-mtitle"> Discover → </a>
    </div>
  );
};

export default Projects;
