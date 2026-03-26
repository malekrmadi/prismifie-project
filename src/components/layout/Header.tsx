import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

const expertisesLinks = [
  { name: "Événementiel", href: "/event", icon: "🎭" },
  { name: "Conseil stratégique", href: "/conseil", icon: "🎯" },
  { name: "Marketing & Communication", href: "/marketing", icon: "📣" },
];

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Expertises", href: "/expertises", hasDropdown: true },
  { name: "Offres", href: "/offres" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false);
  const [isMobileExpertisesOpen, setIsMobileExpertisesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsExpertisesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsExpertisesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .header.transparent {
          background: transparent;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          height: 72px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .logo {
          font-family: "Hicloser", sans-serif;
          font-size: 20px;
          color: #ff5fa2;
          letter-spacing: 0.5px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          font-size: 15px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.2s ease;
          white-space: nowrap;
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover, .nav-link.active {
          color: #ff5fa2;
          background: rgba(255, 95, 162, 0.06);
        }

        .nav-link.expertises-btn {
          color: #1a1a1a;
          font-weight: 700;
        }

        .nav-link.expertises-btn:hover {
          color: #ff5fa2;
        }

        /* Expertises Dropdown */
        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 16px;
          padding: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.04);
          min-width: 280px;
          z-index: 200;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 10px;
          text-decoration: none;
          color: #333;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(255, 95, 162, 0.06);
          color: #ff5fa2;
        }

        .dropdown-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 95, 162, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .dropdown-label {
          font-size: 15px;
          font-weight: 600;
        }

        /* Header CTA */
        .header-cta {
          flex-shrink: 0;
        }

        .header-cta-btn {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          font-family: inherit;
        }

        .header-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 95, 162, 0.35);
        }

        /* Mobile toggle */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          padding: 4px;
        }

        /* Mobile menu */
        .mobile-menu {
          background: white;
          padding: 20px 24px 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border-top: 1px solid #f0f0f0;
        }

        .mobile-menu-link {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f5f5f5;
          transition: color 0.2s;
        }

        .mobile-menu-link:hover {
          color: #ff5fa2;
        }

        .mobile-expertise-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          background: none;
          border: none;
          border-bottom: 1px solid #f5f5f5;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .mobile-sub-links {
          padding: 8px 0 4px 16px;
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          font-size: 15px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          border-bottom: 1px solid #fafafa;
        }

        .mobile-sub-link:hover {
          color: #ff5fa2;
        }

        .mobile-cta-wrapper {
          margin-top: 20px;
        }

        @media (max-width: 900px) {
          .nav,
          .header-cta {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
        <div className="header-container">

          {/* LOGO */}
          <Link to="/" className="logo">
            <img src="/prismifie-text-header.png" alt="Prismifie" style={{ height: '72px', maxWidth: '220px', objectFit: 'contain' }} />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="nav">
            {navLinks.map(link => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="dropdown-wrapper" ref={dropdownRef}>
                    <button
                      className={`nav-link expertises-btn${location.pathname.startsWith('/event') || location.pathname.startsWith('/conseil') || location.pathname.startsWith('/marketing') || location.pathname === '/expertises' ? ' active' : ''}`}
                      onClick={() => setIsExpertisesOpen(v => !v)}
                      onMouseEnter={() => setIsExpertisesOpen(true)}
                    >
                      {link.name}
                      <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: isExpertisesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>

                    <AnimatePresence>
                      {isExpertisesOpen && (
                        <motion.div
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setIsExpertisesOpen(false)}
                        >
                          {expertisesLinks.map(exp => (
                            <Link key={exp.href} to={exp.href} className="dropdown-item">
                              <span className="dropdown-icon">{exp.icon}</span>
                              <span className="dropdown-label">{exp.name}</span>
                            </Link>
                          ))}
                          <div style={{ borderTop: '1px solid #f0f0f0', margin: '8px 0 0' }}>
                            <Link to="/expertises" className="dropdown-item" style={{ fontSize: 13, color: '#888', fontWeight: 500 }}>
                              Voir toutes les expertises →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link${location.pathname === link.href ? ' active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="header-cta">
            <Link to="/contact" className="header-cta-btn">
              Demander un devis
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Link to="/" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>

              {/* Expertises dropdown mobile */}
              <button
                className="mobile-expertise-toggle"
                onClick={() => setIsMobileExpertisesOpen(v => !v)}
              >
                <span>Expertises</span>
                <ChevronDown size={16} style={{ transform: isMobileExpertisesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>

              <AnimatePresence>
                {isMobileExpertisesOpen && (
                  <motion.div
                    className="mobile-sub-links"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Link to="/expertises" className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                      🌐 Toutes les expertises
                    </Link>
                    {expertisesLinks.map(exp => (
                      <Link key={exp.href} to={exp.href} className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                        {exp.icon} {exp.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/offres" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Offres</Link>
              <Link to="/a-propos" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
              <Link to="/contact" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <div className="mobile-cta-wrapper">
                <Link to="/contact" className="header-cta-btn" onClick={() => setIsMobileMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
