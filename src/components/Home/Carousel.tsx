import { TECarousel, TECarouselItem } from "tw-elements-react";
import { CarouselItems } from "../../data/CarouselItems";
import { useGlobalContext } from "../../context/language";

export default function Carousel(): JSX.Element {
  const { mode } = useGlobalContext();
  const imageHeight = "h-[80vh]";
  return (
    <>
      <div>
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
                  className={`block w-full ${imageHeight} bg-cover bg-center `}
                  style={{
                    backgroundImage: `url(${carousel.img})`,
                  }}
                >
                  <div
                    className={`relative px-10 lg:px-36 h-[100%] w-[100%]  text-gray-200 font-bold md:block  ${
                      mode == "Eng"
                        ? "bg-gradient-to-tr from-black"
                        : "bg-gradient-to-tl from-black"
                    } `}
                  >
                    <h5 className="text-xl absolute top-[10%]">
                      {mode == "Eng" ? carousel.title : carousel.titleArabic}
                    </h5>
                    <p className="absolute top-[15%] lg:w-[30%]">
                      {mode == "Eng"
                        ? carousel.description
                        : carousel.descriprtionArabic}
                    </p>
                    <button
                      className={`${
                        mode == "Eng"
                          ? "absolute top-[50%] lg:top-[35%] "
                          : "absolute top-[77%] lg:top-[60%]"
                      } bg-green-600 w-[50%] lg:w-[10%] h-[8%] rounded-lg `}
                    >
                      {mode == "Eng" ? "Lets Go" : "هيا بنا لنبدا رحلة التسوق"}
                    </button>
                  </div>
                </div>
              </TECarouselItem>
            ))}
          </div>
        </TECarousel>
      </div>
    </>
  );
}
