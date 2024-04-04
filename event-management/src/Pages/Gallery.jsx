import SectionTitle from "../Components/SectionTitle";

function Gallery() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl">
      <div className="md:my-12">
        <p className=" md:text-lg  font-bold text-[#252d41] ">
          Ratione Molestiae Exercit
        </p>
        <h2 className="md:text-5xl text-2xl font-bold leading-[48px]">
          OUR GALLERY
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/12665354/pexels-photo-12665354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/3014859/pexels-photo-3014859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/3397026/pexels-photo-3397026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/3263714/pexels-photo-3263714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
