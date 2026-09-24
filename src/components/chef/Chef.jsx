import { useState } from "react";

const Chefs = () => {
  const [menuTitle, setMenuTitle] = useState(
    "5-Course Siam Terroir & Winter Truffle Degustation"
  );

  const [menuNarrative, setMenuNarrative] = useState(
    "Drawing from wild botanical harvests in Nan province and premium 14-day dry-aged Chaiya duck, this seasonal tasting experience celebrates Siamese micro-climates through classical French saucier reductions. Black winter Périgord truffles are shaved live tableside over slow-steeped organic poultry demi-glace."
  );

  const [selectedTier, setSelectedTier] = useState("vip");
  const [basePrice, setBasePrice] = useState(3200);
  const [covers, setCovers] = useState(4);

  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const tierPrices = {
    standard: 1200,
    premium: 2200,
    vip: 3200,
  };

  const handleTierChange = (tier) => {
    setSelectedTier(tier);
    setBasePrice(tierPrices[tier]);
  };

  const handleDecreaseCovers = () => {
    setCovers((prev) => Math.max(2, prev - 1));
  };

  const handleIncreaseCovers = () => {
    setCovers((prev) => Math.min(12, prev + 1));
  };

  const handlePublish = () => {
    setIsPublishing(true);
    setIsPublished(false);

    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);

      setTimeout(() => {
        setIsPublished(false);
      }, 3000);
    }, 800);
  };

  return (
    <div className="w-full">
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1240px] w-full mx-auto px-margin pt-space-lg pb-space-xl flex flex-col gap-y-10">

            {/* Page Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-sm">
              <div className="flex flex-col gap-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                    Chef Residency ID: C2H-BKK-0842
                  </span>
                </div>

                <h1 className="font-headline-lg text-headline-lg md:text-[42px] md:leading-[50px] text-on-surface tracking-tight">
                  Welcome, Chef Somchai
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-surface-container-lowest px-4 py-3 rounded-full shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                  </span>

                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Status: Active &amp; Bookable
                  </span>
                </div>

                <span className="h-3.5 w-[1px] bg-outline-variant/60 hidden sm:block" />

                <span className="font-body-sm text-body-sm text-outline">
                  Thong Lo / Ekkamai Hub
                </span>
              </div>
            </header>

            {/* Create Menu */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col gap-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 bg-surface-container-low/30 -mx-8 -mt-8 p-8 rounded-t-2xl">
                <div className="flex flex-col gap-1">
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
                    Create Your Menu
                  </h2>
                </div>
              </div>

              {/* Menu Title */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 relative group">
                  <div className="flex items-center justify-between">
                    <label
                      className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-2"
                      htmlFor="menu-title"
                    >
                      <span className="text-[18px] font-bold">
                        Tasting Menu or Signature Service Name
                      </span>

                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm font-medium">
                        Editable · Display Title
                      </span>
                    </label>
                  </div>

                  <div className="relative w-full flex items-center">
                    <input
                      id="menu-title"
                      type="text"
                      value={menuTitle}
                      onChange={(e) => setMenuTitle(e.target.value)}
                      placeholder="Enter your signature dish or tasting service title..."
                      className="w-full bg-surface-container-low/50 hover:bg-surface-container-low/70 border border-outline-variant/30 focus:border-secondary rounded-xl pl-5 pr-28 py-4 font-headline-sm text-headline-sm text-on-surface tracking-tight placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none transition-all shadow-xs cursor-text"
                    />

                    <button
                      type="button"
                      className="absolute right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors border border-outline-variant/30 shadow-xs"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        edit
                      </span>

                      <span className="font-label-sm text-label-sm font-medium hidden sm:inline">
                        Edit Title
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    className="text-[18px] font-bold text-on-surface"
                    htmlFor="menu-narrative"
                  >
                    Ingredients of the Dish
                  </label>

                  <span className="font-label-sm text-label-sm text-outline">
                    Editorial Prose for Guest Menu Card
                  </span>
                </div>

                <textarea
                  id="menu-narrative"
                  rows="4"
                  value={menuNarrative}
                  onChange={(e) => setMenuNarrative(e.target.value)}
                  className="w-full bg-surface-container-low/40 rounded-xl p-4 font-body-md text-body-md text-on-surface-variant leading-relaxed placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none transition-colors resize-y"
                />
              </div>
            </section>

            {/* Photo Upload */}
            <section className="flex flex-col gap-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Upload Your Signature Dish Photos
                  </h2>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  6-slot architectural layout · High-res RAW/JPG up to 12MB
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                {/* Slot 1 */}
                <div className="relative group aspect-[4/5] rounded-2xl overflow-hidden shadow-sm bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHOdiP_-rqrJNkP8S19aRyc8BJY-qG8VdAiyxztmo08bSJDr-s71gMLGPKsNbJKQSEyJZNJELmTzv3mIadSQb-PKqxRDycF3i3IH-l4bb0kB-YmBifEo8dY6j_Z1iK2q3kvgHGqACxf_ZUmliHF8Mkb4ogasXC5SUAOIGbHc6rOGVpdOSQSTdU6VoTThTR1t4u27X8gwJkRnyFGGKcKd7ujWO8Phkd11qw6nisPHFikvKbmk1pXZq"
                    alt="Chaiya Duck & Truffle"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-between p-3 text-white">
                    <span className="self-start px-2 py-0.5 rounded-full bg-white/90 text-on-surface font-label-sm text-label-sm font-semibold backdrop-blur-xs">
                      Cover Dish
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary-fixed">
                        Course 03
                      </p>

                      <p className="font-body-sm text-body-sm font-medium line-clamp-1">
                        Chaiya Duck &amp; Truffle
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slot 2 */}
                <UploadSlot
                  course="Course 01"
                  title="Amuse Plating"
                  subtitle="Drag or Click"
                  icon="add_a_photo"
                />

                {/* Slot 3 */}
                <UploadSlot
                  course="Course 02"
                  title="Entrée Angle"
                  subtitle="Velouté & Truffle"
                  icon="add_a_photo"
                />

                {/* Slot 4 */}
                <UploadSlot
                  course="Course 04"
                  title="Intermezzo"
                  subtitle="Palate Refresh"
                  icon="add_a_photo"
                />

                {/* Slot 5 */}
                <UploadSlot
                  course="Course 05"
                  title="Sweet Finish"
                  subtitle="Coconut Sabayon"
                  icon="add_a_photo"
                />

                {/* Slot 6 */}
                <UploadSlot
                  course="Mise-En-Place"
                  title="Table Staging"
                  subtitle="Linens & Cutlery"
                  icon="table_restaurant"
                />
              </div>
            </section>

            {/* Course Flow */}
            <section className="flex flex-col gap-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
                    Course Service Flow &amp; Temperature Progression
                  </h2>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface self-start sm:self-auto"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    reorder
                  </span>
                  Re-order Sequence
                </button>
              </div>

              <div className="flex flex-col gap-y-4">

                <CourseCard
                  number="01"
                  type="AMUSE-BOUCHE"
                  subtitle="Cold Overture"
                  label1="Dish Composition & Garnish"
                  value1="Smoked Chaiya Duck Tartlet & Finger Lime Caviar"
                  label2="Service Temp & Technique Note"
                  value2="Chilled · Live Citrus Zesting Tableside"
                />

                <CourseCard
                  number="02"
                  type="PREMIER ENTRÉE"
                  subtitle="Warm Starter"
                  label1="Dish Composition & Garnish"
                  value1="Pan-Seared Foie Gras & Chiang Mai Morel Velouté"
                  label2="Sommelier Pairing Recommended"
                  value2="Savennières Chenin Blanc 2020 (Loire Valley)"
                />

                <CourseCard
                  number="03"
                  type="PIÈCE DE RÉSISTANCE"
                  subtitle="Main Climax"
                  label1="Main Protein & Reduction"
                  value1="14-Day Dry-Aged Chaiya Duck Breast with Winter Truffle Jus"
                  label2="Tableside Theatrics / Garnish Note"
                  value2="Live Shaved Périgord Black Truffle (3g tableside per guest)"
                  active
                />

                <CourseCard
                  number="04"
                  type="DESSERT HARMONY"
                  subtitle="Sweet Coda"
                  label1="Sweet Construction"
                  value1="Deconstructed Young Coconut Gelée & Smoked Palm Sugar Sabayon"
                  label2="Digestif / Wild Botanical Infusion"
                  value2="Wild Nan Forest Mint & Roasted Lemongrass Herbal Infusion"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 px-6 rounded-2xl bg-surface-container-low/60 hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-all flex items-center justify-center gap-2 font-label-md text-label-md"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  add_circle
                </span>

                <span>
                  + Add Intermezzo, Artisanal Cheese Course, or Pre-Dessert to
                  Sequence
                </span>
              </button>
            </section>

            {/* Pricing */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
              <div className="pb-6 mb-8 bg-surface-container-low/30 -mx-8 -mt-8 p-8 rounded-t-2xl">
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold block mb-0.5">
                  STAGE 03 · VALUATION &amp; HOST PARAMETERS
                </span>

                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
                  Pricing &amp; Kitchen Protocols
                </h2>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Establish minimum covers, service windows, and automated
                  payout disbursement thresholds.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Pricing Column */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Tasting Tier Classification
                    </span>

                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Benchmark price positioning across Bangkok private dining
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <TierButton
                      tier="standard"
                      title="Standard"
                      price="฿1,200"
                      subtitle="3-Course Casual"
                      selected={selectedTier === "standard"}
                      onClick={() => handleTierChange("standard")}
                    />

                    <TierButton
                      tier="premium"
                      title="Premium"
                      price="฿2,200"
                      subtitle="4-Course Fine"
                      selected={selectedTier === "premium"}
                      onClick={() => handleTierChange("premium")}
                    />

                    <TierButton
                      tier="vip"
                      title="Home Restaurant"
                      price="฿3,200+"
                      subtitle="Active Degustation"
                      selected={selectedTier === "vip"}
                      onClick={() => handleTierChange("vip")}
                    />
                  </div>

                  {/* Base Price */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="base-price"
                    >
                      Base Tasting Price per Guest (Net THB)
                    </label>

                    <div className="relative flex items-center">
                      <span className="absolute left-4 font-headline-sm text-headline-sm text-on-surface-variant">
                        ฿
                      </span>

                      <input
                        id="base-price"
                        type="number"
                        value={basePrice}
                        onChange={(e) => setBasePrice(e.target.value)}
                        className="w-full bg-surface-container-low/40 rounded-xl pl-9 pr-4 py-3.5 font-headline-sm text-headline-sm text-on-surface focus:bg-surface-container-lowest focus:outline-none transition-colors"
                      />

                      <span className="absolute right-4 font-label-sm text-label-sm uppercase text-outline">
                        THB / Guest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Logistics */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Capacity &amp; Service Duration
                    </span>

                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Manage host expectations and domestic pacing requirements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Minimum Covers */}
                    <div className="p-4 rounded-xl bg-surface-container-low/40 flex flex-col justify-between gap-3">
                      <span className="font-label-sm text-label-sm uppercase text-outline">
                        Minimum Covers
                      </span>

                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handleDecreaseCovers}
                          className="w-8 h-8 rounded-full bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center font-bold text-on-surface shadow-xs transition-colors"
                        >
                          –
                        </button>

                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          {covers} Guests
                        </span>

                        <button
                          type="button"
                          onClick={handleIncreaseCovers}
                          className="w-8 h-8 rounded-full bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center font-bold text-on-surface shadow-xs transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-label-sm text-label-sm text-outline">
                        Range: 2 to 12 covers
                      </span>
                    </div>

                    {/* Service Duration */}
                    <div className="p-4 rounded-xl bg-surface-container-low/40 flex flex-col justify-between gap-3">
                      <span className="font-label-sm text-label-sm uppercase text-outline">
                        Service Window
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[22px]">
                          schedule
                        </span>

                        <span className="font-headline-sm text-headline-sm text-on-surface">
                          2.5 – 3.0 Hours
                        </span>
                      </div>

                      <span className="font-label-sm text-label-sm text-outline">
                        Dining Experience Only
                      </span>
                    </div>
                  </div>

                  {/* Scullery */}
                  <div className="p-4 rounded-xl bg-surface-container-low/40 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <div className="pt-0.5">
                        <input
                          defaultChecked
                          className="w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer accent-primary"
                          id="scullery-check"
                          type="checkbox"
                        />
                      </div>

                      <label
                        className="flex flex-col cursor-pointer"
                        htmlFor="scullery-check"
                      >
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Chef2Home White-Glove Scullery &amp; Hygiene Protocol
                        </span>

                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Includes 45 min prior arrival for sanitizing kitchen
                          mise-en-place, and guaranteed 100% kitchen restoration
                          and dishware cleansing post service.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Policies */}
                  <div className="flex items-center justify-between text-outline text-body-sm pt-2">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        verified_user
                      </span>

                      48-Hour Cancellation Cushion Protected
                    </span>

                    <span className="font-label-sm text-label-sm uppercase">
                      Atelier Terms v2.4
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Bottom Action Bar */}
          <aside
            aria-label="Menu Publication Controls"
            className="sticky bottom-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-md shadow-xl"
          >
            <div className="max-w-[1240px] mx-auto px-margin py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">

              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />

                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Draft auto-saved 1 min ago · All culinary metadata secured to
                  your atelier profile
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-surface-container-lowest hover:bg-surface-container font-label-md text-label-md text-on-surface shadow-xs transition-colors"
                >
                  Save Draft
                </button>

                <button
                  type="button"
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className={`px-6 py-2.5 rounded-full text-on-primary font-label-md text-label-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 ${
                    isPublished
                      ? "bg-secondary"
                      : "bg-primary hover:bg-primary-container"
                  }`}
                >
                  {isPublishing ? (
                    <>
                      <span className="material-symbols-outlined text-[16px] animate-spin">
                        progress_activity
                      </span>
                      <span>Publishing Atelier...</span>
                    </>
                  ) : isPublished ? (
                    <>
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                      <span>Live on Marketplace!</span>
                    </>
                  ) : (
                    <>
                      <span>Publish Menu to Marketplace</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

const UploadSlot = ({ course, title, subtitle, icon }) => {
  return (
    <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest p-4 flex flex-col items-center justify-between text-center group hover:bg-surface-container-low transition-colors cursor-pointer">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
        {course}
      </span>

      <div className="flex flex-col items-center gap-1.5 my-auto">
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-outline group-hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            {icon}
          </span>
        </div>

        <span className="font-label-md text-label-md text-on-surface font-medium">
          {title}
        </span>

        <span className="font-label-sm text-label-sm text-outline">
          {subtitle}
        </span>
      </div>

      <span className="font-label-sm text-label-sm text-secondary font-semibold">
        + Upload
      </span>
    </div>
  );
};

const CourseCard = ({
  number,
  type,
  subtitle,
  label1,
  value1,
  label2,
  value2,
  active = false,
}) => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start">
      <div className="flex md:flex-col items-center md:items-start gap-3 md:w-44 flex-shrink-0">
        <span
          className={`font-headline-lg text-headline-lg font-medium ${
            active ? "text-secondary" : "text-secondary/80"
          }`}
        >
          {number}
        </span>

        <div className="flex flex-col">
          <span
            className={`font-label-sm text-label-sm uppercase tracking-wider font-semibold ${
              active ? "text-secondary" : "text-outline"
            }`}
          >
            {type}
          </span>

          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {subtitle}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow w-full">
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm uppercase text-outline">
            {label1}
          </label>

          <input
            type="text"
            defaultValue={value1}
            className="w-full bg-surface-container-low/40 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm uppercase text-outline">
            {label2}
          </label>

          <input
            type="text"
            defaultValue={value2}
            className="w-full bg-surface-container-low/40 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex md:flex-col items-center gap-2 self-end md:self-center">
        <button
          aria-label="Course settings"
          type="button"
          className="p-2 rounded-full hover:bg-surface-container text-outline hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            more_vert
          </span>
        </button>
      </div>
    </div>
  );
};

const TierButton = ({
  title,
  price,
  subtitle,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-3.5 rounded-xl text-left transition-all flex flex-col justify-between relative overflow-hidden ${
        selected
          ? "bg-surface-container-lowest shadow-md"
          : "bg-surface-container-low/40 hover:bg-surface-container"
      }`}
    >
      {selected && (
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-secondary rounded-bl" />
      )}

      <span
        className={`font-label-sm text-label-sm uppercase ${
          selected
            ? "text-secondary font-semibold"
            : "text-outline"
        }`}
      >
        {title}
      </span>

      <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
        {price}
      </span>

      <span
        className={`font-body-sm text-[11px] mt-0.5 ${
          selected
            ? "text-secondary font-medium"
            : "text-outline"
        }`}
      >
        {subtitle}
      </span>
    </button>
  );
};

export default Chefs;