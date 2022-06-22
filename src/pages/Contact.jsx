import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      className="bg-projectsline bg-cover h-screen w-screen bg-back"
      name="contact"
    >
      <h1 className="text-blue text-9xl font-title mx-8 sm:text-6xl sm:text-center">
        {" "}
        CONTACT ME.{" "}
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
