import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sendContactEmails } from "../utils/emailjs";

const budgets = [
  "Moins de 1 000€",
  "1 000 – 3 000€",
  "3 000 – 10 000€",
  "Plus de 10 000€",
  "Je ne sais pas encore",
];

const expertises = [
  "Événementiel",
  "Conseil stratégique",
  "Marketing & Communication",
  "Plusieurs expertises",
  "Je ne sais pas encore",
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", expertise: "", need: "", budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const result = await sendContactEmails(form);
    
    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer plus tard.");
    }
  }

  return (
    <div>
      <style>{`
        .contact-page-hero {
          padding: 140px 24px 64px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.04), rgba(249,115,22,0.04));
        }

        .contact-page-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff5fa2;
          display: block; margin-bottom: 20px;
        }

        .contact-page-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #111; margin-bottom: 20px;
        }

        .contact-page-desc {
          font-size: 18px; color: #555;
          max-width: 560px; margin: 0 auto; line-height: 1.7;
        }

        .contact-page-body {
          padding: 64px 24px 100px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .contact-form-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          padding: 48px 44px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.05);
        }

        .contact-form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px; font-weight: 800; color: #111; margin-bottom: 32px;
        }

        .form-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;
        }

        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }

        .form-label {
          font-size: 13px; font-weight: 600; color: #444;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        .form-input, .form-select, .form-textarea {
          background: #f9f9fb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 15px;
          color: #111;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          width: 100%;
          outline: none;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #ff5fa2;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(255,95,162,0.12);
        }

        .form-textarea { min-height: 120px; resize: vertical; }
        .form-select { appearance: none; cursor: pointer; }

        .form-optional { font-size: 11px; color: #aaa; font-weight: 500; margin-left: 6px; }

        .form-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white; border: none; border-radius: 50px;
          padding: 18px 36px;
          font-size: 16px; font-weight: 700; cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255,95,162,0.35);
        }

        .form-note {
          font-size: 13px; color: #aaa; text-align: center; margin-top: 16px;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: sticky;
          top: 100px;
        }

        .contact-info-card {
          background: #f9f9fb;
          border-radius: 18px; padding: 28px;
          border: 1px solid #f0f0f0;
        }

        .contact-info-icon { font-size: 28px; margin-bottom: 12px; display: block; }

        .contact-info-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 700; color: #111; margin-bottom: 8px;
        }

        .contact-info-text { font-size: 14px; color: #666; line-height: 1.65; }

        .contact-info-link {
          color: #ff5fa2; font-weight: 600; text-decoration: none; display: block; margin-top: 4px;
        }

        .contact-info-link:hover { text-decoration: underline; }

        .contact-quick-links {
          padding: 20px;
          background: linear-gradient(135deg, rgba(255,95,162,0.06), rgba(249,115,22,0.06));
          border-radius: 18px;
          border: 1px solid rgba(255,95,162,0.12);
        }

        .contact-quick-title {
          font-size: 14px; font-weight: 700; color: #111; margin-bottom: 14px;
        }

        .contact-quick-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 0; font-size: 14px; font-weight: 500; color: #555;
          text-decoration: none; border-bottom: 1px solid #f0f0f0;
          transition: color 0.2s;
        }

        .contact-quick-link:last-child { border-bottom: none; }
        .contact-quick-link:hover { color: #ff5fa2; }

        .contact-success {
          text-align: center; padding: 48px 24px;
          max-width: 540px; margin: 0 auto;
          background: white; border-radius: 24px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }

        .contact-success-icon { font-size: 56px; margin-bottom: 20px; display: block; }

        @media (max-width: 900px) {
          .contact-page-body {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 32px 24px;
          }
          .contact-info-panel {
            position: static;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero */}
      <header className="contact-page-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="contact-page-label">Contact</span>
          <h1 className="contact-page-title">Parlons de votre projet</h1>
          <p className="contact-page-desc">
            Remplissez ce formulaire et nous reviendrons vers vous sous 48h avec une réponse personnalisée.
          </p>
        </motion.div>
      </header>

      {/* Body */}
      <div className="contact-page-body">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {submitted ? (
            <div className="contact-success">
              <span className="contact-success-icon">🎉</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 800, color: '#111', marginBottom: 16 }}>
                Message envoyé !
              </h2>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.65, marginBottom: 28 }}>
                Merci pour votre message. Nous analyserons votre demande avec attention et reviendrons vers vous sous 48h.
              </p>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'linear-gradient(135deg, #ff5fa2, #f97316)', color: 'white', borderRadius: 50, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <div className="contact-form-card">
              <h2 className="contact-form-title">Votre demande</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Votre nom *</label>
                    <input
                      className="form-input"
                      type="text" name="name" required
                      placeholder="Jean Dupont"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Votre entreprise *</label>
                    <input
                      className="form-input"
                      type="text" name="company" required
                      placeholder="Acme Corp"
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Email *</label>
                    <input
                      className="form-input"
                      type="email" name="email" required
                      placeholder="jean@entreprise.fr"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Téléphone <span className="form-optional">(optionnel)</span></label>
                    <input
                      className="form-input"
                      type="tel" name="phone"
                      placeholder="06 00 00 00 00"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Expertise concernée *</label>
                  <select
                    className="form-select"
                    name="expertise" required
                    value={form.expertise} onChange={handleChange}
                  >
                    <option value="">Sélectionnez une expertise</option>
                    {expertises.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Décrivez votre besoin *</label>
                  <textarea
                    className="form-textarea"
                    name="need" required
                    placeholder="Décrivez votre projet, vos enjeux actuels, ce que vous recherchez..."
                    value={form.need}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Budget envisagé <span className="form-optional">(optionnel)</span></label>
                  <select
                    className="form-select"
                    name="budget"
                    value={form.budget} onChange={handleChange}
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                {error && (
                  <div style={{ color: '#ef4444', backgroundColor: '#fef2f2', padding: '12px', borderRadius: '8px', fontSize: '14px', marginBottom: '16px', border: '1px solid #fee2e2' }}>
                    {error}
                  </div>
                )}
                
                <button type="submit" className="form-submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande ✦'}
                </button>
                <p className="form-note">Réponse garantie sous 48h ouvrées · Échange confidentiel</p>
              </form>
            </div>
          )}
        </motion.div>

        {/* Info Panel */}
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="contact-info-card">
            <span className="contact-info-icon">📍</span>
            <h3 className="contact-info-title">Adresse</h3>
            <p className="contact-info-text">52 rue Carves<br />92120 Montrouge, France</p>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon">📬</span>
            <h3 className="contact-info-title">Email & Téléphone</h3>
            <a href="mailto:Marketing@prismifie.fr" className="contact-info-link">Marketing@prismifie.fr</a>
            <a href="tel:+33182831514" className="contact-info-link">01 82 83 15 14</a>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon">⏱️</span>
            <h3 className="contact-info-title">Délai de réponse</h3>
            <p className="contact-info-text">Nous nous engageons à répondre à toutes les demandes sous <strong>48h ouvrées</strong></p>
          </div>

          <div className="contact-quick-links">
            <p className="contact-quick-title">Avant de nous écrire...</p>
            <Link to="/expertises" className="contact-quick-link">🎯 Voir nos expertises</Link>
            <Link to="/offres" className="contact-quick-link">📦 Voir nos offres</Link>
            <Link to="/realisations" className="contact-quick-link">📊 Voir nos réalisations</Link>
            <Link to="/a-propos" className="contact-quick-link">👥 En savoir plus sur nous</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
