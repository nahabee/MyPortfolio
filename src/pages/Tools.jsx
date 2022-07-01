import dataTools from "../dataTools";

const Tools = () => {
  return (
    <div
      className="bg-aboutline bg-cover h-screen w-screen border-blue bg-back "
      name="tools"
    >
      <h1 className="text-blue text-9xl font-title mx-8 sm:hidden m:text-7xl">
        {" "}
        MY TOOLS.{" "}
      </h1>
      <div className="grid grid-cols-4 h-auto w-4/5 place-items-center sm:hidden  ">
        {dataTools &&
          dataTools.map(({ img }, index) => (
            <div className="w-56 h-56 ">
              <img
                className="hover:scale-75 transition duration-700 cursor-pointer"
                src={img}
                key={index}
              />
            </div>
          ))}
      </div>

      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle border-b h-screen md:hidden m:hidden">
        <h1 className="text-center text-5xl mt-5"> TOOLS </h1>
        {/* grid tools dev */}
        <div className="grid grid-cols-3 w-2/3 mt-20 sm:w-4/5 ">
          {dataTools &&
            dataTools.map(({ img }, index) => (
              <div>
                <img src={img} key={index} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
