import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

function Card({ serviceData }) {
  const { name, description, short_description, price, image, id } =
    serviceData;

  return (
    <>
      <div className="block bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center">
          <img className="rounded-t-lg md:h-[275px] " src={image} alt="image" />
        </div>

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-700 dark:text-gray-300">
            {name}
          </h5>
          <p className="mb-2 text-base text-gray-600 dark:text-gray-400">
            {short_description}
          </p>
          <p className="mb-4 text-base font-semibold text-pink-500">
            Price: {price}
          </p>
          <Link to={`/servicesDetails/${id}`}>
            <button
              type="button"
              className="inline-block rounded bg-pink-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
