const ContactForm = () => {
  const email = "nawelbenaicha@gmail.com";
  const linkedin = "https://www.linkedin.com/in/nawelbch/";

  return (
    <div className="flex flex-col p-12 gap-10 sm:p-0 sm:hidden ml-2">
      <div className="w-1/2">
        <p className="font-body text-justify mb-3 sm:hidden text-lg">
          <span className="font-bold text-xl text-blue">Que</span> vous
          souhaitiez discuter de projets futurs, partager des idées
          passionnantes ou simplement échanger des histoires, je suis toujours
          ouverte à la discussion. Pour toute question, proposition ou {""}
          <span className="font-bold text-xl text-blue">
            collaboration
          </span>{" "}
          potentielle. Je suis impatiente de faire connaissance et d'explorer de
          nouvelles opportunités passionnantes. Mon réseau ne demande qu'à
          s'agrandir, alors n'hésitez pas à me contacter pour que nous{" "}
          <span className="font-bold text-xl text-blue">puissions</span> créer
          ensemble quelque chose de nouveau.
        </p>
      </div>
      <div className="flex gap-4 w-1/2 justify-start">
        <a href={`mailto:${email}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
          </svg>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
          </svg>
        </a>
        <img src="../assets/contact.png" className="w-1/2" />
      </div>
      {/* <form
        className="w-full max-w-[550px] sm:w-3/5 sm:max-width-[60%] "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-blue font-body ">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="false"
            placeholder="Full Name"
            required={true}
            className="w-full placeholder:font-body text-[16px] rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-blue font-body">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="false"
            placeholder="example@domain.com"
            required={true}
            className="w-full  placeholder:font-body text-[16px] rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-blue font-body">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="false"
            placeholder="Enter your subject"
            required={true}
            className="w-full  placeholder:font-body text-[16px] rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-blue font-body">
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            autoComplete="false"
            placeholder="Type your message"
            required={true}
            className="w-full resize-none placeholder:font-body text-[16px] rounded-md border border-blue bg-back py-3 px-6 outline-none focus:shadow-md"
          ></textarea>
        </div>
        <div className="flex items-center gap-8 sm:gap-2">
          <button
            type="submit"
            className="rounded-md bg-blue py-3 px-8 text-back font-body"
          >
            Submit
          </button>{" "}
          <div className="text-blue font-body mt-6 sm:flex "> {message} </div>
        </div>
      </form>{" "} */}
    </div>
  );
};

export default ContactForm;
