const About = () => {
  return (
    <div
      className="bg-back bg-aboutline bg-left bg-cover w-screen h-fit min-h-screen sm:auto"
      name="about"
    >
      <div className="flex flex-col">
        <h1 className=" text-blue font-title ml-12 text-9xl  sm:hidden">
          A PROPOS.
        </h1>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3 ml-12 mt-14 sm:hidden ">
          <h1 className="text-5xl font-body text-left text-blue mt-3 mb-3 sm:hidden ">
            QUI SUIS-JE ?
          </h1>
          <p className="font-body text-justify mb-3 sm:hidden ">
            Le jour, je suis une fille ordinaire et la nuit, une joueuse de
            Sims4… Je plaisante ! Je suis tout le temps une fille ordinaire,
            travailleuse acharnée, proche de ma famille et mère d'un chien. En
            fait, mon chien pense que je suis un héros parce que je l'ai sauvé
            de la rue. Je suis une personne bavarde et je pense la communication
            est importante. Et sous toute ses formes. J’aime la musique, le
            design et la photographie.{" "}
          </p>
        </div>
        <div className="flex flex-col w-1/3 ml-12 mt-28 sm:hidden ">
          <h1 className="text-5xl font-body text-left text-blue mt-3 mb-3 sm:hidden ">
            {" "}
            Mon parcours!{" "}
          </h1>
          <p className="font-body text-justify mb-3 sm:hidden ">
            Mon parcours professionnel est une aventure variée. Tout a commencé
            avec l'obtention de mon BTS en option tourisme, qui m'a ouvert les
            portes de la communication digitale en Inde, à New Delhi, au sein
            d'une agence de voyage. Par la suite, j'ai eu l'opportunité de
            travailler dans différents pays insulaires, continuant à explorer
            les subtilités de la communication digitale. Cependant, ma soif de
            connaissances m'a conduit à une réorientation vers le développement
            web. J'ai rejoint l'école Wild Code School, où j'ai passé un an en
            alternance au sein d'une startup, en tant que développeuse
            front-end. Ma soif d'apprentissage ne s'est pas arrêtée là. J'ai
            intégré une formation combinant la communication et le web marketing
            pour harmoniser l'ensemble de mes compétences. Mon parcours m'a
            également permis de travailler en freelance, collaborant avec
            diverses marques pour créer du contenu UGC.
          </p>
        </div>
      </div>
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5"> A PROPOS</h1>
        <img className="h-80 w-60 " src="../assets/orangeDecor.png" />
        <p className="font-body text-justify text-base mx-5 overscroll-x-auto overflow-auto h-60">
          <span className="font-mtitle text-2xl ">Qui suis-je?</span> Le jour,
          je suis une fille ordinaire et la nuit, une joueuse de Sims4… Je
          plaisante ! Je suis tout le temps une fille ordinaire, travailleuse
          acharnée, proche de ma famille et mère d'un chien. En fait, mon chien
          pense que je suis un héros parce que je l'ai sauvé de la rue. Je suis
          une personne bavarde et je pense la communication est importante. Et
          sous toute ses formes. J’aime la musique, le design et la
          photographie. <br />
          <span className="font-mtitle text-2xl ">Mon parcours!</span> Mon
          parcours professionnel est une aventure variée. Tout a commencé avec
          l'obtention de mon BTS en option tourisme, qui m'a ouvert les portes
          de la communication digitale en Inde, à New Delhi, au sein d'une
          agence de voyage. Par la suite, j'ai eu l'opportunité de travailler
          dans différents pays insulaires, continuant à explorer les subtilités
          de la communication digitale. Cependant, ma soif de connaissances m'a
          conduit à une réorientation vers le développement web. J'ai rejoint
          l'école Wild Code School, où j'ai passé un an en alternance au sein
          d'une startup, en tant que développeuse front-end. Ma soif
          d'apprentissage ne s'est pas arrêtée là. J'ai intégré une formation
          combinant la communication et le web marketing pour harmoniser
          l'ensemble de mes compétences. Mon parcours m'a également permis de
          travailler en freelance, collaborant avec diverses marques pour créer
          du contenu UGC.
        </p>{" "}
      </div>
    </div>
  );
};

export default About;
