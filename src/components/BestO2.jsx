import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    image: '/assets/aglaonema-vivid.png',
    heading: "We Have Small And Best O2 Plants Collection's",
    copy1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    copy2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
    alt: 'Aglaonema plant',
  },
  {
    image: '/assets/plant-plantain-lily.png',
    heading: 'Fresh Air, Fresh Life — Nature Indoors',
    copy1: 'Plantain Lilies (Hostas) are shade-loving perennial plants prized for their bold, lush foliage and ease of care in indoor environments.',
    copy2: 'Their large, textured leaves naturally humidify the air and create a calming, biophilic atmosphere that reduces stress and boosts productivity.',
    alt: 'Plantain Lily plant',
  },
  {
    image: '/assets/plant-swiss-cheese.png',
    heading: 'Breathe Better With Tropical Greenery',
    copy1: 'The Swiss Cheese Plant (Monstera Deliciosa) is celebrated for its dramatic split leaves and powerful air-purifying properties in home spaces.',
    copy2: 'Studies show that indoor tropical plants significantly reduce CO₂ levels and increase relative humidity, creating a healthier living environment.',
    alt: 'Swiss Cheese plant',
  },
  {
    image: '/assets/plant-sansevieria.png',
    heading: 'Nature\'s Silent Air Purifiers',
    copy1: 'Sansevieria (Snake Plant) is one of the most effective natural air purifiers, converting CO₂ to oxygen even at night — rare among houseplants.',
    copy2: 'Resilient and low-maintenance, Sansevieria thrives in a wide range of conditions and continuously filters toxins like benzene and xylene from indoor air.',
    alt: 'Sansevieria plant',
  },
]

export default function BestO2() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const slide = slides[current]
  const currentLabel = String(current + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')

  return (
    <section id="best-o2" ref={sectionRef} className="best-section scroll-mt-28">
      <h2 className="section-title fade-in">Our Best o2</h2>

      <article className="best-card-wrap fade-in">
        <div className="best-card">
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className="best-plant best-plant-anim"
          />
          <div className="best-content">
            <h3 className="best-heading" key={current + '-h'}>{slide.heading}</h3>
            <p className="best-copy" key={current + '-c1'}>{slide.copy1}</p>
            <p className="best-copy" key={current + '-c2'}>{slide.copy2}</p>

            <div className="best-controls">
              <a className="outline-button" href="#top-selling">Explore</a>

              <div className="best-pager" aria-label="Best O2 carousel pagination">
                <button
                  className="arrow-plain best-nav-btn"
                  type="button"
                  aria-label="Previous O2 plant"
                  onClick={prev}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <span className="best-pager-count" aria-live="polite">
                  <strong className="best-pager-current">{currentLabel}</strong>
                  <span className="best-pager-sep">/{totalLabel}</span>
                </span>

                <button
                  className="arrow-plain best-nav-btn"
                  type="button"
                  aria-label="Next O2 plant"
                  onClick={next}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="dots fade-in" aria-label="O2 plant slides">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`dot ${i === current ? 'dot-active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
