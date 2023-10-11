import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div
      className="bg-projectsline bg-cover max-h-fit h-screen w-screen bg-back min-h-screen "
      name="contact"
    >
      <h1 className="text-blue text-9xl font-title ml-12 sm:hidden ">
        {" "}
        CONTACT.{" "}
      </h1>
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5 mb-5"> CONTACT </h1>
      </div>
      <ContactForm />
      <div className="flex flex-col justify-center">
        <img className="-mt-10 m:hidden" src="../assets/formcat.png" />
        <div className="m:hidden -mt-10 font-body text-2xl tracking-widest h-52 justify-around text-blue flex flex-col items-center">
          <a
            href="mailto: nawelbenaicha@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="cursor-pointer hover:text-peche"> Mail</h1>
          </a>
          <a
            href="https://www.linkedin.com/in/nawelbch/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="cursor-pointer hover:text-peche">Linkedin</h2>
          </a>
          <a href="https://github.com/nahabee" target="_blank" rel="noreferrer">
            <h3 className="cursor-pointer hover:text-peche">GitHub</h3>
          </a>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
