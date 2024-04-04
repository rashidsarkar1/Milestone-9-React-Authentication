import Banar from "./Banar";

function About() {
  return (
    <div>
      <Banar
        midText="ABOUT US"
        endText="Start Planning Your Wedding"
        image="https://i.ibb.co/BfPL3F5/about-bg.jpg"
      />
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-7/12">
              <h2 className="text-3xl font-semibold mb-4 text-[#FF444A]">
                Looking for Perfection?
              </h2>
              <p className="mb-6 text-gray-600">
                WE ARE HERE TO HELP YOU ACHIEVE YOUR DREAM WEDDING!
              </p>
              <p className="mb-6 text-gray-600">
                At Wedding Planner Pro, we understand that your wedding day is a
                momentous occasion filled with dreams and hopes. Our mission is
                to transform those dreams into a beautiful reality. With a team
                of dedicated professionals, we take pride in curating every
                detail of your wedding, making it a truly unforgettable
                experience.
              </p>
              <p className="mb-6 text-gray-600">
                Let's work together to create a wedding that reflects your
                unique style and love story. Our experienced team is committed
                to bringing your vision to life, ensuring every aspect of your
                special day is perfect.
              </p>
              <p className="mb-6 text-gray-600">
                Whether you envision a romantic beachfront ceremony, a charming
                countryside wedding, or a grand city celebration, we have the
                expertise to turn your chosen destination into a breathtaking
                backdrop for your love story.
              </p>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                <img
                  alt="..."
                  src="https://i.ibb.co/nL2TBGV/pic59-free-img.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:my-12 ">
          <p className="md:text-lg font-bold text-[#252d41]">Meet Our</p>
          <h2 className="my-6 md:text-5xl text-2xl font-bold leading-[48px]">
            PLANNERS
          </h2>
          <p className=" md:py-0 md:pr-[50%] md:pl-0">
            Our team is dedicated to making your wedding dreams come true. With
            years of experience and a passion for creating magical moments, our
            planners are ready to bring your vision to life. We understand that
            your wedding day is one of the most important days of your life, and
            we're here to make it perfect in every way. Let us help you create
            memories that will last a lifetime.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden group">
            <img
              src="https://i.ibb.co/VHB5zdf/team-1.jpg"
              alt=""
              className="w-full h-[370px]   lg:h-[600px] transition-transform transform scale-100  group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 text-center text-white">
                <p className="text-xs font-semibold md:text-lg ">Julia Boyd</p>
                <p className="text-sm">Business Head</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://i.ibb.co/X8fj9wp/download.jpg"
              alt=""
              className="w-full h-[370px]   lg:h-[600px] transition-transform transform scale-100  group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 text-center text-white">
                <p className="text-xs font-semibold md:text-lg">Emma Grace</p>
                <p className="text-sm">Designer</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://i.ibb.co/12kq3WL/download.jpg"
              alt=""
              className="w-full h-[370px]   lg:h-[600px] transition-transform transform scale-100  group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 text-center text-white">
                <p className="text-xs font-semibold md:text-lg">Lily Rose</p>
                <p className="text-sm">Developer</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://i.ibb.co/Lg37hBd/download.jpg"
              alt=""
              className="w-full  h-[370px]  lg:h-[600px] transition-transform transform scale-100   group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 text-center text-white">
                <p className="text-xs font-semibold md:text-lg">Sarah Smith</p>
                <p className="text-sm">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
