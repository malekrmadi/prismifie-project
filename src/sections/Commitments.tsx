import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Commitments() {
    const commitments = [
        {
            number: "01",
            title: "Clarté",
            desc: "Nous structurons, simplifions et priorisons pour rendre chaque décision évidente."
        },
        {
            number: "02",
            title: "Créativité",
            desc: "Nous concevons des expériences qui marquent, sans jamais perdre le sens."
        },
        {
            number: "03",
            title: "Confiance",
            desc: "Nous avançons avec méthode, transparence et responsabilité."
        }
    ];

    return (
        <SectionWrapper>
            <div className="commit-header">
                {/* Clean header, removed generic subtitle */}
            </div>

            <div className="commit-grid">
                {commitments.map((item, index) => (
                    <div key={index} className="commit-card">
                        <div className="commit-number">{item.number}</div>
                        <h3 className="commit-card-title">{item.title}</h3>
                        <p className="commit-card-desc">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
