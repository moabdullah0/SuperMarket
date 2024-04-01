const Services = () => {
  return (
    <div className=" bg-custom-color py-5 px-2">
      <h1 className="text-4xl font-serif text-center pt-20">Services</h1>
      <p className="text-center mx-auto max-w-2xl pt-2">
        long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-col-1 px-20 pt-20">
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          className="py-5"
        />
        <img src="https://0effortthemes.com/veggie/images/homepage/text-block1.png" />
        <img
          src="https://0effortthemes.com/veggie/images/homepage/text-block1.png"
          className="py-5"
        />
        <img src="https://0effortthemes.com/veggie/images/homepage/text-block1.png" />
      </div>
      <div className="flex justify-center">
        <button className="bg-green-600 px-10 py-3 rounded-lg text-white mt-9">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Services;
