
import { useState } from "react";

const Blog = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title:
            "Atelier Opportunities: Part-Time Kitchen Staff & Culinary Brigade Openings",
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article dispatch link copied to clipboard.");
      } catch (error) {
        alert("Unable to copy the article link.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Application received. The Atelier Talent Concierge will contact you within 48 hours via WhatsApp."
    );
  };

  return (
    <div className="flex flex-col w-full">
      {/* Article Header Section */}
      <section className="w-full px-gutter-sm lg:px-margin max-w-[1320px] mx-auto py-space-xl">
        {/* Main Title & Lead Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-xl">
          <div className="lg:col-span-8 flex flex-col gap-space-md">
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
              Atelier Opportunities: Part-Time Kitchen Staff & Culinary Brigade
              Openings
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Join Bangkok’s premier in-home fine dining cohort. Flexible
              scheduling, premium hourly compensation, and immersive
              mentorship alongside Michelin-pedigreed executive chefs across
              Sathorn, Sukhumvit, and riverside private estates.
            </p>
          </div>

          {/* Author / Quick Actions */}
          <div className="lg:col-span-4 flex flex-col gap-space-md lg:items-end">
            <div className="w-full sm:w-auto bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary font-headline-sm">
                  KV
                </div>

                <div>
                  <p className="font-label-md text-label-md font-semibold text-on-surface">
                    Chef Kittisak Voranant
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Atelier Culinary Guild • 4 min read
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-space-xs pt-space-xs">
                <a
                  href="#quick-apply"
                  className="flex-1 bg-primary text-on-primary hover:bg-secondary transition-colors duration-200 py-2.5 px-space-md rounded text-center font-label-md text-label-md tracking-wider uppercase font-semibold"
                >
                  Apply via Form
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2.5 rounded bg-surface-container-high hover:bg-surface-dim text-on-surface transition-colors flex items-center justify-center"
                  title="Share Dispatch"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setBookmarked(!bookmarked)}
                  className="p-2.5 rounded bg-surface-container-high hover:bg-surface-dim text-on-surface transition-colors flex items-center justify-center"
                  title="Save Announcement"
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      bookmarked ? "text-secondary" : ""
                    }`}
                  >
                    {bookmarked ? "bookmark" : "bookmark_border"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-surface-container-low mb-space-xl">
          <img
            alt="Chef2Home Culinary Brigade at work in modern open atelier kitchen"
            className="w-full h-[380px] sm:h-[500px] lg:h-[620px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0f7lq3ZLOPJtX0qOU28Zj0B42gnipD67_PR4NPznLTdFSUPmims0L6mn3SACoOCcJXx6h1yY3ZYZCqaj3G5bJxe12MPcppsCKftv-0pDfBEMdurE54zyB6Kutwige-hiFxuFfEqXevddLGHIkMyHdNtc4Ys1W7L5VZ_OeJUziLNhQYaABWaRssG7R5SPdooZT8pIwOlzBjWkF1tnblZDJDTWk9x6pGRtRwPNCx6ovwPb0EW3RzKv2"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-space-md sm:p-space-lg text-on-primary flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm backdrop-blur-[2px]">
            <div className="max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mb-1 block">
                Live Atelier Dispatch
              </span>

              <p className="font-body-sm text-body-sm text-inverse-on-surface italic">
                “Inside the Chef2Home preparatory atelier: commis de cuisine,
                line cooks, and sauciers crafting precision mise-en-place for
                private evening residencies.”
              </p>
            </div>

            <div className="flex items-center gap-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Bangkok Central Prep Kitchen, Thonglor
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-space-xl">
          <p className="font-headline-sm text-headline-sm text-on-surface leading-relaxed mb-space-md">
            Atelier Épicé is redefining how gastronomic craft interacts with
            domestic architecture. We are expanding our selective brigade with
            passionate culinary artisans seeking autonomy, Michelin-adjacent
            technique, and fair compensation.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-loose mb-space-md">
            Unlike standard commercial restaurant environments with rigid
            double-shifts and behind-the-wall anonymity, our private cohort
            works directly alongside guest master chefs inside Bangkok’s most
            architecturally significant residences. Every dinner is an
            intimate, seated recital for 6 to 16 patrons. You play an
            indispensable role in seamless execution, flawless plate
            architecture, and dignified tableside service.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-space-md py-space-md px-space-lg bg-surface-container-low rounded-xl text-center my-space-lg">
            <div>
              <span className="block font-headline-lg text-headline-lg text-secondary">
                100%
              </span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
                Escrow Guaranteed
              </span>
            </div>

            <div>
              <span className="block font-headline-lg text-headline-lg text-secondary">
                3-5h
              </span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
                Shift Duration
              </span>
            </div>

            <div>
              <span className="block font-headline-lg text-headline-lg text-secondary">
                ฿650+
              </span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
                Avg. Hourly Rate
              </span>
            </div>
          </div>
        </div>

        {/* Available Positions */}
        <div className="w-full mb-space-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Curated Vacancies
              </span>

              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                Available Brigade Positions
              </h2>
            </div>

            <span className="font-body-sm text-body-sm text-on-surface-variant mt-2 sm:mt-0">
              Applications reviewed weekly by the Guild Master
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {/* Position 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                  <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider bg-surface-container text-on-surface-variant font-medium">
                    Part-Time
                  </span>

                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Role 01
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Line Cook & Commis de Cuisine
                </h3>

                <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Compensation
                    </span>

                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      ฿450 – ฿650{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                        / hr
                      </span>
                    </span>
                  </div>

                  <p className="font-label-sm text-label-sm text-secondary font-medium">
                    + Direct Tableside Gratuities
                  </p>
                </div>

                <div className="space-y-space-sm mb-space-md text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      schedule
                    </span>
                    <span>Flexible Evenings • 3–4 Shifts per week</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Mise-en-place prep, vacuum packaging & sous-vide
                      handling.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Tableside finishing assistance and rigorous core
                      temperature logs.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      location_on
                    </span>
                    <span>
                      Sukhumvit, Sathorn & Riverside Residences
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#quick-apply"
                className="w-full text-center py-3 bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold rounded transition-colors duration-200"
              >
                Select Line Cook Role
              </a>
            </div>

            {/* Position 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-3 py-1 text-[10px] uppercase font-label-sm tracking-widest rounded-bl-lg font-semibold">
                In High Demand
              </div>

              <div>
                <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                  <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider bg-secondary-container/30 text-on-secondary-container font-medium">
                    On-Demand Dispatch
                  </span>

                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Role 02
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Pastry Assistant & Confectionery Aide
                </h3>

                <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Compensation
                    </span>

                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      ฿500 – ฿700{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                        / hr
                      </span>
                    </span>
                  </div>

                  <p className="font-label-sm text-label-sm text-secondary font-medium">
                    + Event Completion Bonus
                  </p>
                </div>

                <div className="space-y-space-sm mb-space-md text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      event
                    </span>
                    <span>
                      Weekend Dispatch • Thursday to Sunday Evenings
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Pre-dessert assembly, delicate gelée, tuile & sugar
                      styling.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Artisanal sourdough and warm brioche warming and service
                      choreography.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      psychology
                    </span>
                    <span>Mentorship under Pastry Chef Élise Marcelle</span>
                  </div>
                </div>
              </div>

              <a
                href="#quick-apply"
                className="w-full text-center py-3 bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md uppercase tracking-wider font-semibold rounded transition-colors duration-200 shadow-sm"
              >
                Select Pastry Role
              </a>
            </div>

            {/* Position 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                  <span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider bg-surface-container text-on-surface-variant font-medium">
                    Per-Residency
                  </span>

                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Role 03
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Kitchen Steward & White-Glove Scullery Aide
                </h3>

                <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      Compensation
                    </span>

                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      ฿350 – ฿450{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                        / hr
                      </span>
                    </span>
                  </div>

                  <p className="font-label-sm text-label-sm text-secondary font-medium">
                    + Guaranteed Transit Subsidy
                  </p>
                </div>

                <div className="space-y-space-sm mb-space-md text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      timer
                    </span>
                    <span>
                      Evening Residencies • 4–5 Hours per event
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Continuous prep-station sanitization & trash management.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Care of Mauviel copper, bespoke stoneware & crystal
                      stemware.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                      sanitizer
                    </span>
                    <span>
                      Guaranteed 100% white-glove kitchen handover state.
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#quick-apply"
                className="w-full text-center py-3 bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold rounded transition-colors duration-200"
              >
                Select Steward Role
              </a>
            </div>
          </div>
        </div>

        {/* Brigade Charter */}
        <div className="w-full mb-space-xl">
          <div className="max-w-2xl mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
              The Brigade Charter
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Why Guild Members Excel With Us
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Chef2Home is engineered to restore dignity, high compensation,
              and work-life equilibrium to the culinary industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Feature 1 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">
                  apartment
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Curated Residences
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Execute services inside Bangkok’s most refined architectural
                estates and penthouses equipped with Sub-Zero, Gaggenau, and
                bespoke prep layouts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">
                  payments
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Transparent Escrow Payouts
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Never wait 30 days for salary. Every reservation is pre-funded
                in escrow, with direct PromptPay disbursement within 24 hours
                of client sign-off.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface mb-space-xs">
                <span className="material-symbols-outlined text-[24px]">
                  school
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Skill Growth & Masterclasses
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Quarterly masterclasses in contemporary French saucier
                techniques, dry-aging protocols, and natural wine pairing,
                hosted exclusively for guild roster staff.
              </p>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div
          id="quick-apply"
          className="w-full bg-primary-container text-on-primary rounded-2xl p-space-lg sm:p-space-xl mb-space-xl shadow-xl"
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-space-md text-center">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
              Dispatch Cohort 2025/2026
            </span>

            <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg font-headline-lg text-surface-container-lowest">
              Ready to join the culinary cohort?
            </h2>

            <p className="font-body-md text-body-md text-on-primary-container max-w-xl mx-auto">
              Submit your background, preferred shift windows, and specialty.
              Candidates who meet the standard receive an invite to our
              Thonglor atelier tasting and briefing within 48 hours.
            </p>

            {/* Application Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full mt-space-md text-left bg-surface p-space-lg rounded-xl text-on-surface shadow-md space-y-space-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-semibold"
                  >
                    Full Legal Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Supaporn Kittisak"
                    className="w-full px-space-md py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-semibold"
                  >
                    Contact Phone & WhatsApp
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+66 8X XXX XXXX"
                    className="w-full px-space-md py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label
                    htmlFor="role"
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-semibold"
                  >
                    Role of Primary Interest
                  </label>

                  <select
                    id="role"
                    className="w-full px-space-md py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors"
                  >
                    <option>
                      Line Cook & Commis de Cuisine
                    </option>
                    <option>
                      Pastry Assistant & Confectionery Aide
                    </option>
                    <option>
                      Kitchen Steward & White-Glove Scullery
                    </option>
                    <option>
                      Sommelier / Beverage Attendant
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-semibold"
                  >
                    Years in Professional Kitchens
                  </label>

                  <select
                    id="experience"
                    className="w-full px-space-md py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors"
                  >
                    <option>
                      &lt; 1 Year (Culinary School Graduates Welcome)
                    </option>
                    <option>
                      1 – 2 Years (Line or Commis experience)
                    </option>
                    <option>
                      3 – 5 Years (CDP / Senior Cook level)
                    </option>
                    <option>
                      5+ Years (Executive or Sous level)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="background"
                  className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-semibold"
                >
                  Brief Culinary Background / Recent Residencies
                </label>

                <textarea
                  id="background"
                  rows="3"
                  placeholder="Tell us about the kitchens, hotels, or culinary schools you've worked with..."
                  className="w-full px-space-md py-3 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <label className="flex items-center gap-space-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />

                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    I hold active rights to work in Thailand and agree to
                    culinary vetting
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-on-primary hover:bg-secondary px-space-lg py-3 rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors duration-200"
                >
                  Complete Kitchen Service Registration →
                </button>
              </div>
            </form>

            {/* Concierge */}
            <div className="pt-space-sm">
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Questions before applying? Inquire directly with our Culinary
                Talent Concierge at{" "}
                <a
                  href="mailto:talent@chef2home.com"
                  className="text-secondary-fixed underline hover:text-on-primary"
                >
                  talent@chef2home.com
                </a>{" "}
                or WhatsApp{" "}
                <span className="text-secondary-fixed">
                  +66 81 234 5678
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        <div className="w-full pt-space-lg">
          <div className="flex items-center justify-between mb-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                The Atelier Journal
              </span>

              <h3 className="font-headline-md text-headline-md text-on-surface">
                Related Chronicles
              </h3>
            </div>

            <a
              href="#"
              className="font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface flex items-center gap-1"
            >
              Explore Archive
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Story 1 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex gap-space-md items-center hover:bg-surface-container transition-colors duration-200 cursor-pointer group">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Close up of a meticulous chef spooning a glossy amber demi-glace over a golden roasted guinea fowl breast on matte porcelain plate with warm candlelight."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrU_tgcY3-zzYwzpwgYeL5-_ZvDzRM9ixZZrXBt_oKIxBUDjWM2EcelUnajV8-_JzIwOHjwGzQgke4VgofXWyyZdme2ugOJy67q0huT43XnQDXaKyZz1MkBS_CIXQikNYVS3tkQYmZZaWcA3kiKNKuludDWSHi--jkupoflHd3nNxWGwdKOfqZbUS60rCgZdoJGOaPdAUHvZL_2H1Qh-hydMxlqJt-byp6WbSUZjiO9ImXy5aZplwk"
                />
              </div>

              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  In the Field
                </span>

                <h4 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors">
                  A Day in the Life of a Private In-Home Saucier
                </h4>

                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  From early morning market runs at Talat Phloi to the delicate
                  reductions finished tableside in a Chao Phraya penthouse.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex gap-space-md items-center hover:bg-surface-container transition-colors duration-200 cursor-pointer group">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Spotless white-glove inspection of high-end French copper pans and organized stainless steel commercial kitchen workstations in warm evening lighting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMJyxtKi66DWK9SPpaBp-AVdo_XHryC8cncOPqm65qb2ABEbojeKiZMW2vzw-h410M-fgnjgEMrSNd-CNxk6f4QBr7z9sjT48udfWvfOvp11XtouldyLdAoYtvG3aaj0LdBQizmDrCLBXXOEg-JbD_RVAPZKQvl1CI6qgeM-Yuv62Ar52javodNQI0vpVLIyt2HoB-oRd7smek-iZwKe7V3_6L8rGpB4QdVKs-2Wq93wp2vABB4xSD"
                />
              </div>

              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  House Standards
                </span>

                <h4 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-secondary transition-colors">
                  White-Glove Hygiene Charter: Behind the Standards
                </h4>

                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  Why our five-stage disinfection ritual and zero-trace kitchen
                  turnover gives Bangkok’s premier private hosts total peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

