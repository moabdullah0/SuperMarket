const Featured = () => {
    return (
      <div className="bg-gray-200 text-center">
        <div>
          <h1 className="text-4xl font-serif text-center pt-20 text-gray-500">New Week Featured</h1>
          <p className="text-center mx-auto max-w-2xl pt-2 text-gray-500">
            long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start mt-10">
          <div className="relative m-2 group">
            <img src="https://0effortthemes.com/veggie/images/homepage/veg-big.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
            <div className="absolute top-[30%] left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
              <button className="bg-green-600 w-[40%] lg:w-[20%] px-4 py-5 rounded-lg text-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="m-2">
  <div className="relative group">
    <img src="https://0effortthemes.com/veggie/images/homepage/veg-big-2.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
    <div className="absolute top-[30%]">
    <p className=" left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
      
    </p>
    <button className="bg-green-600 w-56 lg:w-[20%] px-2 py-2 rounded-lg text-lg text-white font-bold">
        Read More
      </button>
    </div>
  </div>
  <div className="relative mt-2 group">
    <img src="https://0effortthemes.com/veggie/images/homepage/veg-big-3.jpg" alt="" className="w-full h-full rounded-xl transition duration-300 ease-in-out transform group-hover:scale-110"/>
    <div className="absolute top-[30%]">
    <p className=" left-0 text-white font-bold p-2 text-5xl">Fresh vegetables 30% off 
      
    </p>
    <button className="bg-green-600 w-56 lg:w-[20%] px-2 py-2 rounded-lg text-lg text-white font-bold">
        Read More
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    )
  }
  
  export default Featured
  