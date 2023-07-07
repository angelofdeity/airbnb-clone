import Navbar from "./components/Navbar"
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Hero />
      </div>
    </>
    )
}
