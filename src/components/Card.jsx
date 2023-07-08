import star from '../assets/star.png'
import PropTypes from 'prop-types'
function Card(props) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className='card'>
      <div className='card--img-block'>
        {badgeText && <div className='card--label'>{badgeText}</div>}
        <img className='card--img' src={props.coverImg}></img>
      </div>
      <div className='card--description'>
        <p className='card--line-1'>
          <img src={star}></img>
          {' '}{props.stats.rating}
          <span className='gray'> ({props.stats.reviewCount})∙{props.location}</span>
        </p>
        <p className='card--line-2'>
          {props.title}
        </p>
        <p className='card--line-3'>
          <span className='bold'>From {props.price}</span> / person
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  openSpots: PropTypes.number,
  coverImg: PropTypes.string,
  rating: PropTypes.string,
  stats: PropTypes.object,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
}

export default Card
