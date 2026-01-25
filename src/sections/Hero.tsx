import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: 'url(/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 50px",
      }}
    >
      {/* ===== CSS LOCAL HERO ===== */}
      <style>{`
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-logo-container {
          width: 100%;
          max-width: 380px;
          margin: 0 auto 24px;
        }

        .hero-logo-img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
        }

        .hero-tagline {
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          color: #555;
          margin-bottom: 48px;
          font-style: italic;
        }

        .hero-pillars {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 32px;
        }

        .hero-pillar-item {
          padding: 12px 24px;
          border-radius: 8px;
          transition: all 0.4s ease;
          cursor: default;
        }

        .hero-pillar-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(255, 95, 162, 0.25);
          background: linear-gradient(135deg, rgba(255, 95, 162, 0.08), rgba(123, 92, 255, 0.08));
        }

        .hero-pillar-separator {
          width: 2px;
          height: 24px;
          background: linear-gradient(to bottom, #ff5fa2, #7b5cff);
        }

        .hero-buttons {
          margin-bottom: 48px;
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 24px;
        }

        .scroll-text {
          font-size: 12px;
          font-weight: 500;
          color: #333;
          margin-bottom: 8px;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          border-radius: 1px;
          background: linear-gradient(to bottom, transparent, #333, transparent);
        }

        @media (max-width: 768px) {
          .hero-pillars {
            font-size: 16px;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <div className="hero-container">
        {/* 2D Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-logo-container"
        >
          <motion.img
            src="/logo.png"
            alt="prismifie Logo"
            className="hero-logo-img"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-tagline"
        >
          « Aidons-nous à façonner l'avenir »
        </motion.p>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-pillars"
        >
          <span className="hero-pillar-item">Marketing</span>
          <div className="hero-pillar-separator" />
          <span className="hero-pillar-item">Consulting</span>
          <div className="hero-pillar-separator" />
          <span className="hero-pillar-item">Performance</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
        >
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Découvrir la vision
          </Button>
        </motion.div>


      </div>
    </section>
  );
}
