import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Expertise() {
    const expertiseAreas = [
        "Audit Stratégique", "Architecture Technique",
        "UI / UX Design", "Développement Front-End",
        "React & Next.js", "Performance Web",
        "SEO Technique", "Accessibilité"
    ];

    return (
        <SectionWrapper id="expertise">
            <div className="expertise-layout">
                <div>
                    <h2 className="expertise-title">Expertise & Certifications</h2>
                    <p className="expertise-text">
                        Nous ne croyons pas au "tout faire", mais au "bien faire".
                        Notre excellence repose sur une maîtrise pointue des technologies modernes et une rigueur méthodologique éprouvée.
                    </p>
                </div>

                <div className="tools-grid">
                    {expertiseAreas.map((item, index) => (
                        <div key={index} className="tool-card">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
