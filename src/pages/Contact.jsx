import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import { Link } from "react-scroll";

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
      <div className="">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
