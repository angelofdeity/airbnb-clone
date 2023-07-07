import imgGrid from '../assets/img-grid.png'
export default function Hero() {
  return (
    <div className="hero">
      <div className="img-grid">
        <img src={imgGrid}></img>
      </div>
      <div className="hero--article">
        <h3 className='hero--heading'>Online Experiences</h3>
        <p className='hero--txt'>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}
