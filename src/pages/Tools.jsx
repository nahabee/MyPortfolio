const Tools = () => {
  return (
    <div
      className="bg-aboutline bg-cover h-screen w-screen border-blue bg-back"
      name="tools"
    >
      <h1 className="text-blue text-9xl font-title mx-8 sm:hidden">
        {" "}
        MY TOOLS.{" "}
      </h1>
      <div className="grid grid-cols-4 h-auto w-4/5 place-items-center sm:hidden">
        <div className="w-56 h-56 ">
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/react.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/js.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/sql.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/node js.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/tailwind.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/sass.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/canva.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/figma.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/vscode.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/postman.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/github.png"
          />
        </div>
        <div className="w-56 h-56">
          {" "}
          <img
            className="hover:scale-75 transition duration-700 cursor-pointer"
            src="./src/assets/npm.png"
          />
        </div>
      </div>

      {/* mobile only */}
      <div className=" text-blue flex flex-col items-center font-mtitle border-b h-screen md:hidden">
        <h1 className="text-center text-5xl mt-5"> TOOLS </h1>
        {/* grid tools dev */}
        <div className="grid grid-cols-2 w-2/3">
          <div>
            <img src="./src/assets/react.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/js.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/sql.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/node js.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/tailwind.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/sass.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/canva.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/figma.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/vscode.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/postman.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/github.png" />
          </div>
          <div>
            {" "}
            <img src="./src/assets/npm.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
