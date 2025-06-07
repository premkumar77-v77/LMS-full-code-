
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1542 940"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.23 }}
        >
          <defs>
            <linearGradient id="paint0_linear_1_100" x1="771" y1="0" x2="771" y2="940" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgb(138, 99, 255)" stopOpacity="0.7" />
              <stop offset="40.38%" stopColor="rgb(255, 255, 255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 700 Q200 500 771 500 A100 100 0 0 1 771 500 Q1342 500 1542 700 Z"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d="M1542 700 Q1342 500 771 500 A100 100 0 0 0 771 500 Q200 500 0 700 Z"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>SUPERVISED COURSES</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Lorem ipsum dolor sit amet
          <br />
          consectetur.
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full w-full sm:w-auto">
            Start learning Now
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/32?img=${i}`}
                  alt={`Student ${i}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">1k+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
