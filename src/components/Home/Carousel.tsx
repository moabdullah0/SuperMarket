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
                    <div className="absolute top-[30%] md:top-[35%] lg:top-[30%] w-[100%] md:w-[70%] lg:w-[100%]">
                      <h5 className="text-2xl">
                        {mode == "Eng" ? carousel.title : carousel.titleArabic}
                      </h5>
                      <p className="w-[80%] lg:w-[30%]">
                        {mode == "Eng"
                          ? carousel.description
                          : carousel.descriprtionArabic}
                      </p>
                    </div>

                    <button
                      className={` ${
                        mode == "Eng"
                          ? "absolute top-[60%] lg:top-[52%] left-8  lg:left-36"
                          : "absolute top-[78%] lg:top-[55%] md:top-[55%]  right-12 lg:right-36"
                      } bg-green-600 w-[50%] lg:w-[15%] md:w-[30%] h-[8%] rounded-xl `}
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
