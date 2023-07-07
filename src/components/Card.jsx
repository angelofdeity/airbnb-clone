import katie from '../assets/katie-zafares.png'
import star from '../assets/star.png'
export default function Card() {
  return (
    <section className='card'>
      <div className='card--img-block'>
        <div className='card--label'>
          SOLD OUT
        </div>
        <img src={katie}></img>
      </div>
      <div className='card--description'>
        <p className='card--line-1'>
          <img src={star}></img>
          {' '}5.0
          <span className='card--light'> (6) USA</span>
        </p>
        <p className='card--line-2'>
          Life lessons with Katie Zaferes
        </p>
        <p className='card--line-3'>
          <span className='card--bold'>From $135</span> / person
        </p>
      </div>
    </section>
  )
}
