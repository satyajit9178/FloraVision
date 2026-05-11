import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendyPlants from './components/TrendyPlants'
import TopSelling from './components/TopSelling'
import CustomerReview from './components/CustomerReview'
import BestO2 from './components/BestO2'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flora-page">
      <Navbar />
      <Hero />
      <TrendyPlants />
      <TopSelling />
      <CustomerReview />
      <BestO2 />
      <Footer />
    </div>
  )
}
