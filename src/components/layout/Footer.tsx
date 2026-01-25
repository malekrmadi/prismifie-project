import { Github, Linkedin, Twitter } from "lucide-react";

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
          margin: 0;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          margin-top: 8px;
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
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #ff5fa2, #7b5cff);
          color: white;
          transform: translateY(-2px);
        }

        .footer-inspiration {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          color: #f1f5f9;
          max-width: 260px;
        }

        .footer-copy {
          margin-top: 24px;
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

          .footer-inspiration {
            margin: 0 auto;
          }
        }
      `}</style>

            {/* ===== FOOTER ===== */}
            <footer className="footer-section">
                <div className="footer-container">

                    {/* Col 1: Adresse */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Adresse</h3>
                        <div className="footer-text">
                            <p>123 Avenue de la Clarté</p>
                            <p>75000 Paris, France</p>
                        </div>
                    </div>

                    {/* Col 2: Contact */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Contact</h3>
                        <div className="footer-text">
                            <p>hello@prismify.com</p>
                            <p>+33 1 23 45 67 89</p>
                        </div>
                    </div>

                    {/* Col 3: Socials */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Suivez-nous</h3>
                        <div className="footer-socials">
                            <a href="#" className="social-icon">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="social-icon">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="social-icon">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 4: Inspiration */}
                    <div className="footer-col">
                        <p className="footer-inspiration">
                            « Aidons-nous à façonner l’avenir. »
                        </p>
                        <p className="footer-copy">
                            PRISMIFIE © {new Date().getFullYear()}
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
}
