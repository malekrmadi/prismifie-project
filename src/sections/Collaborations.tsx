

export function Collaborations() {
    // Duplicate array for infinite scroll effect
    const partners = ["TechStart", "GlobalCorp", "InnovateX", "FutureWorks", "AlphaGroup", "OmegaSolutions", "TechStart", "GlobalCorp", "InnovateX", "FutureWorks", "AlphaGroup", "OmegaSolutions"];

    return (
        <section className="collab-section">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Ils nous font confiance</h3>
            </div>

            <div className="collab-track">
                {partners.map((partner, index) => (
                    <div key={index} className="collab-logo">
                        {partner}
                    </div>
                ))}
            </div>
        </section>
    );
}
