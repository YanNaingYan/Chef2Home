import { useEffect, useState } from "react";
import "../../style/home.css";
import img1 from "../../../public/dinnerDate.png"
import img2 from "../../../public/family.png"
import img3 from "../../../public/friends.png"
import hero from "../../../public/banner.png"
import { useNavigate } from "react-router-dom";



const carouselSlides = [
  {
    image:
      img1,
    alt: "Anniversary & Intimate Dinners - Private romantic dinner at home",
    tag: "Intimate Moments",
    title: "Anniversary & Intimate Dinners",
    description:
      "Curated romantic culinary journeys celebrated in the sanctuary and elegance of your own home.",
    button: "Reserve an intimate dining",
  },
  {
    image:
      img2,
    alt: "Family Gatherings & Milestones - Multi-generational dining at home",
    tag: "Warm Traditions",
    title: "Family Gatherings & Milestones",
    description:
      "Multi-generational feasts crafted with heartfelt warmth, bringing loved ones together around unforgettable dishes.",
    button: "Plan family celebration",
  },
  {
    image:
      img3,
    alt: "Evenings with Friends & Soirées - Lively dinner party at home",
    tag: "Celebrations",
    title: "Evenings with Friends & Soirées",
    description:
      "Lively private dinner parties featuring bespoke multi-course tasting menus, wine pairings, and vibrant conversations.",
    button: "Host a dinner party",
  },
];

const Home = () => {
 const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
const handleNavigate = (path) => {
  console.log("path",path)
  navigate(path);}
  // Auto change carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  return (
    <div className="bg-[#FAF8F5] text-brand-dark font-sans-ui antialiased min-h-screen flex flex-col justify-between overflow-x-hidden">
     
   

      {/* =========================
          HERO
      ========================== */}
      <main className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[600px] lg:min-h-[750px] 2xl:min-h-[850px] border-b border-brand-border/40">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
          <img
            alt="Professional personal chef plating dishes with smiling guests in a luxury modern kitchen"
            className="w-full h-full object-cover object-center 2xl:object-[center_35%] scale-100 transition-all duration-700"
            src={hero}
          />

          <div className="absolute inset-0 hero-photo-scrim" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-20 w-full flex justify-center">
          <div className="max-w-2xl w-full text-center flex flex-col items-center bg-[#FAF8F5]/85 backdrop-blur-md p-6 sm:p-10 lg:p-12 rounded-3xl border border-brand-border/80 shadow-[0_20px_50px_rgba(28,25,23,0.15)]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-brand-border/80 text-[11px] font-semibold tracking-wider text-brand-charcoal uppercase mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ochre animate-pulse" />

              <span>Bangkok On-Demand Culinary Platform</span>
            </div>

            {/* Heading */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] font-bold text-brand-dark tracking-tight mb-4">
              <span className="block">Chef2Home</span>

              <span className="block italic font-editorial text-xl sm:text-2xl lg:text-3xl text-brand-charcoal font-medium mt-2 leading-snug">
                “Your Meal. Your Place. Your Personal Chef.”
              </span>
            </h1>

            <p className="font-sans-ui text-brand-muted text-xs sm:text-sm max-w-lg mb-7 leading-relaxed">
              Bringing bespoke culinary artistry and private dining experiences
              directly to your residence, villa, or condo.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
              <button type="button"
              onClick={() => handleNavigate("/bookings")}
              
                className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-brand-dark hover:bg-black text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none"
                href="/booking#booking-planner"
              >
                Book in here!
              </button>

              <button
                onClick={() => window.alert("Chef registration is coming soon!")}
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-brand-dark border border-brand-border text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                href="/welcome#guided-steps"
              >
                Register as a chef
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* =========================
          ABOUT US
      ========================== */}
      <section
        className="relative bg-[#FAF8F5] py-20 lg:py-28 border-t border-brand-border/60"
        id="about-us"
      >
        <div className="w-full mx-auto">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 px-6 sm:px-8 lg:px-12">

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-brand-border/80 text-[11px] font-medium tracking-[0.25em] text-brand-ochre uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ochre" />

              <span>OUR ESSENCE & PURPOSE</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-brand-dark tracking-tight mb-6">
              About Us
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-ochre/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ochre/60" />
              <span className="w-8 h-[1px] bg-brand-ochre/40" />
            </div>

            <p className="font-editorial italic text-xl sm:text-2xl lg:text-[26px] leading-[1.8] text-brand-charcoal font-normal max-w-2xl mx-auto opacity-90">
              “Chef2Home began on a single purpose which is that we want people
              to get their meaningful and enjoyable moments with their family
              through delicious foods at their place.”
            </p>
          </div>

          {/* =========================
              CAROUSEL
          ========================== */}
          <div className="relative w-full max-w-[1920px] mx-auto">
            <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[2.4/1] overflow-hidden shadow-2xl border-t border-b border-brand-border/80 bg-stone-900 group">

              {carouselSlides.map((slide, index) => {
                const isActive = index === currentSlide;

                return (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
                      isActive
                        ? "opacity-100 z-10"
                        : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <img
                      alt={slide.alt}
                      src={slide.image}
                      className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                        isActive ? "scale-100" : "scale-105"
                      } group-hover:scale-105`}
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    {/* Tag */}
                    <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-ochre" />

                        {slide.tag}
                      </span>
                    </div>

                    {/* Caption */}
                    <div
                      className={`absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white max-w-xl transition-all duration-1000 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 tracking-tight">
                        {slide.title}
                      </h3>

                      <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed mb-4">
                        {slide.description}
                      </p>

                      <div
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-ochre hover:text-white transition-colors uppercase tracking-wider"
                        href="/booking#booking-planner"
                      >
                        <span>{slide.button}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Previous */}
              <button
                aria-label="Previous Slide"
                onClick={previousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                aria-label="Next Slide"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-10 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-700 ease-out ${
                      currentSlide === index
                        ? "w-7 bg-brand-ochre"
                        : "w-2 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="w-full border-t border-brand-border/60 bg-[#FAF8F5]/80 py-6 px-6 sm:px-8 text-center text-xs text-brand-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">

          <p>© 2026 Chef2Home Thailand Ltd. All rights reserved.</p>

          <div className="flex items-center space-x-4 text-[11px]">
            <a
              className="hover:text-brand-dark transition-colors"
              href="#"
            >
              Privacy Policy
            </a>

            <span>•</span>

            <a
              className="hover:text-brand-dark transition-colors"
              href="#"
            >
              Terms of Service
            </a>

            <span>•</span>

            <a
              className="hover:text-brand-dark transition-colors"
              href="#"
            >
              Hygiene Standards
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;