import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex font-body text-blue  p-5 items-end justify-end ">
      <Link smooth="true" duration="700" to="/">
        <h1 className="hover:text-peche hover:tracking-widest cursor-pointer">
          {" "}
          Back to top ↑{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Footer;
