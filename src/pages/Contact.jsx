import ContactForm from "../components/ContactForm";

import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      className="bg-projectsline bg-cover h-screen w-screen bg-back"
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
      <Link className="cursor-pointer" to="/" smooth={true} duration={900}>
        <p className="text-blue font-body flex justify-end mr-4 mt-8 m:hidden">
          {" "}
          Back to top
        </p>
      </Link>
    </div>
  );
};

export default Contact;
