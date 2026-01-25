

export function Collaborations() {
    // Duplicate array for infinite scroll effect
    const partners = ["TechStart", "GlobalCorp", "InnovateX", "FutureWorks", "AlphaGroup", "OmegaSolutions", "TechStart", "GlobalCorp", "InnovateX", "FutureWorks", "AlphaGroup", "OmegaSolutions"];

    return (
        <section className="collab-section" style={{ backgroundColor: '#f3e8ff' }}>
            <style>{`
                .collab-section {
                    padding: 5rem 0;
                    overflow: hidden;
                }

                .collab-header {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 24px;
                    margin-bottom: 32px;
                    text-align: center;
                }

                .collab-title {
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #EC4899;
                }
            `}</style>

            <div className="collab-header">
                <h3 className="collab-title">Ils nous font confiance</h3>
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
