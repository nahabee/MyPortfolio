import dataProjects from "../dataProjects";
import { useState } from "react";

const Projects = () => {
  const [containsWord, setContainsWord] = useState("");
  const handleContainsWord = (word) => {
    setContainsWord(word);
  };
  return (
    <div
      className="bg-back bg-cover h-screen w-screen border-t border-b border-blue sm:auto"
      name="projects"
    >
      <h1 className="text-blue text-9xl font-title sm:hidden ml-12 uppercase ">
        Mes projets.
      </h1>
      <div className="ml-12 mt-6 sm:hidden">
        <input
          type="text"
          placeholder="Recherche par techno "
          className="font-body outline-none p-1 text-[16px] text-blue w-96 rounded-lg border-blue border bg-back"
          value={containsWord}
          onChange={(e) => handleContainsWord(e.target.value)}
        />
      </div>
      {/* Présentation des projets */}
      <div className=" w-full flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-5 py-6 gap-12  sm:hidden">
        <div className="snap-center shrink-0 " />
        {dataProjects &&
          dataProjects
            .filter((dataProject) =>
              dataProject.techno
                .toLowerCase()
                .includes(containsWord.toLowerCase())
            )
            .map(({ url, img, title, desc, techno }, index) => (
              <div className="snap-center shrink-0 " key={index}>
                <a href={url} target="_blank">
                  <img
                    className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
                    src={img}
                  />
                </a>
                <h1 className="flex flex-col w-96 mt-8 text-justify font-body text-blue ">
                  {" "}
                  <span className="font-body_bold text-left text-lg mb-4">
                    {title}
                  </span>
                  {desc}
                </h1>
                <a className="font-body hidden">{techno}</a>
              </div>
            ))}
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48" />
        </div>
      </div>{" "}
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5"> PROJECTS </h1>

        {/* projects */}
        <div className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain mt-10 gap-8 scrollbar-hide">
          <div className="snap-center shrink-0 " />
          {dataProjects &&
            dataProjects
              .filter((dataProjects) =>
                dataProjects.techno
                  .toLowerCase()
                  .includes(containsWord.toLowerCase())
              )
              .map(({ url, img, title, desc, techno }, index) => (
                <div className="snap-center shrink-0 " key={index}>
                  <a href={url} target="_blank">
                    <img
                      className="shrink-0 w-80 h-52 rounded-lg shadow-xl bg-white hover:scale-90 ease-in duration-500 cursor-pointer"
                      src={img}
                    />
                  </a>
                  <h1 className="flex flex-col w-80 mt-8 text-justify font-body text-blue ">
                    {" "}
                    <span className="font-body_bold text-left text-base mb-4">
                      {title}
                    </span>
                    {desc}
                  </h1>
                  <a className="font-body hidden">{techno}</a>
                </div>
              ))}
          <div className="snap-center shrink-0 " />
        </div>
      </div>
      {/* mobile version stop */}
      <a className="md:hidden text-blue font-mtitle ml-8"> Discover → </a>
    </div>
  );
};

export default Projects;
