import { useEffect, useRef } from 'react'
import CurvedCard from './CurvedCard'
import { BagIcon } from './Navbar'

const plants = [
  {
    name: 'Aglaonema plant',
    price: 'Rs. 300/-',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    image: '/assets/aglaonema-vivid.png',
    plantPx: 370,   
    abovePx: 170, 
    bodyTopPx: 215, 
  },
  {
    name: 'Plantain Lilies',
    price: 'Rs. 380/-',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    image: '/assets/plant-plantain-lily.png',
    plantPx: 345,
    abovePx: 160,
    bodyTopPx: 200,
  },
  {
    name: 'Cactus',
    price: 'Rs. 259/-',
    description: 'It is known for their ability to thrive in arid environments',
    image: '/assets/plant-cactus.png',
    plantPx: 300,
    abovePx: 140,
    bodyTopPx: 175,
  },
  {
    name: 'Swiss cheese Plant',
    price: 'Rs. 400/-',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    image: '/assets/plant-swiss-cheese.png',
    plantPx: 355,
    abovePx: 165,
    bodyTopPx: 205,
  },
  {
    name: 'Sansevieria plant',
    price: 'Rs. 450/-',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    image: '/assets/plant-sansevieria.png',
    plantPx: 320,
    abovePx: 148,
    bodyTopPx: 185,
  },
  {
    name: 'Agave plant',
    price: 'Rs. 359/-',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    image: '/assets/plant-agave.png',
    plantPx: 330,
    abovePx: 152,
    bodyTopPx: 190,
  },
]

function vwScale(refPx, minRatio = 0.5, maxRatio = 1.15) {
  const vwFactor = (refPx / 500) * 32.5
  return `clamp(${Math.round(refPx * minRatio)}px, ${vwFactor.toFixed(2)}vw, ${Math.round(refPx * maxRatio)}px)`
}

function PlantCard({ plant, index }) {
  const style = {
    animationDelay: `${index * 0.08}s`,
    '--plant-size':    vwScale(plant.plantPx),
    '--plant-above':   vwScale(plant.abovePx),
    '--body-top':      vwScale(plant.bodyTopPx),
  }

  return (
    <article className="product-card-wrap fade-in" style={style}>
      <img src={plant.image} alt={plant.name} className="product-plant" />
      <CurvedCard className="product-card">
        <div className="product-card-body">
          <h3 className="product-name">{plant.name}</h3>
          <p className="product-description">{plant.description}</p>
          <div className="product-bottom">
            <p className="product-price">{plant.price}</p>
            <button className="bag-button small-bag" type="button" aria-label={`Add ${plant.name} to bag`}>
              <BagIcon size={27} />
            </button>
          </div>
        </div>
      </CurvedCard>
    </article>
  )
}

export default function TopSelling() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="top-selling" ref={sectionRef} className="top-selling-section scroll-mt-28">
      <div className="page-shell">
        <h2 className="section-title fade-in">Our Top Selling Plants</h2>
        <div className="product-grid">
          {plants.map((plant, index) => (
            <PlantCard key={plant.name} plant={plant} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
