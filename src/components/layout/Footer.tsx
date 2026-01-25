import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* ===== CSS LOCAL FOOTER ===== */}
      <style>{`
        .footer-section {
          background: linear-gradient(180deg, #0b0b12 0%, #050508 100%);
          color: #e5e7eb;
          padding: 80px 24px 40px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          align-items: start;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #ff5fa2;
          margin-bottom: 16px;
        }

        .footer-text p {
          font-size: 14px;
          line-height: 1.8;
          color: #cbd5f5;
          margin: 0 0 8px 0;
        }

        .footer-link {
          display: block;
          font-size: 14px;
          line-height: 1.8;
          color: #cbd5f5;
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #ff5fa2;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5f5;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #ff5fa2, #7b5cff);
          color: white;
          transform: translateY(-2px);
        }

        .footer-logo-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-img {
          max-width: 80px;
          height: auto;
          margin-bottom: 16px;
          opacity: 0.9;
        }

        .footer-inspiration {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.6;
          color: #f1f5f9;
          margin-bottom: 12px;
        }

        .footer-copy {
          margin-top: 16px;
          font-size: 12px;
          color: #94a3b8;
          letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }

          .footer-logo-container {
            align-items: center;
          }

          .footer-inspiration {
            text-align: center;
          }

          .footer-logo-img {
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
        }
      `}</style>

      {/* ===== FOOTER ===== */}
      <footer className="footer-section">
        <div className="footer-container">

          {/* Col 1: À propos */}
          <div className="footer-col">
            <h3 className="footer-heading">À propos</h3>
            <div className="footer-text">
              <p>prismifie transforme vos idées en stratégies claires et impactantes.</p>
              <p style={{ marginTop: '16px' }}>123 Avenue de la Clarté</p>
              <p>75000 Paris, France</p>
            </div>
          </div>

          {/* Col 2: Liens rapides */}
          <div className="footer-col">
            <h3 className="footer-heading">Liens rapides</h3>
            <a href="#concept" className="footer-link">Concept</a>
            <a href="#about" className="footer-link">À propos</a>
            <a href="#prestations" className="footer-link">Services</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Col 3: Contact & Socials */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-text">
              <p>hello@prismifie.com</p>
              <p>+33 1 23 45 67 89</p>
            </div>
            <h3 className="footer-heading" style={{ marginTop: '24px' }}>Suivez-nous</h3>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                TT
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 4: Logo + Inspiration */}
          <div className="footer-col">
            <div className="footer-logo-container">
              <img src="/logo.png" alt="prismifie" className="footer-logo-img" />
              <p className="footer-inspiration">
                « Aidons-nous à façonner l'avenir. »
              </p>
              <p className="footer-inspiration" style={{ fontSize: '13px', opacity: '0.8' }}>
                Clarté · Créativité · Confiance
              </p>
              <p className="footer-copy">
                PRISMIFIE © {new Date().getFullYear()}
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
