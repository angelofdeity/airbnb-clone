import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
const cards = data.map(data => {
  return <Card {...data} />
})
export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      {/* <Card
        img='../public/images/katie-zafares.png'
        rating='5.0'
        reviewCount={6}
        country='Germany'
        title='Life Lessons with Katie Zaferes'
        price={136}
      /> */}
    </div>
    )
}

