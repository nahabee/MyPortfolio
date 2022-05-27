import CarouselHome from "../components/CarouselHome";
import "./Styles.css";

const Home = () => {
  return (
    <div className="bg-grey h-full w-full ">
      <div className=" grid grid-cols-3 font-title">
        <h1 className="title text-8xl ml-3.5">WELCOME</h1>
        <h1 className="title text-6xl flex justify-center mt-20 ">to my</h1>
        <h1 className="title text-8xl mt-40">portfolio .</h1>
      </div>
      <CarouselHome />
      <div className="body flex flex-col bg-brown">
        <h2 className="text-4xl ml-3.5 flex justify-center font-thin tracking-widest text-white p-10 ">
          {" "}
          Nawël, junior web developer.
        </h2>
      </div>
      <div className="body flex flex-column w-80 h-auto rounded-2xl ">
        <h3 className=" text-2xl font-thin tracking-widest text-white p-5">
          Hello, my name is Nawël i'm web developer and this is my portfolio.
          It's a place to share with you my universe, who i am and what i love !
          Hope you'll enjoy your visit here! And for every need, contact me.i'm
          web developer and this is my portfolio. It's a place to share with you
          my universe, who i am and what i love ! Hope you'll enjoy your visit
          here! And for every need, contact me. my name is Nawël i'm web
          developer and this is my portfolio. It's a place to share with you my
          universe, who i am and what i love ! Hope you'll enjoy your visit
          here! And for every need, contact me.i'm web developer and this is my
          portfolio. It's a place to share with you my universe, who i am and
          what i love ! Hope you'll enjoy your visit here! And for every need,
          contact me.
        </h3>
      </div>
    </div>
  );
};

export default Home;
