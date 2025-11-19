import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
