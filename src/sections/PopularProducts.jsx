import { products } from "../assets/data";
import PopularProductCard from "../components/PopularProductCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 px-10 py-20">
      <div className="flex flex-col justify-start gap-5 px-7">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-purple-900">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-12 ${
              isVisible ? "animate__animated animate__fadeIn animate__slow" : ""
            }`}
          >
            {products.map((product, index) => (
              <PopularProductCard
                key={product.name}
                {...product}
                isLast={index === products.length - 1}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default PopularProducts;
