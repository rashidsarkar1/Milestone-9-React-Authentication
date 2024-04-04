import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Banar({ topText, midText, endText, optionalText, image }) {
  console.log(image);
  const backgroundImageStyle = {
    backgroundImage: `url('${image}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="relative">
      <div
        style={backgroundImageStyle}
        className={`relative min-h-screen bg-[url('${image}')] bg-center bg-no-repeat bg-cover`}
        // className={`relative min-h-screen bg-[url(image/weeding-bg.jpg')] bg-center bg-no-repeat bg-cover`}
      ></div>

      <div className=" bg-[#00000077] absolute top-0 left-0 w-full h-full transition-all duration-300 rounded-none "></div>
      <div className="absolute w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 md:pt-0 pt-14 top-1/2 left-1/2">
        <div className="flex justify-center text-center">
          <img
            data-aos="zoom-in-down"
            className=""
            src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic10-free-img.png"
            alt=""
          />
        </div>
        <p data-aos="fade-down-right" className="text-2xl">
          {optionalText}
        </p>
        <p data-aos="fade-right" className="text-lg font-bold leading-7">
          {topText}
        </p>
        <h1
          data-aos="fade-up"
          className="mb-4 uppercase lg:text-8xl md:text-6xl text-5xl  md:leading-[140px] font-bold"
        >
          {midText}
        </h1>
        <p className="text-3xl leading-10">{endText}</p>
      </div>
      {/* <img src={image} alt="" /> */}
    </div>
  );
}

export default Banar;
