import '../styles/components/_lpfeatures.scss'

const features = [
    {
        title: 'Follow the matches',
        description: 'Keep up with the latest matches and results across the tennis tour.'
    },
    {
        title: 'Make your picks',
        description: 'Choose your winners for upcoming matches, completely free.'
    },
    {
        title: 'Challenge your friends',
        description: 'Create friendly rivalries and see how you stack up on the rankings.'
    }
]

function LpFeatures() {
    return (
        <section className="lpfeatures" aria-label="Discover TennisTix">
            {features.map((feature) => (
                <article className="lpfeature" key={feature.title}>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </article>
            ))}
        </section>
    )
}

export default LpFeatures
