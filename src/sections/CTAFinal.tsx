import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CTAFinalProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTAFinal({
  title = "Prêt à transformer votre stratégie ?",
  subtitle = "Échangeons sur vos enjeux. Un premier appel suffit pour identifier comment nous pouvons vous aider à avancer.",
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel = "Découvrir nos offres",
  secondaryHref = "/offres",
}: CTAFinalProps) {
  return (
    <section style={{ padding: "100px 24px" }}>
      <style>{`
        .cta-final-wrapper {
          max-width: 820px;
          margin: 0 auto;
          background: linear-gradient(135deg, #ff5fa2, #f97316 60%, #a855f7);
          border-radius: 28px;
          padding: 72px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-final-wrapper::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
        }

        .cta-final-wrapper::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
        }

        .cta-final-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .cta-final-subtitle {
          font-size: 17px;
          color: rgba(255,255,255,0.82);
          line-height: 1.65;
          max-width: 520px;
          margin: 0 auto 40px;
          position: relative;
          z-index: 1;
        }

        .cta-final-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .cta-final-btn-primary {
          background: white;
          color: #ff5fa2;
          border: none;
          border-radius: 50px;
          padding: 16px 38px;
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

        .cta-final-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .cta-final-btn-secondary {
          background: rgba(255,255,255,0.15);
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .cta-final-btn-secondary:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.5);
        }

        @media (max-width: 640px) {
          .cta-final-wrapper {
            padding: 48px 24px;
          }
        }
      `}</style>

      <motion.div
        className="cta-final-wrapper"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="cta-final-title">{title}</h2>
        <p className="cta-final-subtitle">{subtitle}</p>
        <div className="cta-final-btns">
          <Link to={primaryHref} className="cta-final-btn-primary">
            {primaryLabel} ✦
          </Link>
          <Link to={secondaryHref} className="cta-final-btn-secondary">
            {secondaryLabel} →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
