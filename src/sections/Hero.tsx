import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      style={{
        backgroundImage: 'url(/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .hero-logo-container {
          width: 100%;
          max-width: 320px;
          margin: 0 auto 32px;
        }

        .hero-logo-img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
        }

        .hero-main-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 5vw, 58px);
          font-weight: 800;
          color: #111;
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 820px;
        }

        .hero-main-title .gradient-word {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2.2vw, 20px);
          color: #555;
          max-width: 640px;
          line-height: 1.65;
          margin-bottom: 40px;
        }

        .hero-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 64px;
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 95, 162, 0.4);
        }

        .hero-btn-secondary {
          background: transparent;
          color: #333;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          padding: 14px 34px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .hero-btn-secondary:hover {
          border-color: #ff5fa2;
          color: #ff5fa2;
        }

        .hero-pillars {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          color: #555;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-pillar-item {
          padding: 10px 20px;
          border: 1px solid #e5e7eb;
          border-radius: 50px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }

        .hero-pillar-item:hover {
          border-color: #ff5fa2;
          color: #ff5fa2;
          background: rgba(255, 95, 162, 0.04);
        }

        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.4;
        }

        .hero-scroll-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #555;
        }

        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #555, transparent);
          animation: scrollBounce 1.5s ease-in-out infinite;
        }

        @keyframes scrollBounce {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.1); }
        }
      `}</style>

      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-logo-container"
        >
          <motion.img
            src="/logo.png"
            alt="Prismifie Logo"
            className="hero-logo-img"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1
          className="hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nous transformons la <span className="gradient-word">complexité technique</span> en stratégie{" "}
          <span className="gradient-word">claire, visible</span> et performante.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Agence B2B premium — Événementiel, Conseil stratégique, Marketing & Communication.
          Nous construisons des systèmes de croissance mesurables pour les entreprises ambitieuses.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/contact" className="hero-btn-primary">
            Demander un devis ✦
          </Link>
          <Link to="/expertises" className="hero-btn-secondary">
            Découvrir nos expertises →
          </Link>
        </motion.div>

        <motion.div
          className="hero-pillars"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="hero-pillar-item">🎭 Événementiel</span>
          <span className="hero-pillar-item">🎯 Conseil stratégique</span>
          <span className="hero-pillar-item">📣 Marketing B2B</span>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
