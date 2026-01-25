import { useState } from "react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { Button } from "../components/ui/Button";

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <SectionWrapper id="contact">
            <div className="contact-layout">
                {/* Left: Form */}
                <div className="contact-form-panel">
                    <h2 className="contact-title">
                        Prêt à faire briller votre vision ?
                    </h2>
                    <p className="contact-text">
                        Ensemble, construisons l'avenir de votre marque. Remplissez ce formulaire et commençons la discussion.
                    </p>

                    {status === 'success' ? (
                        <div className="contact-success-box">
                            <div className="contact-check-icon">✓</div>
                            <h3 className="text-2xl font-bold mb-2">Message reçu !</h3>
                            <p className="text-foreground opacity-60">Nous vous recontacterons très vite.</p>
                            <button onClick={() => setStatus('idle')} className="mt-8 text-primary underline">Envoyer un autre message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form-space">
                            <div>
                                <label htmlFor="name" className="contact-label">Nom</label>
                                <input required id="name" type="text" className="contact-input" placeholder="Votre nom" />
                            </div>
                            <div>
                                <label htmlFor="email" className="contact-label">Email</label>
                                <input required id="email" type="email" className="contact-input" placeholder="votre@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="contact-label">Message</label>
                                <textarea required id="message" rows={4} className="contact-input contact-textarea" placeholder="Parlez-nous de votre projet..." />
                            </div>
                            <Button disabled={status === 'submitting'} type="submit" className="contact-submit-btn">
                                {status === 'submitting' ? 'Envoi...' : 'Envoyer le message'}
                            </Button>
                        </form>
                    )}
                </div>

                {/* Right: Visual/Animation */}
                <div className="contact-visual">
                    {/* Abstract Modern Shape Animation */}
                    <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative z-10 glass-panel p-8 rounded-2xl border border-white/20">
                        <div className="text-center font-display font-bold text-2xl text-foreground">
                            Prismify<span className="text-primary">.</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
