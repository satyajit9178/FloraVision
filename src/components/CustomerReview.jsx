import { useEffect, useRef } from 'react'
import CurvedCard from './CurvedCard'
import { Stars } from './Hero'

const reviews = [
  {
    name: 'Shelly Russel',
    image: '/assets/portrait-shelly.png',
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    rating: 5,
  },
  {
    name: 'Lula Rolfson',
    image: '/assets/portrait-lula.jpg',
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    rating: 5,
  },
  {
    name: 'Carol Huels',
    image: '/assets/portrait-carol.png',
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment-my plant collection has never looked better!",
    rating: 4.5,
  },
]

export default function CustomerReview() {
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
    <section id="reviews" ref={sectionRef} className="reviews-section scroll-mt-28">
      <div className="page-shell">
        <h2 className="section-title fade-in">Customer Review</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <CurvedCard
              key={review.name}
              className="review-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="review-card-body">
                <div className="review-head">
                  <img src={review.image} alt={review.name} className="review-avatar" />
                  <div>
                    <h3 className="review-card-name">{review.name}</h3>
                    <Stars rating={review.rating} />
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            </CurvedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
