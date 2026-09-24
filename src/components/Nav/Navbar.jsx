import { useState,useEffect } from "react";
import { useNavigate,Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
const handleNavigate = (path) => {
  console.log("path",path)
  navigate(path);
 
}
const [activeButton, setActiveButton] = useState("home");
useEffect(() => {
  console.log(activeButton)
}, [activeButton]);
  const handleAboutClick = (e) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      document.getElementById("about-us")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about-us")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-50 border-b border-brand-border/60 shadow-[0_1px_8px_rgba(26,23,21,0.04)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          aria-label="Chef2Home Homepage"
          className="flex items-center gap-1.5 group focus:outline-none"
          href="/"
        >
          <span className="font-editorial text-2xl sm:text-[26px] font-bold tracking-tight text-brand-dark transition-colors group-hover:text-brand-ochre">
            Chef2Home
          </span>

          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-ochre translate-y-[2px] transition-transform group-hover:scale-125" />
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-6">

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-1.5 text-sm font-medium text-brand-muted"
          >
         <a
  className={
    activeButton === "home"
      ? "px-4 py-1.5 rounded-full bg-brand-surface text-brand-dark font-semibold shadow-sm transition-all hover:bg-stone-200/70"
      : "px-3.5 py-1.5 rounded-full hover:text-brand-dark transition-colors"
  }
  href="/"
  onClick={() => setActiveButton("home")}
>
  Home
</a>

{/* About Us */}
<a
  className={
    activeButton === "about"
      ? "px-4 py-1.5 rounded-full bg-brand-surface text-brand-dark font-semibold shadow-sm transition-all hover:bg-stone-200/70"
      : "px-3.5 py-1.5 rounded-full hover:text-brand-dark transition-colors"
  }
  href="#about-us"
  onClick={(e) => {
    handleAboutClick(e);
    setActiveButton("about");
  }}
>
  About us
</a>

   <Link
  className={
    activeButton === "bookings"
      ? "px-4 py-1.5 rounded-full bg-brand-surface text-brand-dark font-semibold shadow-sm transition-all hover:bg-stone-200/70"
      : "px-3.5 py-1.5 rounded-full hover:text-brand-dark transition-colors"
  }
  to="/bookings"
  onClick={() => setActiveButton("bookings")}
>
  Bookings
</Link>

            <NavLink to="/chefs"
               className={
    activeButton === "chefs"
      ? "px-4 py-1.5 rounded-full bg-brand-surface text-brand-dark font-semibold shadow-sm transition-all hover:bg-stone-200/70"
      : "px-3.5 py-1.5 rounded-full hover:text-brand-dark transition-colors"
  }  onClick={() => {

    setActiveButton("chefs");
    
  }}
            >
              Chefs
            </NavLink>

            <NavLink
          className={
    activeButton === "blogs"
      ? "px-4 py-1.5 rounded-full bg-brand-surface text-brand-dark font-semibold shadow-sm transition-all hover:bg-stone-200/70"
      : "px-3.5 py-1.5 rounded-full hover:text-brand-dark transition-colors"
  }  onClick={() => {

    setActiveButton("blogs");
    
  }}
              to="/blogs"
        
            >
              Blogs
            </NavLink>
          </nav>

          {/* Currency */}
          <div className="flex items-center pl-2 md:pl-4 border-l border-brand-border/80">
            <button
              aria-label="Change currency and language. Current setting: THB and English"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border bg-white/70 hover:bg-white text-xs font-semibold text-brand-charcoal transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-ochre/30"
              type="button"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4.03 4.5-9S14.5 3 12 3m0 18c-2.5 0-4.5-4.03-4.5-9S9.5 3 12 3m-9 9h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>THB (฿) | EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open mobile navigation menu"
            className="md:hidden p-2 rounded-lg text-brand-muted hover:text-brand-dark focus:outline-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#FAF8F5] border-t border-brand-border/60 flex flex-col gap-3 text-sm font-medium text-brand-charcoal">
          <a
            className="py-1 font-semibold text-brand-dark"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>

          {/* About Us */}
          <a
            className="py-1"
            href="#about-us"
            onClick={handleAboutClick}
          >
            About us
          </a>

          <a
            className="py-1"
            href="/bookings"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bookings
          </a>

          <a
            className="py-1"
            href="/welcome#guided-steps"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chefs
          </a>

          <a
            className="py-1"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;