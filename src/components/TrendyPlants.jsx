import { useEffect, useRef } from 'react'
import { BagIcon } from './Navbar'

const cards = [
  {
    title: 'For Your Desks Decorations',
    text: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: '/assets/plant-plantain-lily.png',
    imageClass: 'wide-card-plant-left',
    contentClass: 'wide-card-content-right',
  },
  {
    title: 'For Your Desks Decorations',
    text: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
    price: 'Rs. 399/-',
    image: '/assets/plant-succulent.png',
    imageClass: 'wide-card-plant-right',
    contentClass: 'wide-card-content-left',
  },
]

export default function TrendyPlants() {
  const sectionRef = useRef(null)

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

  return (
    <section id="trending" ref={sectionRef} className="trendy-section scroll-mt-28">
      <h2 className="section-title fade-in">Our Trendy plants</h2>

      <div className="trendy-stack">
        {cards.map((card) => (
          <article key={`${card.title}-${card.price}`} className="wide-card-wrap fade-in">
            <img
              src={card.image}
              alt={card.title}
              className={`wide-card-plant ${card.imageClass}`}
            />
            <div className="glass-panel">
              <div className={`wide-card-content ${card.contentClass}`}>
                <h3 className="panel-heading">{card.title}</h3>
                <p className="panel-text">{card.text}</p>
                <p className="price">{card.price}</p>
                <div className="button-row">
                  <a className="outline-button" href="#top-selling">Explore</a>
                  <button className="bag-button" type="button" aria-label={`Add ${card.title} to bag`}>
                    <BagIcon size={28} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
