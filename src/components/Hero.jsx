import { useState } from 'react'
import CurvedCard from './CurvedCard'

const featuredPlants = [
  { name: 'Aglaonema  plant', type: 'Indoor Plant', image: '/assets/aglaonema-vivid.png' },
  { name: 'Plantain Lily', type: 'Indoor Plant', image: '/assets/plant-plantain-lily.png' },
  { name: 'Swiss Cheese', type: 'Indoor Plant', image: '/assets/plant-swiss-cheese.png' },
]

function PlayIcon() {
  return (
    <svg width="30" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7-11-7Z" />
    </svg>
  )
}

function Stars({ rating = 5 }) {
  return (
    <div className="stars" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
        >
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29c.13.41.52.69.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03c-.35.25-.5.7-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29c.14-.42-.01-.87-.36-1.12l-2.8-2.03c-.78-.57-.38-1.81.59-1.81h3.46c.43 0 .82-.28.95-.69l1.07-3.29Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const current = featuredPlants[currentSlide]

  return (
    <section id="home" className="hero-section">
      <img src="/assets/bg-hero.jpg" alt="" className="hero-bg" />

      <div className="page-shell hero-content">
        <div className="hero-copy">
          <h1 className="hero-title ">Earth's Exhale</h1>
          <p className="hero-lede">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>

          <div className="hero-cta-row">
            <a className="outline-button" href="#trending">Buy Now</a>
            <button className="play-button" type="button" aria-label="Play live demo" >
              <PlayIcon />
            </button>
            <span className="live-demo">Live Demo...</span>
          </div>

          <aside className="hero-mini-review" aria-label="Featured review">
            <div className="mini-review-head">
              <img src="/assets/portrait-ronnie.png" alt="Ronnie Hamill" className="avatar" />
              <div>
                <div className="mini-review-name">Ronnie Hamill</div>
                <Stars rating={4.5} />
              </div>
            </div>
            <p className="mini-review-text">
              I can't express how thrilled I am with my new natural plants! They bring such a
              fresh and vibrant energy to my home.
            </p>
          </aside>
        </div>

        <div className="hero-feature-wrap">
          <CurvedCard className="hero-feature-card">
            <img src={current.image} alt={current.name} className="hero-feature-plant" />
            <div className="hero-feature-body">
              <div className="plant-type">{current.type}</div>
              <div className="featured-name-row">
                <div className="featured-name">{current.name}</div>
                <button
                  className="arrow-plain"
                  type="button"
                  aria-label="Next featured plant"
                  onClick={() => setCurrentSlide((slide) => (slide + 1) % featuredPlants.length)}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <a href="#top-selling" className="outline-button feature-buy">Buy Now</a>
              <div className="dots" aria-label="Featured plant slides">
                {featuredPlants.map((plant, index) => (
                  <button
                    key={plant.name}
                    type="button"
                    aria-label={`Show ${plant.name}`}
                    className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </CurvedCard>
        </div>
      </div>
    </section>
  )
}

export { Stars }
