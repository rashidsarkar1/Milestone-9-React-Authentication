import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServiseDataContext } from "../../MainLayout/MainLayout";
import About from "../../Components/About";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceDetails() {
  const serviceData = useContext(ServiseDataContext);
  const { idx } = useParams();
  const idInt = parseInt(idx);
  // const singleData = serviceData.find((item) => {
  //   item.id == idx;
  // });
  const singleData = serviceData.find((item) => item.id === idInt);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <About singleData={singleData}></About> */}
      <div className="py-10 pt-[50px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div data-aos="zoom-in" className="w-full md:w-1/2">
              <img
                src={singleData?.image}
                alt={singleData?.title}
                className="w-full rounded-lg"
              />
            </div>
            <div data-aos="zoom-in" className="w-full p-8 md:w-1/2">
              <h2 className="text-3xl font-semibold">{singleData?.title}</h2>
              <p className="text-xl font-bold text-pink-600">
                {singleData?.price}
              </p>
              <p className="mt-4 text-gray-700">
                {singleData?.short_description}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Service Details</h3>
                <p className="mt-4 text-gray-700">
                  {singleData?.long_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
