import star from '../assets/star.png'
import PropTypes from 'prop-types'
function Card(props) {
  return (
    <section className='card'>
      <div className='card--img-block'>
        <div className='card--label'>
          SOLD OUT
        </div>
        <img src={`../../public/images/${props.coverImg}`}></img>
      </div>
      <div className='card--description'>
        <p className='card--line-1'>
          <img src={star}></img>
          {' '}{props.rating}
          <span className='gray'> ({props.stats.reviewCount})∙{props.location}</span>
        </p>
        <p className='card--line-2'>
          {props.title}
        </p>
        <p className='card--line-3'>
          <span className='bold'>From {props.price}</span> / person
        </p>
      </div>
    </section>
  )
}

Card.propTypes = {
  coverImg: PropTypes.string,
  rating: PropTypes.string,
  stats: PropTypes.object,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
}

export default Card
