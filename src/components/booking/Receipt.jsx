import { useState } from "react";
import ConfirmReceipt from "./ConfirmReceipt";
import "./print.css";
const Receipt = ({ chefData, otherInfo }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  if (!chefData || !otherInfo) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-surface-container-lowest rounded-xl shadow-lg p-8 text-center">
          <span className="material-symbols-outlined text-secondary text-[48px]">
            error
          </span>

          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-4">
            Booking information is missing
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Please return to the booking page and select a chef again.
          </p>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider"
          >
            Back to Booking
          </button>
        </div>
      </main>
    );
  }

  const guestCount = Number(otherInfo.adults) || 1;
  const chefPrice = Number(chefData.price) || 0;

  /*
    chefData.price is treated as the price per guest
    because your chef data currently uses:
    price: 3400
  */
  const menuSubtotal = chefPrice * guestCount;

  /*
    Your original receipt had wine pairing, VAT and discount values,
    but those values are not present in otherInfo or chefData.

    Therefore we don't invent them here.
  */
  const winePairing = 0;
  const serviceFee = 0;
  const discount = 0;

  const taxableSubtotal = menuSubtotal + winePairing + serviceFee;
  const vat = Math.round(taxableSubtotal * 0.07);
  const total = taxableSubtotal + vat - discount;

  const formatPrice = (price) => {
    return `฿${Number(price).toLocaleString("en-US")}`;
  };

  const cuisineLabels = {
    french: "Modern French",
    japanese: "Japanese Omakase",
    thai: "Thai Royal & Heritage",
    italian: "Artisanal Italian",
    nordic: "Nordic & Foraged",
  };

  const eventLabels = {
    celebration: "Private Celebration",
    romance: "Romantic Moments",
    party: "Party Gathering",
  };

  const stoveLabels = {
    gas: "Gas Stove",
    induction: "Induction / Electric",
  };

  const cutleryLabels = {
    host: "Host Provides",
    chef: "Chef Brings Artisanal Ceramics",
  };

  const dietaryItems = [
    {
      key: "glutenFree",
      label: "Gluten-Free",
      icon: "grain",
    },
    {
      key: "nutAllergy",
      label: "Nut Allergy",
      icon: "no_food",
    },
    {
      key: "shellfish",
      label: "Shellfish Allergy",
      icon: "set_meal",
    },
    {
      key: "halal",
      label: "Halal Certified Ingredients",
      icon: "verified",
    },
  ];

  const selectedDietary = dietaryItems.filter(
    (item) => otherInfo.dietary?.[item.key]
  );

const handleConfirmBooking = () => {
    setIsConfirmed(true);

    // Wait for React to render the confirmed receipt
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
      <><ConfirmReceipt className="print-receipt" /></>

        {/* ================= MAIN CONTENT ================= */}
        <section className="w-full max-w-[1320px] mx-auto px-margin-sm lg:px-margin py-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-space-lg">
            {/* ================= LEFT COLUMN ================= */}
            <div className="lg:col-span-4 space-y-space-md">
              {/* Contact / Location */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center justify-between mb-space-md">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Service Details
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Your Private Dining Experience
                    </h2>
                  </div>

                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    restaurant
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event */}
                  <div className="p-4 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        celebration
                      </span>

                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        Occasion
                      </p>
                    </div>

                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      {eventLabels[otherInfo.event] || otherInfo.event}
                    </p>
                  </div>

                  {/* Tier */}
                  <div className="p-4 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        workspace_premium
                      </span>

                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        Experience
                      </p>
                    </div>

                    <p className="font-body-md text-body-md font-semibold text-on-surface capitalize">
                      {otherInfo.tier} Experience
                    </p>
                  </div>

                  {/* Venue */}
                  <div className="p-4 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        home
                      </span>

                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        Venue
                      </p>
                    </div>

                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      {otherInfo.venue}
                    </p>
                  </div>

                  {/* Guests */}
                  <div className="p-4 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        group
                      </span>

                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        Party Size
                      </p>
                    </div>

                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      {guestCount}{" "}
                      {guestCount === 1 ? "Guest" : "Guests"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= CHEF ================= */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center justify-between mb-space-md">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Your Selected Chef
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Culinary Specialist
                    </h2>
                  </div>

                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    chef_hat
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Chef Image */}
                  <div className="relative w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                    <img
                      src={chefData.image}
                      alt={chefData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Chef Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                          {chefData.name}
                        </h3>

                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          {chefData.title}
                        </p>
                      </div>

                      {chefData.rating && (
                        <div className="flex items-center gap-1 text-secondary">
                          <span
                            className="material-symbols-outlined text-[18px]"
                            style={{
                              fontVariationSettings: "'FILL' 1",
                            }}
                          >
                            star
                          </span>

                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            {chefData.rating}
                          </span>

                          {chefData.reviewsCount && (
                            <span className="text-[11px] text-on-surface-variant">
                              ({chefData.reviewsCount})
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {chefData.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-medium">
                          {chefData.badge}
                        </span>
                      )}

                      {chefData.experience && (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-[11px] font-medium">
                          {chefData.experience}
                        </span>
                      )}

                      {chefData.cuisine && (
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-[11px] font-medium capitalize">
                          {chefData.cuisine} Cuisine
                        </span>
                      )}
                    </div>

                    {chefData.availability && (
                      <div className="flex items-center gap-2 mt-4 text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />

                        <span className="font-label-sm text-label-sm font-semibold">
                          {chefData.availability}
                        </span>
                      </div>
                    )}

                    {chefData.minGuests && (
                      <p className="text-[11px] text-on-surface-variant mt-1">
                        Minimum {chefData.minGuests} guests
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ================= TASTING MENU ================= */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center gap-3 mb-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    restaurant_menu
                  </span>

                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Signature Experience
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Tasting Menu
                    </h2>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {chefData.signatureTitle || "Signature Tasting Menu"}
                  </h3>

                  {chefData.signatureDesc && (
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      {chefData.signatureDesc}
                    </p>
                  )}

                  {chefData.courses?.length > 0 && (
                    <div className="mt-5">
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold mb-3">
                        Included Courses
                      </p>

                      <div className="space-y-2">
                        {chefData.courses.map((course, index) => (
                          <div
                            key={`${course}-${index}`}
                            className="flex items-start gap-3 py-2 border-b border-outline-variant/20 last:border-none"
                          >
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant text-[11px] font-bold shrink-0">
                              {index + 1}
                            </span>

                            <p className="font-body-sm text-body-sm text-on-surface">
                              {course}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ================= BOOKING SPECS ================= */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center gap-3 mb-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    event_note
                  </span>

                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Reservation Specifications
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Booking Details
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Party */}
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      group
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Party Size
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {guestCount}{" "}
                        {guestCount === 1 ? "Guest" : "Guests"}{" "}
                        (Adult Degustation)
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      location_on
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Venue
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {otherInfo.venue}
                      </p>
                    </div>
                  </div>

                  {/* Event */}
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      celebration
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Occasion
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {eventLabels[otherInfo.event] || otherInfo.event}
                      </p>
                    </div>
                  </div>

                  {/* Cuisine */}
                  {otherInfo.cuisines?.length > 0 && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        skillet
                      </span>

                      <div>
                        <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                          Cuisine Preferences
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {otherInfo.cuisines.map((cuisine) => (
                            <span
                              key={cuisine}
                              className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface text-[11px] font-medium"
                            >
                              {cuisineLabels[cuisine] || cuisine}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stove */}
                  {otherInfo.stove && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        local_fire_department
                      </span>

                      <div>
                        <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                          Cooktop
                        </p>

                        <p className="font-body-md text-body-md text-on-surface font-medium">
                          {stoveLabels[otherInfo.stove] ||
                            otherInfo.stove}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Cutlery */}
                  {otherInfo.cutlery && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        restaurant
                      </span>

                      <div>
                        <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                          Dinnerware
                        </p>

                        <p className="font-body-md text-body-md text-on-surface font-medium">
                          {cutleryLabels[otherInfo.cutlery] ||
                            otherInfo.cutlery}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ================= DIETARY ================= */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center gap-3 mb-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    no_food
                  </span>

                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Dietary Protocol
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Dietary Preferences
                    </h2>
                  </div>
                </div>

                {selectedDietary.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedDietary.map((item) => (
                      <div
                        key={item.key}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant"
                      >
                        <span className="material-symbols-outlined text-[17px]">
                          {item.icon}
                        </span>

                        <span className="font-label-sm text-label-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>

                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      No special dietary requirements selected.
                    </p>
                  </div>
                )}
              </div>

              {/* ================= PAYMENT ================= */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md lg:p-space-lg">
                <div className="flex items-center gap-3 mb-space-md">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    payments
                  </span>

                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      Secure Checkout
                    </p>

                    <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Payment Method
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Card */}
                  <label
                    className={`payment-card flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "card"
                        ? "bg-surface-container border-primary"
                        : "bg-surface-container-low border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="accent-primary"
                    />

                    <span className="material-symbols-outlined text-secondary">
                      credit_card
                    </span>

                    <div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Credit / Debit Card
                      </p>

                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Secure encrypted payment
                      </p>
                    </div>
                  </label>

                  {/* Bank */}
                  <label
                    className={`payment-card flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "bank"
                        ? "bg-surface-container border-primary"
                        : "bg-surface-container-low border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="accent-primary"
                    />

                    <span className="material-symbols-outlined text-secondary">
                      account_balance
                    </span>

                    <div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Bank Transfer
                      </p>

                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Manual transfer confirmation
                      </p>
                    </div>
                  </label>

                  {/* LINE / Concierge */}
                  <label
                    className={`payment-card flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "concierge"
                        ? "bg-surface-container border-primary"
                        : "bg-surface-container-low border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_method"
                      value="concierge"
                      checked={paymentMethod === "concierge"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="accent-primary"
                    />

                    <span className="material-symbols-outlined text-secondary">
                      support_agent
                    </span>

                    <div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Concierge Assistance
                      </p>

                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Our team will contact you directly
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* ================= TRUST ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-on-surface-variant text-[12px]">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    verified
                  </span>

                  <span>Michelin Standards</span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    sanitizer
                  </span>

                  <span>Rigid Sanitation</span>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    lock
                  </span>

                  <span>Encrypted Escrow</span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="lg:col-span-3 sticky top-24 self-start space-y-space-md">
              {/* Summary Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-lg p-space-md lg:p-space-lg space-y-space-md">
                {/* Header */}
                <div className="flex items-center justify-between pb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Degustation Summary
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />

                    Reserved
                  </span>
                </div>

                {/* Chef Profile Snapshot */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={chefData.image}
                      alt={chefData.name}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                        {chefData.name}
                      </h3>

                      {chefData.rating && (
                        <div className="flex items-center gap-0.5 text-secondary shrink-0">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{
                              fontVariationSettings: "'FILL' 1",
                            }}
                          >
                            star
                          </span>

                          <span className="font-label-md text-label-md font-bold text-on-surface">
                            {chefData.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      {chefData.title}
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-label-sm text-label-sm uppercase px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                        {chefData.tier || otherInfo.tier}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reservation Specs */}
                <div className="space-y-space-xs py-space-xs bg-surface-container-lowest">
                  {/* Menu */}
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      restaurant_menu
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Tasting Menu
                      </p>

                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        {chefData.signatureTitle ||
                          "Signature Tasting Menu"}
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3 pt-2">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      calendar_month
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Availability
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {chefData.availability ||
                          chefData.daySlot ||
                          "Availability confirmed"}
                      </p>

                      {chefData.daySlot && (
                        <p className="font-body-sm text-body-sm text-secondary capitalize">
                          {chefData.daySlot}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Party */}
                  <div className="flex items-start gap-3 pt-2">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      group
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Party Size
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {guestCount}{" "}
                        {guestCount === 1 ? "Guest" : "Guests"}{" "}
                        (Adult Degustation)
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3 pt-2">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      home
                    </span>

                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                        Venue
                      </p>

                      <p className="font-body-md text-body-md text-on-surface font-medium">
                        {otherInfo.venue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="space-y-2 pt-space-xs border-t border-outline-variant/20">
                  {/* Menu */}
                  <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm text-on-surface-variant">
                    <span>
                      {guestCount}x Degustation Tasting Menu (
                      {formatPrice(chefPrice)}/guest)
                    </span>

                    <span className="font-mono text-on-surface whitespace-nowrap">
                      {formatPrice(menuSubtotal)}
                    </span>
                  </div>

                  {/* Wine */}
                  <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm text-on-surface-variant">
                    <span>Wine Pairing</span>

                    {winePairing > 0 ? (
                      <span className="font-mono text-on-surface whitespace-nowrap">
                        {formatPrice(winePairing)}
                      </span>
                    ) : (
                      <span className="text-secondary font-label-sm uppercase tracking-wider font-semibold">
                        Not selected
                      </span>
                    )}
                  </div>

                  {/* Cleanup */}
                  <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm text-on-surface-variant">
                    <span className="flex items-center gap-1.5">
                      <span>Kitchen Sanitary & Ingredient Sourcing</span>

                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        verified
                      </span>
                    </span>

                    <span className="text-secondary font-label-sm uppercase tracking-wider font-semibold">
                      Included
                    </span>
                  </div>

                  {/* Cleanup */}
                  <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm text-on-surface-variant">
                    <span>Full Scullery Cleanup & Service</span>

                    <span className="text-secondary font-label-sm uppercase tracking-wider font-semibold">
                      Included
                    </span>
                  </div>

                  {/* VAT */}
                  <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm text-on-surface-variant">
                    <span>7% VAT Statutory Invoicing</span>

                    <span className="font-mono text-on-surface whitespace-nowrap">
                      {formatPrice(vat)}
                    </span>
                  </div>

                  {/* Discount */}
                  {discount > 0 && (
                    <div className="flex justify-between items-baseline gap-4 font-body-sm text-body-sm">
                      <span className="text-secondary">
                        Booking Discount
                      </span>

                      <span className="font-mono text-secondary">
                        -{formatPrice(discount)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="pt-space-sm border-t border-outline-variant/30">
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                        Total Reservation
                      </p>

                      <p className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                        {formatPrice(total)}
                      </p>
                    </div>

                    <span className="text-[11px] text-on-surface-variant pb-1">
                      THB
                    </span>
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="pt-2">
                  <button
                    className={`w-full print:hidden py-4 px-6 rounded-lg bg-primary hover:bg-on-surface-variant text-on-primary font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors ${
                      isConfirming
                        ? "opacity-80 pointer-events-none"
                        : ""
                    }`}
                    id="confirmBookingBtn"
                    type="button"
                    
                    onClick={handleConfirmBooking}
                  >
                    {isConfirming ? (
                      <>
                        <span className="inline-block animate-spin material-symbols-outlined text-[18px]">
                          progress_activity
                        </span>

                        <span>Securing Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">
                          lock
                        </span>

                        <span>
                          Confirm & Pay {formatPrice(total)}
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-2 text-[12px]">
                    By placing this order you agree to Chef2Home's
                    Residential Service Protocol & Hygiene Standards.
                  </p>
                </div>
              </div>

              {/* Menu Details */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      menu_book
                    </span>

                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Menu Details
                    </span>
                  </div>
                </div>

                {chefData.courses?.length > 0 ? (
                  <div className="space-y-1">
                    {chefData.courses.map((course, index) => (
                      <div
                        key={`${course}-${index}`}
                        className="flex items-start gap-2 py-1 border-b border-outline-variant/20 last:border-none"
                      >
                        <span className="material-symbols-outlined text-[15px] text-secondary mt-0.5">
                          check
                        </span>

                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Menu details will be confirmed by the chef.
                  </p>
                )}
              </div>

              {/* Concierge */}
              <div className="p-3 bg-surface-container rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    support_agent
                  </span>

                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Need private valet or custom floral tablescape?
                  </span>
                </div>

                <button
                  type="button"
                  className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold hover:underline"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER TRUST BADGES ================= */}
        <section className="w-full max-w-[1320px] mx-auto px-margin-sm lg:px-margin pb-space-lg">
          <div className="flex items-center justify-around px-4 py-2 text-on-surface-variant text-[12px]">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified
              </span>

              <span>Michelin Standards</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                sanitizer
              </span>

              <span>Rigid Sanitation</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                lock
              </span>

              <span>Encrypted Escrow</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Receipt;