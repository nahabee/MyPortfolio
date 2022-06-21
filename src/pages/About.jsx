const About = () => {
  return (
    <>
      <div
        className="bg-aboutline bg-cover h-screen w-screen bg-back"
        name="about"
      >
        <h1 className="text-blue text-7xl font-title mx-8 sm:text-6xl sm:text-center ">
          <span className="decoration-2 underline underline-offset-9 text-9xl text-peche ">
            A
          </span>
          BOUT ME
        </h1>
        <div className="grid grid-cols-3 my-14 mx-8 lg:grid-cols-1 ">
          <div className=" border-t border-blue text-justify font-body text-peche ">
            {" "}
            <span className="text-bold text-6xl text-blue "> Hi ! </span>
            My name is Nawël. I'm 26, and i live in Biarritz. I'm passionated by
            Art-Design and photography. Before, i was working in tourism around
            the world. Now i'm working on web development. And i love it. I bwas
            interested by this universe a long time ago, but i didn't expect it
            was possible for me to enter in a School of web development. We
            makes a lot of projects during this formation then you can discover
            on this portfolio. Welcome, and enjoy!
          </div>

          <div className=" border-t my-64 border-blue text-justify font-body text-peche lg:grid-cols-1 lg:gap-5 lg:hidden ">
            <span className="text-bold text-5xl text-blue "> WHY ? </span>
            Guilty, when i was 6, i've first begin to play sims at the library
            of my little town. It was the begging of a long story time. Twenty
            years later i'm still playing sims but now with a lot of mods and
            packages.I'm in love with the evolution of those games.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
