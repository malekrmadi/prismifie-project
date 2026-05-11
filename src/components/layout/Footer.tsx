import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background: linear-gradient(180deg, #0b0b12 0%, #050508 100%);
          color: #e5e7eb;
          padding: 80px 24px 40px;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
          align-items: start;
        }

        .footer-heading {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #ff5fa2;
          margin-bottom: 18px;
        }

        .footer-text p {
          font-size: 14px;
          line-height: 1.8;
          color: #94a3c8;
          margin: 0 0 6px 0;
        }

        .footer-link {
          display: block;
          font-size: 14px;
          line-height: 1.8;
          color: #94a3c8;
          text-decoration: none;
          margin-bottom: 10px;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ff5fa2;
        }

        .footer-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 20px;
          background: rgba(255, 95, 162, 0.15);
          color: #ff5fa2;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
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
          background: rgba(255, 255, 255, 0.06);
          color: #94a3c8;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 95, 162, 0.3);
        }

        .footer-logo-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-img {
          max-width: 70px;
          height: auto;
          margin-bottom: 16px;
          opacity: 0.85;
        }

        .footer-inspiration {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: #cbd5e6;
          margin-bottom: 10px;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 40px 0 24px;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-size: 13px;
          color: #4b5563;
          letter-spacing: 0.5px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-link {
          font-size: 13px;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-bottom-link:hover {
          color: #ff5fa2;
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

          .footer-logo-img {
            margin-left: auto;
            margin-right: auto;
            display: block;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-container">

          {/* Col 1: Agence */}
          <div>
            <div className="footer-logo-container">
              <img src="/logo.png" alt="Prismifie" className="footer-logo-img" />
              <p className="footer-inspiration">
                « Aidons-nous à façonner l'avenir. »
              </p>
              <p className="footer-inspiration" style={{ fontSize: '13px', opacity: '0.7' }}>
                Clarté · Créativité · Confiance
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="footer-heading">Navigation</h3>
            <Link to="/" className="footer-link">Accueil</Link>
            <Link to="/expertises" className="footer-link">Expertises</Link>
            <Link to="/offres" className="footer-link">Nos offres</Link>
            <Link to="/realisations" className="footer-link">Réalisations</Link>
            <Link to="/a-propos" className="footer-link">À propos</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Col 3: Expertises */}
          <div>
            <h3 className="footer-heading">Expertises</h3>
            <Link to="/event" className="footer-link">🎭 Événementiel</Link>
            <Link to="/conseil" className="footer-link">🎯 Conseil stratégique</Link>
            <Link to="/marketing" className="footer-link">📣 Marketing & Communication</Link>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-text">
              <p>Marketing@prismifie.fr</p>
              <p>01 82 83 15 14</p>
              <p style={{ marginTop: '12px' }}>52 rue Carves</p>
              <p>92120 Montrouge</p>
            </div>
            <h3 className="footer-heading" style={{ marginTop: '24px' }}>Suivez-nous</h3>
            <div className="footer-socials">
              <a href="https://www.instagram.com/prismifie_?igsh=bmczazhsdzgyN3lo&utm_source=qr" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={17} />
              </a>
              <a href="https://www.tiktok.com/@prismifie.consult" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 800 }}>
                TT
              </a>
              <a href="https://www.linkedin.com/company/110417500/admin/dashboard/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" style={{ maxWidth: '1280px', margin: '40px auto 24px' }} />

        <div className="footer-bottom">
          <p className="footer-copy">PRISMIFIE © {new Date().getFullYear()}  Tous droits réservés</p>
          <div className="footer-bottom-links">
            <Link to="/contact" className="footer-bottom-link">Contact</Link>
            <Link to="/a-propos" className="footer-bottom-link">À propos</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
