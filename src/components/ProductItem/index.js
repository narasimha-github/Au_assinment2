import {Link} from 'react-router-dom'
import './index.css'

const ProductItem = props => {
  const {mainList} = props
  const {title, image, price, rating, category, id} = mainList
  const {rate} = rating

  return (
    <Link to={`/${id}`} className="link-tag">
      <div className="main">
        <div className="each_item">
          <div>
            <img src={image} alt={image} className="img" />
          </div>
          <div className="sub-container">
            <h1>{category}</h1>
            <p>{title}</p>
            <p className="rate">{rate}</p>
            <h2>RS/-{price}</h2>
            <button className="button">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
