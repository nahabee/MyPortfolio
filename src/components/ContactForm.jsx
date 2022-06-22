import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const notify = () => toast("Message successfully send !");

const ContactForm = () => {
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
  return (
    <div className="flex p-12">
      <form className="w-full max-w-[550px] sm:w-64 " onSubmit={sendEmail}>
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
        <div>
          <button
            className="rounded-md bg-blue py-3 px-8 text-back text-body"
            onSubmit={notify}
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
