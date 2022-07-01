import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      className="bg-projectsline bg-cover h-screen w-screen bg-back"
      name="contact"
    >
      <h1 className="text-blue text-9xl font-title mx-8 sm:hidden m:text-7xl">
        {" "}
        CONTACT ME.{" "}
      </h1>
      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle m:hidden">
        <h1 className="text-center text-5xl mt-5 mb-5"> CONTACT </h1>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
