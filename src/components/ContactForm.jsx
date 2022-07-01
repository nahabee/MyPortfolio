import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState(" ");
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gjcfuxl",
        "template_ijyfhz8",
        document.createElement("form"),
        "VMfNTk2sajsmJJtQS"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    sendEmail(e);
    setMessage("Successfully send");
  };

  return (
    <div className="flex p-12 sm:p-0 sm:justify-center">
      <form
        className="w-full max-w-[550px] sm:w-64 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-blue text-body ">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required={true}
            className="w-full placeholder:font-body  rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-blue text-body">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            required={true}
            className="w-full  placeholder:font-body rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-blue text-body">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            required={true}
            className="w-full  placeholder:font-body rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-blue text-body">
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            required={true}
            className="w-full resize-none placeholder:font-body rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          ></textarea>
        </div>
        <div className="flex items-center gap-8 sm:gap-2">
          <button
            type="submit"
            className="rounded-md bg-blue py-3 px-8 text-back text-body"
          >
            Submit
          </button>{" "}
          <div className="text-blue text-body mt-6 sm:flex "> {message} </div>
        </div>
      </form>{" "}
    </div>
  );
};

export default ContactForm;
