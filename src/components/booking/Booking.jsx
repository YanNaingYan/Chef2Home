import { useEffect, useMemo, useState } from "react";
import "../../style/booking.css";
import { ROSTER_CHEFS } from "./chefData";
import Receipt from "./Receipt";

const tierOptions = [
  {
    id: "standard",
    title: "Standard Experience",
    price: "฿15,99 – 2,399",
    guests: "Best for 2 to 5 guests",
    description:
      "Professional everyday dining with fresh market ingredients, warm comfort sharing plates, and complete kitchen clean-up.",
    service: "Full Service Bistro",
    icon: "restaurant",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhYKWiuxMzwQYphvK4W1gEw-4fHS4yywgtgFlrv8EUzk_FbLbEMVJIw3bKDZb5uzpMwgU6Zr-sS8OGVEspwSb-rcjcAH_xkL6cX-fxve-Gb0ldbF_aTDMr5ThjBw7i3F60S6zqedqvfm3qdtZMFG3ZFxdqHagbUCPc9IAxNtTSwvpc66Bl2WwgQ1mZdT-5vMOfv5xZtX8F_SgCowOu4NJbCj6t05jjBx7aroWGT6frZpCfgJekSOI8",
  },
  {
    id: "premium",
    title: "Premium Experience",
    price: "฿3,999 – 19,999",
    guests: "Range: 2 to 5 guests",
    description:
      "Fine dining multi-course degustation from Michelin-credentialed chefs featuring imported premium cuts, seafood, & refined plating.",
    service: "Degustation",
    icon: "award_star",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA41TjttnYr5fXcT9UTQHeFTk4VpbdcHqwx4fXjCuYWoRdsirkEtkEVASp4TnMI8QbIC_UvxnM81V7mEHcfOvskuN2_ygtePJyOl2to8VzZNeiWwyIkriFmISjwwXs8Yde-EhX8X3sVprvYnu3n05wFvyeZ6YmU4QCMGqmZDr6F3kn0TzE95-M0Al7zdI6evdaXwhh3jiztTmHq_hgn1kz8xECovD-YFUBd9AdInOvxcSkLYm9BdlHV",
  },
  {
    id: "special",
    title: "Home Restaurant Experience",
    price: "฿1,499 – 9,999+",
    guests: "9+ guests & grand banquets",
    description:
      "Lavish celebrations, multi-chef staging, full table service, certified sommelier pairings, and custom menu scripts.",
    service: "Grand Production",
    icon: "workspace_premium",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKubx7L-5911pXshpMIsWAlroz_FAXHKp4CVucI1C0OyE_rbaUI5wLi_w-8FD5V3YVsYbIT5JujCd0kaszuxJxSrs2NW0dJoOHpvD-xnsaLkjgQuvN-QY5w4sqhjWtbRflLj27nadtdckrjfDqo4Mhzsb2lhffCdXICVuP-0X171vgX_6UnuGMY5CQ3QwFj1pRTYoPXKSTF0QyzMQLGcWMmBkTuZWqHA9CExsyqq5q0_RLHLS6b8Q4",
  },
];

const eventOptions = [
  {
    id: "celebration",
    title: "Private Celebration",
    label: "Family Feast",
    icon: "family_restroom",
    description:
      "Vibrant and relaxed warmth tailored for family reunions, birthdays, and anniversaries.",
    tags: ["Family Dinner", "Holiday Feast", "Birthdays"],
    footer: "Selected",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VAVn93yv3z0iLpfrYIwvo_mJJbtkQoGjlMpF4c4xEns_i03QVR0yh5PQA_kXTkNnvRm_126aG-c4VNDwwq-hKTQz4UNH0xNYuFF9ATKtjDs9N4VfNYFuIUyDHE0wxDSvV5DBtbC2G8PdPdKIX1J09nyQXzGFzlfXpJL218iBqj4Alkc0yJ1vQkyliGn1XdLxZWZ3Y27_Lra-hwXNgbxM-F0wcWYypN6uowe-XH3XpTH1pIMFZ_2R6OBg",
  },
  {
    id: "romance",
    title: "Romantic Moments",
    label: "Romance",
    icon: "favorite",
    description:
      "Quiet poetic pacing, discreet culinary presence, and heightened romance.",
    tags: ["Proposals", "Couple Dinner", "Anniversaries"],
    footer: "Curated Setting",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1W7ZGdL2nFfbiCKhIYwFYaxW-zR1qwg5GWW8cGmk00zHUmWYxWvQgbNaBv6xsaQyvzpJdWTMH92AQg8rMC1-FgTA6UwJDkAkPxtbxvmSpITWrrWts6xMctEZXHztm6HVQixcFULgIE2vN_oOcu-JbkxzfyhPJzibnJzcvgFt1D1FC6KgS89-LXLVauvMPOzdGkb1wEUvoHIoC2_xEKyor2GSrYBNi0uTf_HD3m6CnEDX_sfvtRd9N2j5OY",
  },
  {
    id: "party",
    title: "Party Gatherings",
    label: "Social & Corporate",
    icon: "sailing",
    description:
      "High-energy presentation, canapés, synchronized plating, and multi-course dining.",
    tags: ["Executive Office", "Yacht Parties", "Bespoke Gala"],
    footer: "Custom Staging",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UFzRVUZEAuLmr9QdQl4PFmApR_OABxYtVkLNQ1OYGo6HXqLkKzLYLFYjA7FLt4u8GBZxu82PKDzUOne_PZBiQh04KICbk3L2pky2MotemavjVMkKQbhqWKfmkTcJaWm472E1vHAIbiXW-HH9eA4C1mm15tfgP-p6NUKTthGd2hQDRACr04kmf1H6V1DHHXyVjzW2e3bNsQmhY2_B8MyHTEZRRCqBaHsbune803ACtjDUWZL7vdUQaM9pw",
  },
];

const cuisineOptions = [
  { id: "french", label: "Modern French", icon: "dinner_dining" },
  { id: "japanese", label: "Japanese Omakase", icon: "set_meal" },
  { id: "thai", label: "Thai Royal & Heritage", icon: "ramen_dining" },
  { id: "italian", label: "Artisanal Italian", icon: "local_pizza" },
  { id: "nordic", label: "Nordic & Foraged", icon: "eco" },
];

const venueOptions = [
  "Apartment / Condo",
  "Detached Villa",
  "Townhouse",
  "Penthouse Balcony",
  "Private Yacht",
];


const Booking = () => {
  const TOTAL_STEPS = 4;

  const [currentStep, setCurrentStep] = useState(1);

  const [selectedTier, setSelectedTier] = useState("standard");
  const [selectedEvent, setSelectedEvent] = useState("celebration");

  const [selectedCuisines, setSelectedCuisines] = useState(
    new Set(["french", "japanese"])
  );

  const [wishlist, setWishlist] = useState(new Set());

  const [adultCount, setAdultCount] = useState(4);

  const [selectedVenue, setSelectedVenue] =
    useState("Apartment / Condo");

  const [availability, setAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const [selectedChef, setSelectedChef] = useState();

  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const [selectedStove, setSelectedStove] = useState("gas");
  const [selectedCutlery, setSelectedCutlery] = useState("chef");

  const [dietary, setDietary] = useState({
    glutenFree: false,
    nutAllergy: true,
    shellfish: false,
    halal: false,
  });

  const showToast = (message) => {
    setToast({
      visible: true,
      message,
    });

    setTimeout(() => {
      setToast({
        visible: false,
        message: "",
      });
    }, 4000);
  };

const goToStep = (step) => {
  if (step < 1 || step > 5) return;
  setCurrentStep(step);
};

const nextStep = () => {
  setCurrentStep((prev) => Math.min(prev + 1, 5));
};

const previousStep = () => {
  setCurrentStep((prev) => Math.max(prev - 1, 1));
};

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((previous) => {
      const next = new Set(previous);

      if (next.has(cuisine)) {
        next.delete(cuisine);
      } else {
        next.add(cuisine);
      }

      return next;
    });
  };

  const adjustCount = (delta) => {
    setAdultCount((current) =>
      Math.max(1, current + delta)
    );
  };

  const toggleWishlist = (chefId) => {
    setWishlist((previous) => {
      const next = new Set(previous);

      if (next.has(chefId)) {
        next.delete(chefId);
        showToast("Removed chef from favorites.");
      } else {
        next.add(chefId);
        showToast("Added chef to your saved list!");
      }

      return next;
    });
  };

  const filteredChefs = useMemo(() => {
    let result = ROSTER_CHEFS.filter((chef) => {
      const matchTier = chef.tier === selectedTier;

      const matchEvent =
        chef.event === selectedEvent;

      const matchCuisine =
        selectedCuisines.size === 0 ||
        selectedCuisines.has(chef.cuisine);

      const matchAvailability =
        availability === "all" ||
        chef.daySlot === availability;

      return (
        (matchTier || matchEvent || matchCuisine) &&
        matchAvailability
      );
    });

    if (result.length === 0) {
      result = [...ROSTER_CHEFS];
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [
    selectedTier,
    selectedEvent,
    selectedCuisines,
    availability,
    sortBy,
  ]);

  const handleDietaryChange = (key) => {
    setDietary((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
const [chosenInfo, setChosenInfo] = useState(null);
 const handleSubmit = (e) => {
  e.preventDefault();

  const info = {
    tier: selectedTier,
    event: selectedEvent,
    adults: adultCount,
    venue: selectedVenue,
    cuisines: [...selectedCuisines],
    stove: selectedStove,
    cutlery: selectedCutlery,
    dietary,
  };

  console.log(info, "chosenInfo");

  setChosenInfo(info);

  nextStep();
};
const [chefInfo, setChefInfo] = useState(null);
const handleQuickBook = (chef) => {
    
    setChefInfo(chef);

  setCurrentStep(5);
};
useEffect(() => {
  console.log("chefInfo updated:", chefInfo);
}, [chefInfo]);
  const handleConfirmChef = () => {
    if (!selectedChef) {
      showToast("Please select a chef first.");
      return;
    }

    const total = adultCount * selectedChef.price;

    showToast(
      `Booking request sent for ${selectedChef.name}. Total: ฿${total.toLocaleString()}`
    );
  };

  return (
    <div className="w-full bg-[#FAF8F5] font-body text-brand-dark antialiased min-h-screen">
      <main className="w-full flex-1">
        <section
          id="booking-planner"
          className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 scroll-mt-24"
        >
          <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden relative border border-brand-border/70">
            {/* ================= HEADER ================= */}

            <div className="px-6 py-6 md:px-10 md:py-8 bg-brand-surface/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-brand-border/60">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-brand-ochre" />

                  <span className="text-xs uppercase tracking-widest text-brand-ochre font-semibold">
                    Custom Atelier Dispatch
                  </span>
                </div>

                <h1 className="font-headline text-2xl md:text-3xl text-brand-dark font-semibold">
                  Choose your price and events here!
                </h1>
              </div>

              {/* Step Indicators */}

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[
                    ["01", "Price range", 1],
                    ["02", "Events", 2],
                    ["03", "Information", 3],
                    ["04", "Chefs", 4],
                  ].map(([number, label, step], index) => (
                    <div
                      key={step}
                      className="flex items-center gap-1.5"
                    >
                      <button
                        type="button"
                        onClick={() => goToStep(step)}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all text-left ${
                          currentStep === step
                            ? "bg-brand-dark text-white"
                            : "bg-brand-surface text-brand-muted hover:bg-stone-200"
                        }`}
                      >
                        <span className="text-xs font-bold">
                          {number}
                        </span>

                        <span className="text-xs font-semibold hidden sm:inline">
                          {label}
                        </span>
                      </button>

                      {index < 3 && (
                        <div className="w-4 h-0.5 bg-brand-border" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1 pl-2 border-l border-brand-border/60">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={currentStep === 1}
                    className="w-8 h-8 rounded-full bg-brand-surface text-brand-muted flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-200 hover:text-brand-dark transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_back
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={currentStep === TOTAL_STEPS}
                    className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-ochre transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* ================= WIZARD CONTENT ================= */}

            <div className="p-6 md:p-10">
              {/* =====================================================
                  STEP 1
              ===================================================== */}

              {currentStep === 1 && (
                <div className="transition-opacity duration-300">
                  <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-1 font-semibold">
                      Step 01 of 04
                    </p>

                    <h2 className="font-headline text-2xl text-brand-dark font-semibold">
                      Select your Price Range and Standard
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {tierOptions.map((tier) => {
                      const isSelected =
                        selectedTier === tier.id;

                      return (
                        <div
                          key={tier.id}
                          onClick={() =>
                            setSelectedTier(tier.id)
                          }
                          className={`group relative cursor-pointer rounded-2xl overflow-hidden min-h-[460px] flex flex-col justify-between p-6 transition-all duration-500 ${
                            isSelected
                              ? "shadow-2xl ring-2 ring-brand-ochre"
                              : "shadow-md hover:shadow-2xl"
                          } bg-brand-surface`}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                            style={{
                              backgroundImage: `url("${tier.image}")`,
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />

                          <div className="relative z-10 w-full flex items-center justify-between">
                            <div
                              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center ${
                                tier.id === "premium"
                                  ? "bg-brand-ochre text-white border-2 border-[#FFDDB9]"
                                  : "bg-white/90 text-brand-ochre border border-brand-border/40"
                              }`}
                            >
                              <span className="material-symbols-outlined text-[24px]">
                                {tier.icon}
                              </span>
                            </div>

                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                isSelected
                                  ? "bg-brand-ochre text-white opacity-100"
                                  : "bg-white/80 text-brand-dark opacity-0"
                              }`}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                check
                              </span>
                            </div>
                          </div>

                          <div className="relative z-10 w-full mt-auto pt-6 text-white">
                            <h3 className="font-headline text-2xl font-bold leading-tight mb-2">
                              {tier.title}
                            </h3>

                            <div className="flex items-baseline gap-1.5 mb-2">
                              <span
                                className={`font-headline text-2xl font-bold ${
                                  tier.id === "premium"
                                    ? "text-[#FFDDB9]"
                                    : ""
                                }`}
                              >
                                {tier.price}
                              </span>

                              <span className="text-xs text-stone-300">
                                / person
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mb-3 text-[#FFDDB9] text-xs font-semibold">
                              <span className="material-symbols-outlined text-[16px]">
                                group
                              </span>

                              <span>{tier.guests}</span>
                            </div>

                            <p className="text-xs text-stone-300 line-clamp-3 mb-5 leading-relaxed">
                              {tier.description}
                            </p>

                            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                              <span className="uppercase tracking-wider text-stone-300">
                                {tier.service}
                              </span>

                              <span className="text-[#FFDDB9] font-semibold flex items-center gap-1">
                                Choose Tier
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-dark text-white text-xs uppercase tracking-wider font-semibold hover:bg-black transition-colors shadow-sm"
                    >
                      <span>Continue</span>

                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* =====================================================
                  STEP 2
              ===================================================== */}

              {currentStep === 2 && (
                <div className="transition-opacity duration-300">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-1 font-semibold">
                        Step 02 of 04
                      </p>

                      <h2 className="font-headline text-2xl text-brand-dark font-semibold">
                        Choose your event style & celebration
                      </h2>
                    </div>

                    <span className="text-brand-ochre text-xs italic hidden md:inline">
                      Chefs adapt their tempo and menu narrative to your vibe
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {eventOptions.map((event) => {
                      const isSelected =
                        selectedEvent === event.id;

                      return (
                        <div
                          key={event.id}
                          onClick={() =>
                            setSelectedEvent(event.id)
                          }
                          className={`group relative cursor-pointer rounded-2xl overflow-hidden min-h-[460px] flex flex-col justify-between p-6 transition-all duration-500 ${
                            isSelected
                              ? "ring-2 ring-brand-ochre shadow-2xl"
                              : "shadow-md hover:shadow-2xl"
                          } bg-brand-surface`}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                            style={{
                              backgroundImage: `url("${event.image}")`,
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />

                          <div className="relative z-10 w-full flex items-center justify-between">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-md text-brand-ochre border border-white/20">
                              <span className="material-symbols-outlined text-[16px]">
                                {event.icon}
                              </span>

                              <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-dark">
                                {event.label}
                              </span>
                            </div>

                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                isSelected
                                  ? "bg-brand-ochre text-white opacity-100"
                                  : "bg-white/80 text-brand-dark opacity-0"
                              }`}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                check
                              </span>
                            </div>
                          </div>

                          <div className="relative z-10 w-full mt-auto pt-6 text-white">
                            <h3 className="font-headline text-2xl font-bold leading-tight mb-2">
                              {event.title}
                            </h3>

                            <p className="text-xs text-stone-300 leading-relaxed mb-4">
                              {event.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-5 text-[11px]">
                              {event.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 rounded-full bg-black/60 border border-white/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                              <span className="uppercase tracking-wider text-[#FFDDB9]">
                                {isSelected
                                  ? "Selected"
                                  : event.footer}
                              </span>

                              <span className="text-[#FFDDB9] font-semibold">
                                {isSelected
                                  ? "Selected ✓"
                                  : "Choose Occasion"}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-surface text-brand-dark text-xs uppercase tracking-wider font-semibold hover:bg-stone-200"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>

                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-dark text-white text-xs uppercase tracking-wider font-semibold hover:bg-black"
                    >
                      <span>Continue</span>

                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* =====================================================
                  STEP 3
              ===================================================== */}

              {currentStep === 3 && (
                <div className="transition-opacity duration-300">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-1 font-semibold">
                        Step 03 of 04
                      </p>

                      <h2 className="font-headline text-2xl text-brand-dark font-semibold">
                        Detailed Information & Logistics
                      </h2>
                    </div>

                    <span className="text-brand-ochre text-xs italic hidden md:inline">
                      Instant match against chef equipment and radius
                    </span>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Host & Party Size */}

                    <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                      <h3 className="font-headline text-lg text-brand-dark mb-4 flex items-center gap-2 font-semibold">
                        <span className="material-symbols-outlined text-brand-ochre text-[20px]">
                          badge
                        </span>

                        <span>Host & Party Size</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-1 font-semibold">
                            Host Full Name
                          </label>

                          <input
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white text-xs text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-ochre"
                            placeholder="Your full name"
                            type="text"
                            defaultValue="Khun Narongrit S."
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-1 font-semibold">
                            Email Address
                          </label>

                          <input
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white text-xs text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-ochre"
                            placeholder="you@example.com"
                            type="email"
                            defaultValue="narongrit@bangkokluxury.th"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-1 font-semibold">
                            Phone (Thailand)
                          </label>

                          <input
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white text-xs text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-ochre"
                            placeholder="+66 8X XXX XXXX"
                            type="tel"
                            defaultValue="+66 81 842 9011"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-1 font-semibold">
                            Party Size (Adults)
                          </label>

                          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white">
                            <span className="text-xs text-brand-muted">
                              Adults
                            </span>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  adjustCount(-1)
                                }
                                className="w-6 h-6 rounded-md bg-brand-surface text-brand-dark flex items-center justify-center font-bold text-xs"
                              >
                                -
                              </button>

                              <span className="text-xs font-bold text-brand-dark w-4 text-center">
                                {adultCount}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  adjustCount(1)
                                }
                                className="w-6 h-6 rounded-md bg-brand-surface text-brand-dark flex items-center justify-center font-bold text-xs"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location */}

                    <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                      <h3 className="font-headline text-lg text-brand-dark mb-4 flex items-center gap-2 font-semibold">
                        <span className="material-symbols-outlined text-brand-ochre text-[20px]">
                          pin_drop
                        </span>

                        <span>Location & Venue Type</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-1 font-semibold">
                            Bangkok Neighborhood
                          </label>

                          <select className="w-full px-3.5 py-2.5 rounded-xl bg-white text-xs font-semibold text-brand-dark focus:outline-none cursor-pointer">
                            <option value="thong-lo">
                              Sukhumvit 55 (Thong Lo & Ekkamai)
                            </option>

                            <option>
                              Sathorn & Silom
                            </option>

                            <option>
                              Chao Phraya Riverside
                            </option>

                            <option>
                              Sukhumvit Prime (Asok – Phrom Phong)
                            </option>

                            <option>
                              Ari & Dusit
                            </option>
                          </select>

                          <p className="text-[11px] text-brand-muted mt-1.5">
                            Chef travel kit is automatically configured.
                          </p>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-2 font-semibold">
                            Type of Place (Select Venue)
                          </label>

                          <div className="flex flex-wrap gap-2">
                            {venueOptions.map((venue) => (
                              <button
                                key={venue}
                                type="button"
                                onClick={() =>
                                  setSelectedVenue(venue)
                                }
                                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                  selectedVenue === venue
                                    ? "bg-brand-dark text-white"
                                    : "bg-white text-brand-dark hover:bg-brand-surface"
                                }`}
                              >
                                {venue}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cuisine */}

                    <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                      <h3 className="font-headline text-lg text-brand-dark mb-4 flex items-center gap-2 font-semibold">
                        <span className="material-symbols-outlined text-brand-ochre text-[20px]">
                          skillet
                        </span>

                        <span>
                          Cuisine Traditions (Multi-Select)
                        </span>
                      </h3>

                      <div className="flex flex-wrap gap-2.5">
                        {cuisineOptions.map((cuisine) => {
                          const selected =
                            selectedCuisines.has(cuisine.id);

                          return (
                            <button
                              key={cuisine.id}
                              type="button"
                              onClick={() =>
                                toggleCuisine(cuisine.id)
                              }
                              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                selected
                                  ? "bg-brand-dark text-white"
                                  : "bg-white text-brand-dark hover:bg-brand-surface"
                              }`}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                {cuisine.icon}
                              </span>

                              {cuisine.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Kitchen + Dietary */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                        <h3 className="font-headline text-base text-brand-dark mb-3 flex items-center gap-2 font-semibold">
                          <span className="material-symbols-outlined text-brand-ochre text-[20px]">
                            countertops
                          </span>

                          <span>
                            Kitchen Cooktop & Tableware
                          </span>
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-2 font-semibold">
                              Cooktop Available
                            </label>

                            <div className="flex gap-2">
                              <label className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white cursor-pointer text-xs">
                                <input
                                  checked={
                                    selectedStove === "gas"
                                  }
                                  onChange={() =>
                                    setSelectedStove("gas")
                                  }
                                  className="accent-brand-ochre"
                                  name="stove"
                                  type="radio"
                                />

                                <span>Gas Stove</span>
                              </label>

                              <label className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white cursor-pointer text-xs">
                                <input
                                  checked={
                                    selectedStove ===
                                    "induction"
                                  }
                                  onChange={() =>
                                    setSelectedStove(
                                      "induction"
                                    )
                                  }
                                  className="accent-brand-ochre"
                                  name="stove"
                                  type="radio"
                                />

                                <span>
                                  Induction / Electric
                                </span>
                              </label>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] text-brand-muted uppercase tracking-wider mb-2 font-semibold">
                              Ceramics & Dinnerware
                            </label>

                            <div className="flex gap-2">
                              <label className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white cursor-pointer text-xs">
                                <input
                                  checked={
                                    selectedCutlery ===
                                    "host"
                                  }
                                  onChange={() =>
                                    setSelectedCutlery(
                                      "host"
                                    )
                                  }
                                  className="accent-brand-ochre"
                                  name="cutlery"
                                  type="radio"
                                />

                                <span>Host Provides</span>
                              </label>

                              <label className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white cursor-pointer text-xs">
                                <input
                                  checked={
                                    selectedCutlery ===
                                    "chef"
                                  }
                                  onChange={() =>
                                    setSelectedCutlery(
                                      "chef"
                                    )
                                  }
                                  className="accent-brand-ochre"
                                  name="cutlery"
                                  type="radio"
                                />

                                <span>
                                  Chef Brings Artisanal Ceramics
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dietary */}

                      <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border/60">
                        <h3 className="font-headline text-base text-brand-dark mb-3 flex items-center gap-2 font-semibold">
                          <span className="material-symbols-outlined text-brand-ochre text-[20px]">
                            no_food
                          </span>

                          <span>Dietary Protocols</span>
                        </h3>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            ["glutenFree", "Gluten-Free"],
                            [
                              "nutAllergy",
                              "Nut Allergy (Strict)",
                            ],
                            [
                              "shellfish",
                              "Shellfish Allergy",
                            ],
                            [
                              "halal",
                              "Halal Certified Ingredients",
                            ],
                          ].map(([key, label]) => (
                            <label
                              key={key}
                              className="flex items-center gap-2 p-2 rounded-xl bg-white cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={dietary[key]}
                                onChange={() =>
                                  handleDietaryChange(key)
                                }
                                className="accent-brand-ochre rounded"
                              />

                              <span>{label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step 3 Navigation */}

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-surface text-brand-dark text-xs uppercase tracking-wider font-semibold hover:bg-stone-200"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_back
                        </span>

                        <span>Back to Occasion</span>
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-dark text-white text-xs uppercase tracking-wider font-semibold hover:bg-black transition-all shadow-lg"
                      >
                        <span>
                          Find Matched Private Chefs
                        </span>

                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* =====================================================
                  STEP 4 - CHEF GRID
              ===================================================== */}

              {currentStep === 4 && (
                <div className="transition-opacity duration-300">
                  {/* Header */}

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFDDB9] text-brand-dark text-[11px] uppercase tracking-wider font-semibold">
                          Live Availability
                        </span>

                        <span className="text-xs text-brand-ochre font-semibold">
                          Verified Bangkok Epicurean Cohort
                        </span>
                      </div>

                      <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-1 font-semibold">
                        Step 04 of 04
                      </p>

                      <h2 className="font-headline text-3xl text-brand-dark font-semibold">
                        Choose Your Private Chef
                      </h2>

                      <p className="text-sm text-brand-muted mt-2 max-w-2xl">
                        Based on your selected tier, event,
                        cuisine preferences, and availability.
                      </p>
                    </div>

                    {/* Filters */}

                    <div className="flex flex-wrap items-center gap-3">
                      <select
                        value={availability}
                        onChange={(e) =>
                          setAvailability(e.target.value)
                        }
                        className="bg-white border border-brand-border text-brand-dark text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-sm focus:outline-none cursor-pointer"
                      >
                        <option value="all">
                          Availability: All Slots
                        </option>

                        <option value="friday">
                          Available Friday
                        </option>

                        <option value="saturday">
                          Available Saturday
                        </option>

                        <option value="sunday">
                          Available Sunday
                        </option>
                      </select>

                      <select
                        value={sortBy}
                        onChange={(e) =>
                          setSortBy(e.target.value)
                        }
                        className="bg-white border border-brand-border text-brand-dark text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-sm focus:outline-none cursor-pointer"
                      >
                        <option value="rating">
                          Sort: Michelin & Top Rated
                        </option>

                        <option value="price-asc">
                          Price: Low to High
                        </option>

                        <option value="price-desc">
                          Price: High to Low
                        </option>
                      </select>

                      <span className="text-xs text-brand-muted font-semibold pl-2">
                        {filteredChefs.length} chefs
                      </span>
                    </div>
                  </div>

                  {/* Chef Grid */}

                  {filteredChefs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredChefs.map((chef) => {
                        const isSaved = wishlist.has(
                          chef.id
                        );

                        const isSelected =
                          selectedChef?.id === chef.id;

                        return (
                          <article
                            key={chef.id}
                            className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border ${
                              isSelected
                                ? "border-brand-ochre ring-2 ring-brand-ochre"
                                : "border-brand-border/30"
                            }`}
                          >
                            <div>
                              {/* Image */}

                              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-surface">
                                <div
                                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                  style={{
                                    backgroundImage: `url("${chef.image}")`,
                                  }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                {/* Badge + Wishlist */}

                                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm text-white text-[10px] uppercase font-semibold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px] text-[#FFDDB9]">
                                      workspace_premium
                                    </span>

                                    {chef.badge}
                                  </span>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      toggleWishlist(
                                        chef.id
                                      )
                                    }
                                    className={`w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center transition-colors ${
                                      isSaved
                                        ? "text-red-600"
                                        : "text-brand-dark"
                                    }`}
                                  >
                                    <span
                                      className="material-symbols-outlined text-[18px]"
                                      style={
                                        isSaved
                                          ? {
                                              fontVariationSettings:
                                                "'FILL' 1",
                                            }
                                          : undefined
                                      }
                                    >
                                      favorite
                                    </span>
                                  </button>
                                </div>

                                {/* Chef Name */}

                                <div className="absolute bottom-3 inset-x-4 flex items-end justify-between text-white">
                                  <div>
                                    <h3 className="font-headline text-lg font-semibold leading-snug">
                                      {chef.name}
                                    </h3>

                                    <p className="text-xs text-stone-300">
                                      {chef.title}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-black/50 backdrop-blur-sm text-[#FFDDB9] text-xs font-bold">
                                    <span
                                      className="material-symbols-outlined text-[14px]"
                                      style={{
                                        fontVariationSettings:
                                          "'FILL' 1",
                                      }}
                                    >
                                      star
                                    </span>

                                    <span>
                                      {chef.rating}
                                    </span>

                                    <span className="text-stone-300 font-normal text-[10px]">
                                      ({chef.reviewsCount})
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Content */}

                              <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="px-2.5 py-0.5 rounded-full bg-brand-surface text-brand-dark text-[11px] font-medium">
                                    {chef.experience}
                                  </span>

                                  <span className="px-2.5 py-0.5 rounded-full bg-brand-surface text-brand-dark text-[11px] font-medium capitalize">
                                    {chef.cuisine} Cuisine
                                  </span>
                                </div>

                                <p className="text-[10px] uppercase tracking-wider text-brand-ochre font-bold mb-1">
                                  Signature Experience
                                </p>

                                <h4 className="font-headline text-base text-brand-dark font-semibold mb-2">
                                  {chef.signatureTitle}
                                </h4>

                                <p className="text-xs text-brand-muted line-clamp-3 mb-4 leading-relaxed">
                                  {chef.signatureDesc}
                                </p>
                              </div>
                            </div>

                            {/* Bottom */}

                            <div className="px-6 pb-6 pt-2 bg-white border-t border-brand-border/20">
                              <div className="flex items-center justify-between py-2 mb-3">
                                <div>
                                  <p className="text-[10px] text-brand-muted uppercase tracking-wider">
                                    Tasting Menu From
                                  </p>

                                  <p className="font-headline text-xl font-bold text-brand-dark">
                                    ฿
                                    {chef.price.toLocaleString()}

                                    <span className="text-xs font-normal text-brand-muted">
                                      {" "}
                                      /guest
                                    </span>
                                  </p>
                                </div>

                                <div className="text-right">
                                  <div className="flex items-center gap-1 text-brand-ochre text-xs font-semibold justify-end">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-ochre" />

                                    <span>
                                      {chef.availability}
                                    </span>
                                  </div>

                                  <p className="text-[10px] text-brand-muted">
                                    Min. {chef.minGuests} guests
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setSelectedChef(
                                      chef
                                    )
                                  }
                                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                                    isSelected
                                      ? "bg-brand-ochre text-white"
                                      : "bg-brand-surface hover:bg-stone-200 text-brand-dark"
                                  }`}
                                >
                                  {isSelected
                                    ? "Selected"
                                    : "View Menu"}
                                </button>
   
                               <button
  type="button"
  onClick={() => {
    
    handleQuickBook(chef);
  }}
  className="w-full bg-black cursor-pointer hover:bg-gray-800 text-white py-3 rounded-lg font-semibold"
>
  Quick Book
</button>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-16 text-center">
                      <span className="material-symbols-outlined text-5xl text-brand-muted">
                        restaurant
                      </span>

                      <h3 className="mt-4 text-lg font-semibold text-brand-dark">
                        No chefs found
                      </h3>

                      <p className="mt-2 text-sm text-brand-muted">
                        Try changing your filters.
                      </p>
                    </div>
                  )}

                  {/* Step 4 Navigation */}

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border/60 pt-6">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-surface text-brand-dark text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>

                      <span>Back to Information</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {selectedChef && (
                        <span className="text-xs text-brand-muted">
                          Selected:{" "}
                          <strong className="text-brand-dark">
                            {selectedChef.name}
                          </strong>
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={handleConfirmChef}
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-dark text-white text-xs uppercase tracking-wider font-semibold hover:bg-brand-ochre transition-all shadow-lg"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          check_circle
                        </span>

                        <span>
                          Confirm Chef & Booking
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            
             
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          CHEF MENU MODAL
      ===================================================== */}

      {selectedChef && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedChef(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${selectedChef.image}")`,
                }}
              />

              <button
                type="button"
                onClick={() => setSelectedChef(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-ochre font-semibold">
                    Signature Menu
                  </p>

                  <h2 className="font-headline text-2xl font-bold text-brand-dark mt-1">
                    {selectedChef.signatureTitle}
                  </h2>

                  <p className="text-sm text-brand-muted mt-1">
                    {selectedChef.name} ·{" "}
                    {selectedChef.title}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-brand-muted">
                    From
                  </p>

                  <p className="font-headline text-xl font-bold text-brand-dark">
                    ฿
                    {selectedChef.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="text-sm text-brand-muted leading-relaxed mt-5">
                {selectedChef.signatureDesc}
              </p>

              {selectedChef.courses && (
                <div className="mt-6">
                  <h3 className="font-headline text-lg font-semibold text-brand-dark mb-4">
                    Menu Courses
                  </h3>

                  <div className="space-y-3">
                    {selectedChef.courses.map(
                      (course, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-4 rounded-xl bg-brand-surface"
                        >
                          <span className="w-7 h-7 shrink-0 rounded-full bg-brand-dark text-white text-xs flex items-center justify-center">
                            {index + 1}
                          </span>

                          <div>
                            <p className="text-sm font-semibold text-brand-dark">
                              {typeof course === "string"
                                ? course
                                : course.title ||
                                  course.name}
                            </p>

                            {typeof course !==
                              "string" &&
                              course.description && (
                                <p className="text-xs text-brand-muted mt-1">
                                  {
                                    course.description
                                  }
                                </p>
                              )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedChef(null)}
                  className="px-5 py-3 rounded-xl bg-brand-surface text-brand-dark text-xs font-semibold"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    console.log("Selected Chef:", selectedChef);
        
                    handleQuickBook(selectedChef);
                    setSelectedChef(null);
                  }}
                  className="px-6 py-3 rounded-xl bg-brand-dark text-white text-xs font-semibold"
                >
                  Quick Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
{currentStep === 5 &&(<div>
<Receipt chefData={chefInfo} otherInfo={chosenInfo} />

</div>)}
      {/* =====================================================
          TOAST
      ===================================================== */}

      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-[60] bg-brand-dark text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs max-w-md">
          <span className="material-symbols-outlined text-[#FFDDB9] text-[20px]">
            check_circle
          </span>

          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

export default Booking;