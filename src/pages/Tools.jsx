import dataTools from "../dataTools";

const Tools = () => {
  return (
    <div
      className="xl:bg-aboutline bg-cover bg-left h-fit min-h-screen w-screen border-blue bg-back "
      name="tools"
    >
      <h1 className="text-blue text-9xl font-title ml-12 sm:hidden uppercase ">
        {" "}
        Mes outils.{" "}
      </h1>
      <div className="grid grid-cols-4 h-auto w-4/5 place-items-left sm:hidden  ">
        {dataTools &&
          dataTools.map(({ img }, index) => (
            <div className="w-52 h-52 " key={index}>
              <img
                className="hover:scale-75 transition duration-700 cursor-pointer"
                src={img}
              />
            </div>
          ))}
      </div>

      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle border-b h-screen md:hidden m:hidden">
        <h1 className="text-center text-5xl mt-5"> OUTILS </h1>
        {/* grid tools dev */}
        <div className="grid grid-cols-3 sm:w-80 mt-20">
          {dataTools &&
            dataTools.map(({ img }, index) => (
              <div key={index}>
                <img src={img} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
