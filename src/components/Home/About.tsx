const About = () => {
  return (
    <div className="bg-gray-200 flex flex-col lg:flex-row items-center justify-center  font-serif">
      <img
        src="https://0effortthemes.com/veggie/images/homepage/small-text-baner.jpg"
        className="mx-auto lg:w-[20%] sm:w-[80%] my-5"
        alt="Veggie Banner"
      />
      <div className="text-center lg:text-left lg:w-[50%] px-5">
        <h1 className="text-4xl font-bold">About veggie super market</h1>
        <p className="mt-5">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page Many desktop publishing packages and web
        </p>
        <button className="bg-green-600 px-10 py-3 rounded-lg text-white mt-9">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
