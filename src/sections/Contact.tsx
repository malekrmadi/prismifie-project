import { useState } from "react";
import { SectionWrapper } from "../components/ui/SectionWrapper";

//const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwchCyPcashBdNBJ8TxD-MTNBVbagrId39nMvs_3ChJpRqQwA2RojrDrtpFbDc9qMtk/exec";
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUOtgOmaDNT1Xq-f21dRyQhFwlimibLExpkS5sG5Rkk3WD7clVA0ZzbyCa0skcCJco/exec";
const API_KEY = "CONTACT_FORM_2025";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      api_key: API_KEY,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      sujet: formData.sujet,
      message: formData.message
    };

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <SectionWrapper id="contact">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '40px',
        padding: '40px 20px 60px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        {/* LEFT */}
        <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2.2rem',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#111111',
            lineHeight: '1.3'
          }}>
            Et si on <span style={{ color: '#EC4899', fontWeight: '700' }}>prismifiait</span> vos idées ?
          </h2>

          {status === 'success' ? (
            <div style={{
              backgroundColor: '#FEE2E2',
              border: '1px solid #FECACA',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                margin: '0 auto 15px',
                borderRadius: '50%',
                backgroundColor: '#EC4899',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem'
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111111', marginBottom: '10px' }}>
                Message envoyé !
              </h3>
              <p style={{ color: '#555555' }}>
                Merci, nous vous recontacterons très prochainement.
              </p>
              <button onClick={() => setStatus('idle')} style={{
                marginTop: '20px',
                background: 'none',
                border: 'none',
                color: '#EC4899',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <input name="nom" required placeholder="Nom" value={formData.nom} onChange={handleChange}
                  style={{ flex: 1, padding: '15px', borderRadius: '10px', border: '1px solid #DDD' }} />
                <input name="prenom" required placeholder="Prénom" value={formData.prenom} onChange={handleChange}
                  style={{ flex: 1, padding: '15px', borderRadius: '10px', border: '1px solid #DDD' }} />
              </div>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange}
                  style={{ flex: 1, padding: '15px', borderRadius: '10px', border: '1px solid #DDD' }} />
                <input name="sujet" placeholder="Sujet" value={formData.sujet} onChange={handleChange}
                  style={{ flex: 1, padding: '15px', borderRadius: '10px', border: '1px solid #DDD' }} />
              </div>

              <textarea name="message" required rows={5} placeholder="Votre message..."
                value={formData.message} onChange={handleChange}
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid #DDD', resize: 'none' }} />

              <button type="submit" disabled={status === 'submitting'} style={{
                backgroundColor: '#EC4899',
                color: 'white',
                padding: '15px',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer'
              }}>
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

            </form>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div style={{
          flex: '1 1 400px',
          minWidth: '300px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            alt="prismifie Collaboration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

      </div>
    </SectionWrapper>
  );
}
