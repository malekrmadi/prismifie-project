import { useState } from "react";
import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
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
        {/* LEFT: Form */}
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
              {/* Ligne 1: Nom et Prénom */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <input type="text" required placeholder="Nom" style={{
                  flex: 1,
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid #DDD',
                  fontSize: '1rem'
                }} />
                <input type="text" required placeholder="Prénom" style={{
                  flex: 1,
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid #DDD',
                  fontSize: '1rem'
                }} />
              </div>

              {/* Ligne 2: Email et Sujet */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <input type="email" required placeholder="Email" style={{
                  flex: 1,
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid #DDD',
                  fontSize: '1rem'
                }} />
                <input type="text" placeholder="Sujet" style={{
                  flex: 1,
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid #DDD',
                  fontSize: '1rem'
                }} />
              </div>

              {/* Ligne 3: Message */}
              <textarea required rows={5} placeholder="Votre message..." style={{
                width: '100%',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid #DDD',
                fontSize: '1rem',
                resize: 'none'
              }} />

              {/* Bouton d'envoi */}
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

        {/* RIGHT: Image */}
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
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease-in-out'
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            padding: '20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            color: 'white'
          }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#EC4899', marginBottom: '5px' }}>prismifie</p>
            <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>Illuminez votre vision</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
