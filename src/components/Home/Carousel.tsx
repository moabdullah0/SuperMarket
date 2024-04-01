import { TECarousel, TECarouselItem } from "tw-elements-react";
import { CarouselItems } from "../../data/CarouselItems";

export default function Carousel(): JSX.Element {
  const imageHeight = "h-[80vh]";
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        ride="carousel"
        className="relative top-[20%]"
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {CarouselItems.map((carousel, index) => (
            <TECarouselItem
              key={index}
              itemID={carousel.itemId}
              className={`relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${imageHeight}`}
            >
              <div
                className={`block w-full ${imageHeight} bg-cover bg-center text-left`}
                style={{
                  backgroundImage: `url(${carousel.img})`,
                }}
              >
                <div className="relative px-10 lg:px-36 h-[100%] w-[100%]  text-gray-200 font-bold md:block bg-gradient-to-tr from-black  ">
                  <h5 className="text-xl absolute top-[20%]">
                    {carousel.title}
                  </h5>
                  <p className="absolute top-[25%] lg:w-[30%]">
                    {carousel.description}
                  </p>
                  <button className="absolute top-[40%] bg-green-600 w-[30%] lg:w-[10%] h-[8%] rounded-lg ">
                    Let's Go
                  </button>
                </div>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
}
