import { useEffect } from "react"
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
    useEffect(() => {
        if (!('IntersectionObserver' in window)) return

        const section = document.querySelector('.lpfeatures')
        if (!section) return

        const cards = section.querySelectorAll('.lpfeature')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('is-visible', entry.isIntersecting && entry.intersectionRatio >= 0.15)
            })
        }, { threshold: [0, 0.15] })

        section.classList.add('lpfeatures-observed')
        cards.forEach((card) => observer.observe(card))

        return () => {
            observer.disconnect()
            section.classList.remove('lpfeatures-observed')
            cards.forEach((card) => card.classList.remove('is-visible'))
        }
    }, [])

    return (
        <section className="lpfeatures" aria-label="Discover Tennistix">
            {features.map((feature) => (
                <article className="lpfeature">
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </article>
            ))}
        </section>
    )
}

export default LpFeatures
