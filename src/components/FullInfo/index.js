import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class FullInfo extends Component {
  state = {info: {}}

  componentDidMount() {
    this.getExactData()
  }
  getExactData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://fakestoreapi.com/products/${id}`
    const mainData = await fetch(url)
    const data = await mainData.json()
    this.setState({info: data})
  }

  render() {
    const {info} = this.state
    const {title, image, price, rating, category, description} = info
    return (
      <div className='hill-cart'>
        <div>
          <img src={image} alt={image} className='main-image' />
        </div>
        <div className='dim'>
          <h1>{category}</h1>
          <h1>{title}</h1>
          <h1 className='price2'>RS/-{price}</h1>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default FullInfo
