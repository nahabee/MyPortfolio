import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div
      className="bg-projectsline bg-cover h-screen w-screen bg-back min-h-screen max-h-screen"
      name="contact"
    >
      <h1 className="text-blue text-9xl font-title ml-12 sm:hidden ">
        {" "}
        CONTACT ME.{" "}
      </h1>
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5 mb-5"> CONTACT </h1>
      </div>
      <ContactForm />
      <div className="m:hidden">
        <a
          href="mailto: nawelbenaicha@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <h1>mail</h1>
        </a>
        <h2>linkedin</h2>
        <h3>CV</h3>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
