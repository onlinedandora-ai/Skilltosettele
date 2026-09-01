import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = (localStorage.getItem("skillsettle-theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("skillsettle-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses", hasDropdown: true },
    { label: "Classes", path: "/live-classes" },
    { label: "Quiz", path: "/career-finder", badge: "Career" },
    { label: "Instructors", path: "/instructors" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.navbarPill}>
          {/* Logo */}
          <div className={styles.logoWrap}>
            <Logo variant={theme === "dark" ? "light" : "dark"} size="md" />
          </div>

          {/* Search bar inside header like in screenshot */}
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search for course, skills and Videos"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </form>

          {/* Desktop Navigation Tabs */}
          <nav className={styles.desktopNav}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className={styles.dropdownWrapper}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                    >
                      {item.label}
                      <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </Link>

                    {dropdownOpen && (
                      <div className={styles.megaMenu}>
                        <div className={styles.megaHeader}>
                          <span className={styles.megaLabel}>POPULAR TRACKS</span>
                          <Link to="/courses" className={styles.megaAll}>View All 100+ →</Link>
                        </div>
                        <div className={styles.megaGrid}>
                          <Link to="/courses?category=cloud-devops" className={styles.megaItem}>
                            <span className={styles.megaIcon}>☁️</span>
                            <div>
                              <div className={styles.megaTitle}>Cloud & DevOps</div>
                              <div className={styles.megaSub}>AWS, Azure, Docker, Kubernetes</div>
                            </div>
                          </Link>
                          <Link to="/courses?category=ai-data" className={styles.megaItem}>
                            <span className={styles.megaIcon}>🧠</span>
                            <div>
                              <div className={styles.megaTitle}>AI & Data Science</div>
                              <div className={styles.megaSub}>GenAI, Python, ML, Power BI</div>
                            </div>
                          </Link>
                          <Link to="/courses?category=fullstack" className={styles.megaItem}>
                            <span className={styles.megaIcon}>💻</span>
                            <div>
                              <div className={styles.megaTitle}>Full Stack Dev</div>
                              <div className={styles.megaSub}>React, Node, Java, .NET</div>
                            </div>
                          </Link>
                          <Link to="/courses?category=business" className={styles.megaItem}>
                            <span className={styles.megaIcon}>📊</span>
                            <div>
                              <div className={styles.megaTitle}>Business & Agile</div>
                              <div className={styles.megaSub}>Business Analyst, Scrum, PMO</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {item.label}
                  {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Sun/Moon Toggle & Sign In */}
          <div className={styles.navActions}>
            {/* Sun & Moon Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={styles.themeToggleBtn}
              title={theme === "light" ? "Switch to Night Mode" : "Switch to Day Mode"}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <span className={styles.sunIcon} role="img" aria-label="Sun">☀️</span>
              ) : (
                <span className={styles.moonIcon} role="img" aria-label="Moon">🌙</span>
              )}
            </button>

            {/* Sign In Button */}
            <Link to="/courses" className={styles.signInBtn}>
              Sign In
            </Link>

            {/* Hamburger Mobile Toggle */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ""}`}></span>
              <span className={`${styles.bar} ${mobileOpen ? styles.bar2Open : ""}`}></span>
              <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ""}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)}>
          <div className={styles.mobileDrawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileHeader}>
              <div className={styles.mobileBrand}>Skillsettle Menu</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={toggleTheme}
                  className={styles.themeToggleBtn}
                  aria-label="Toggle Theme"
                >
                  {theme === "light" ? "☀️" : "🌙"}
                </button>
                <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕</button>
              </div>
            </div>

            {/* Mobile Search */}
            <form className={styles.mobileSearchForm} onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search for course, skills and Videos"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearchInput}
              />
              <button type="submit" className={styles.mobileSearchBtn}>🔍</button>
            </form>
            
            <div className={styles.mobileLinksList}>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={styles.mobileItem}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={styles.mobileItemLabel}>{item.label}</span>
                  {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
                  <span className={styles.arrow}>→</span>
                </Link>
              ))}
            </div>

            <div className={styles.mobileCtasBox}>
              <Link to="/career-finder" className="btn btn-primary w-full" onClick={() => setMobileOpen(false)}>
                🎯 Start Career Quiz
              </Link>
              <Link to="/courses" className={styles.mobileSignInBtn} onClick={() => setMobileOpen(false)}>
                Sign In / Explore Courses →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
