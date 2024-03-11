import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProductItem from '../ProductItem'

import './index.css'

class Products extends Component {
  state = {productsList: [], isLoading: true}

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    this.setState({productsList: data, isLoading: false})
  }

  render() {
    const {productsList, isLoading} = this.state
    console.log(productsList)
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {productsList.map(each => (
              <ProductItem mainList={each} key={each.id} />
            ))}
            )
          </ul>
        )}
      </div>
    )
  }
}

export default Products
