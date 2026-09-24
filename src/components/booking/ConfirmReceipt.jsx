
const ConfirmReceipt = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1140px] mx-auto px-margin-sm lg:px-margin py-space-lg lg:py-space-xl ${className}`}
    >
      {/* ================= OFFICIAL RECEIPT VOUCHER ================= */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_40px_-8px_rgba(26,23,21,0.06)] overflow-hidden mb-space-xl">
        {/* ================= RECEIPT HEADER ================= */}
        <div className="bg-surface-container p-space-md lg:px-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-md">
            <div className="flex items-baseline gap-1">
              <span className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Chef2Home
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            </div>

            <span className="text-outline text-label-sm">|</span>

            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
              Official Gastronomic Voucher
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span>
              Ref:{" "}
              <strong className="text-on-surface">#C2H-89421</strong>
            </span>

            <span>•</span>

            <span>Issued: Oct 28, 2025</span>

            <span>•</span>

            <span className="inline-flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              PromptPay Escrow Cleared
            </span>
          </div>
        </div>

        {/* ================= RECEIPT CONTENT ================= */}
        <div className="p-space-lg lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-space-lg">
            <div className="space-y-space-md">
              {/* Section Header */}
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  01 • Logistics & Service Site
                </span>

                <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2.5 py-1 rounded-full">
                  Private Residence
                </span>
              </div>

              {/* Host + Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {/* Host */}
                <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                    Host Client
                  </span>

                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    Alexandre de M.
                  </p>

                  <div className="pt-1 text-on-surface-variant space-y-0.5">
                    <p className="font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        phone
                      </span>
                      +66 81 234 5678
                    </p>

                    <p className="font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        alternate_email
                      </span>
                      alexandre@sathorn.com
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                    Curated Timestamp
                  </span>

                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    Fri, Nov 14, 2025
                  </p>

                  <div className="pt-1 text-on-surface-variant space-y-0.5">
                    <p className="font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        dinner_dining
                      </span>
                      Dinner Service: <strong>18:30 ICT</strong>
                    </p>

                    <p className="font-body-sm text-body-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        countertops
                      </span>
                      Chef Arrival: <strong>17:00 ICT</strong> (-90m)
                    </p>
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    location_on
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">
                    Verified Location
                  </span>

                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    Penthouse A, The Met Sathorn
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    88 Soi Sathorn 1, Thung Maha Mek, Sathon, Bangkok 10120
                  </p>

                  <span className="inline-block mt-1 font-label-sm text-label-sm text-secondary bg-surface-container-highest px-2 py-0.5 rounded">
                    Security clearance & resident lift access logged
                  </span>
                </div>
              </div>

           
            </div>

            {/* ================= CHEF ================= */}
            <div className="bg-surface-container p-space-md rounded-lg flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-high flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3STlu52Cel0B15-hJMN_1RMbxP9l16MmLzRRyyGzigZkQ4syqsSbCKB02VCGb83V3ylzvmQB36dk_QJGh1inPwzxnZKBA8n2lJidVKQW43_40sYtoZgtdXyG3sGX7lDVhVXGo3RH_NvPZn3UlxwqVGdOKJAjhPTdUXgPLaXeYDD_9kA6GW_M_dWiRO702sWcUYYqJfIgc3N-GJps_xxs17VVZTfY7KPkd494nQla6-L1BOuFY1AVy"
                    alt="Chef Kittisak Voranant"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Chef Kittisak Voranant
                    </h2>

                    <span className="font-label-sm text-label-sm bg-surface-container-highest px-1.5 py-0.2 rounded text-secondary font-semibold">
                      Ex-Le Normandie 2★
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lead Culinary Artist • Contemporary Franco-Thai
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="print-hidden hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded bg-surface-container-highest text-on-surface hover:text-secondary font-label-md text-label-md transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chat
                </span>

                <span>Direct Note</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-5 bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  02 • Degustation & Statement
                </span>

                <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface bg-surface-container px-2 py-0.5 rounded">
                  4 Guests
                </span>
              </div>

              {/* Degustation Profile */}
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-snug">
                  5-Course Siam Terroir Duck & Truffle Degustation
                </h3>

         
              </div>

           

              {/* Ledger */}
              <div className="space-y-space-xs pt-space-xs">
                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-on-surface">
                  <span>
                    4x 5-Course Tasting Menu{" "}
                    <span className="text-on-surface-variant">
                      @ ฿3,200
                    </span>
                  </span>

                  <span className="font-medium text-on-surface">
                    ฿12,800
                  </span>
                </div>

                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-on-surface">
                  <span>
                    2x Grand Cru Sommelier Wine Pairing{" "}
                    <span className="text-on-surface-variant">
                      @ ฿1,850
                    </span>
                  </span>

                  <span className="font-medium text-on-surface">
                    ฿3,700
                  </span>
                </div>

                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-on-surface">
                  <span className="flex items-center gap-1">
                    <span>White Glove Table Staging & Cleaning</span>

                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      stars
                    </span>
                  </span>

                  <span className="text-secondary font-semibold">
                    Complimentary (฿0)
                  </span>
                </div>

                <div className="pt-2 mt-2 bg-surface-container-high h-[1px]" />

                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>฿16,500</span>
                </div>

                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-secondary">
                  <span className="flex items-center gap-1">
                    <span>Welcome Privileges Voucher</span>

                    <span className="font-label-sm text-label-sm px-1.5 bg-surface-container text-on-surface rounded font-mono">
                      WELCOME-CHEF
                    </span>
                  </span>

                  <span className="font-medium">-฿1,391</span>
                </div>

                <div className="flex items-baseline justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>Value Added Tax (7% VAT)</span>
                  <span>฿1,155</span>
                </div>

                <div className="pt-2 mt-2 bg-surface-container-high h-[1px]" />

                {/* Grand Total */}
                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold block">
                      Total Paid
                    </span>

                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      All Taxes & Gratuity Covered
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                      ฿16,264
                    </span>

                    <span className="font-label-sm text-label-sm block text-on-surface-variant">
                      THB Net
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Footer */}
            <div className="mt-space-md pt-space-sm bg-surface-container-high/60 -mx-space-lg -mb-space-lg p-space-md rounded-b-lg space-y-1">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Transaction ID:</span>

                <span className="font-mono text-on-surface font-medium select-all">
                  TXN_884920491028
                </span>
              </div>

              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>Payment Protocol:</span>

                <span className="text-on-surface font-medium">
                  PromptPay QR (BBL / SCB Verified)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmReceipt;

