import imgGrid from '../assets/img-grid.png'
export default function Hero() {
  return (
    <section className="hero">
      <img src={imgGrid} className='img-grid'></img>
      <h1 className='hero--heading'>Online Experiences</h1>
      <p className='hero--txt'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}
