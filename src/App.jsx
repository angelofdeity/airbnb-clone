import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
import Footer from "./components/Footer";
const cards = data.map(data => {
  return <Card key={data.id} {...data} />
})
export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <Footer/>
    </div>
    )
}

