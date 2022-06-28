import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex justify-around items-center w-4/6 font-body text-blue p-5 ">
      <Link to="about">
        <h1 className="hover:text-peche hover:tracking-widest cursor-pointer">
          {" "}
          About{" "}
        </h1>
      </Link>
      <Link to="projects">
        <h1 className="hover:text-peche hover:tracking-widest cursor-pointer">
          {" "}
          Projects{" "}
        </h1>
      </Link>
      <Link to="tools">
        <h1 className="hover:text-peche hover:tracking-widest cursor-pointer">
          {" "}
          Tools{" "}
        </h1>
      </Link>
      <Link to="contact">
        <h1 className="hover:text-peche hover:tracking-widest cursor-pointer">
          {" "}
          Contact{" "}
        </h1>
      </Link>
      <h1> - Created with love by Nawël -</h1>
    </div>
  );
};

export default Footer;
