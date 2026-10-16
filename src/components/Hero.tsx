import Logo from "../assets/banner-stack.png";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-4 container mx-auto py-10 lg:py-20 px-4 lg:px-0">
      <div className="text-center lg:text-left">
        <h1 className="font-extrabold text-4xl lg:text-6xl">
          Build Your Ideal
        </h1>

        <h1 className="font-extrabold text-4xl lg:text-6xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Development Stack
        </h1>

        <div className="py-4 w-full lg:w-142.75">
          <p>Explore frontend, backend, database, and tooling options,</p>
          <p>compare them side by side, and put together the stack that fits</p>
          <p>your next project.</p>
        </div>

        <div className="flex gap-4 mt-4 justify-center lg:justify-start">
          <h1 className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white w-44.5 h-10 rounded-[10px] flex items-center justify-center">
            Explore Technologies
          </h1>

          <h1 className="bg-white text-black border border-gray-200 w-44.5 h-10 rounded-[10px] flex items-center justify-center">
            Learn More
          </h1>
        </div>
      </div>

      <div>
        <img src={Logo} alt="Logo" className="w-72 lg:w-96" />
      </div>
    </div>
  );
}

export default Hero;
