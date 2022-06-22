const About = () => {
  return (
    <div
      className="bg-back bg-aboutline bg-cover h-screen w-screen"
      name="about"
    >
      <div className="flex text-blue font-title ml-12 sm:h-auto">
        <h1 className=" text-9xl mt-10 sm:text-5xl sm:text-center">
          ABOUT ME.
        </h1>
      </div>

      <div className="flex flex-col w-1/5 ml-12 mt-14 border-t border-b border-blue sm:flex-col sm:w-64 sm:justify-center">
        <h1 className="text-5xl font-body text-left text-blue mt-3 mb-3 sm:text-5xl">
          WHO AM I ?
        </h1>
        <p className="font-body text-justify mb-3">
          By day I'm a regular girl and by night a sims4 player … Just joking!
          I'm a regular girl all the time, harde worker, close to my family, and
          mother of a dog. Actually, my dog thinks I'm a hero because I saved
          him from the street. I'm a talkative person and I believe
          communication is important. I love to travel and I'm always planning
          my next trip.I love music, design, and photography. I read a lot,
          especially self-help book.{" "}
        </p>
      </div>
      <div className="flex justify-center -mt-52 sm:justify-start">
        <h1 className="skew-y-3 text-5xl flex flex-col w-4/12 font-body text-left text-blue ml-56 -m-4 sm:text-4xl sm:hidden ">
          {" "}
          WHY WEB DEVELOPMENT ?{" "}
        </h1>
      </div>
      <div className="flex w-3/12 ml-9/9 mt-12 border-l border-r border-blue sm:flex-col sm:hidden">
        <p className="font-body text-justify ml-3 mr-3">
          For web developement, creativity is key. I choose to be front-end web
          developer especially for this reason. We are able to create
          first-class user experiences and charming websites full of design. It
          is easy for us to forget how dependent we have become on technology.
          It is seamlessly integrated into our everyday lives. LEARNing how to
          code gives us a newfound appreciation of the work that gets put into
          the technology that many take for granted. As a web developer, i can
          create these things and it's fully satisfying.
        </p>
      </div>
    </div>
  );
};

export default About;
