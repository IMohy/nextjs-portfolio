import BannerLayout from "../shared/BannerLayout";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-full h-full px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Professional Summary</h1>
            </div>
            <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto text-center p-2">
              <span className="text-Snow sm:text-xl xl:text-xl font-bold">
                {" "}
                Front-End Web Developer with extensive 3 Years of experience in building modern, responsive, and
                user-centric web applications. Skilled in leveraging frameworks like React.js, Next.js, Vite.js, and
                TypeScript to craft intuitive interfaces.
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
